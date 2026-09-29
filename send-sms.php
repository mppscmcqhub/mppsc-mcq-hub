<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'config.php नहीं मिला।'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$config = require $configFile;

function reply(bool $ok, string $message, array $extra = [], int $status = 200): void {
    http_response_code($status);
    echo json_encode(array_merge([
        'ok' => $ok,
        'message' => $message
    ], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(false, 'Only POST requests are allowed.', [], 405);
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);

if (!is_array($data)) {
    $data = $_POST;
}

$token = trim((string)($data['token'] ?? ''));
if ($token === '' || !hash_equals(
    (string)($config['endpoint_token'] ?? ''),
    $token
)) {
    reply(false, 'Unauthorized SMS request.', [], 401);
}

$phone = preg_replace('/\D+/', '', (string)($data['phone'] ?? ''));
$course = strtoupper(trim((string)($data['course'] ?? '')));
$password = trim((string)($data['password'] ?? ''));

if (!preg_match('/^[6-9]\d{9}$/', $phone)) {
    reply(false, 'Invalid Indian mobile number.', [], 422);
}

if (!in_array($course, ['PRELIMS', 'MAINS'], true)) {
    reply(false, 'Course must be PRELIMS or MAINS.', [], 422);
}

/*
 * Password is expected from admin.html.
 * If admin.html does not send one, generate a random password such as:
 * GDFT4lskj
 */
if ($password === '') {
    $upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    $lower = 'abcdefghijkmnopqrstuvwxyz';
    $digits = '23456789';

    $password =
        $upper[random_int(0, strlen($upper) - 1)] .
        $upper[random_int(0, strlen($upper) - 1)] .
        $upper[random_int(0, strlen($upper) - 1)] .
        $upper[random_int(0, strlen($upper) - 1)] .
        $lower[random_int(0, strlen($lower) - 1)] .
        $lower[random_int(0, strlen($lower) - 1)] .
        $lower[random_int(0, strlen($lower) - 1)] .
        $digits[random_int(0, strlen($digits) - 1)];

    $chars = str_split($password);
    shuffle($chars);
    $password = implode('', $chars);
}

$authKey = trim((string)($config['msg91_authkey'] ?? ''));
$flowId  = trim((string)($config['msg91_flow_id'] ?? ''));
$sender  = trim((string)($config['msg91_sender_id'] ?? ''));
$loginUrl = trim((string)($config['login_url'] ?? 'https://mppscportal.in'));

if (
    $authKey === '' ||
    $flowId === '' ||
    $sender === '' ||
    str_contains($authKey, 'PASTE_') ||
    str_contains($flowId, 'PASTE_')
) {
    reply(false, 'SMS configuration is incomplete. Please update config.php.', [], 500);
}

/*
 * IMPORTANT:
 * Your MSG91 DLT-approved template/flow must use these variable names:
 *   COURSE
 *   PASSWORD
 *   LOGINURL
 *
 * Example approved message:
 * "MPPSC MCQ Hub: आपका {COURSE} course approve हो गया है.
 *  Login Password: {PASSWORD}
 *  Login: {LOGINURL}"
 *
 * The exact template text must match the DLT-approved template in MSG91.
 */
$payload = [
    'template_id' => $flowId,
    'short_url' => '0',
    'recipients' => [
        [
            'mobiles' => '91' . $phone,
            'COURSE' => $course,
            'PASSWORD' => $password,
            'LOGINURL' => $loginUrl
        ]
    ]
];

$ch = curl_init('https://control.msg91.com/api/v5/flow');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    CURLOPT_HTTPHEADER => [
        'accept: application/json',
        'authkey: ' . $authKey,
        'content-type: application/json'
    ],
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 25
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($curlError !== '') {
    reply(false, 'SMS server connection failed.', [
        'error' => $curlError
    ], 502);
}

$decoded = json_decode((string)$response, true);

if ($httpCode >= 200 && $httpCode < 300) {
    reply(true, 'SMS request accepted by MSG91.', [
        'phone' => $phone,
        'course' => $course,
        'password' => $password,
        'provider_response' => $decoded ?? $response
    ]);
}

reply(false, 'MSG91 rejected the SMS request.', [
    'http_code' => $httpCode,
    'provider_response' => $decoded ?? $response
], 502);
?>
