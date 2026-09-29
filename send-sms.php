<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$config = require __DIR__ . '/config.php';

function reply($ok, $message, $extra = [], $status = 200) {
    http_response_code($status);
    echo json_encode(array_merge([
        'ok' => $ok,
        'message' => $message
    ], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(false, 'Only POST requests are allowed.', [], 405);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    reply(false, 'Invalid JSON request.', [], 400);
}

// The token is not a replacement for Firebase auth; it is an extra guard
// against accidental/public calls to this endpoint.
$token = $_SERVER['HTTP_X_SMS_TOKEN'] ?? ($data['token'] ?? '');
if (!hash_equals((string)$config['endpoint_token'], (string)$token)) {
    reply(false, 'SMS endpoint unauthorized.', [], 401);
}

$phone = preg_replace('/\D+/', '', (string)($data['phone'] ?? ''));
$password = trim((string)($data['password'] ?? ''));
$course = strtoupper(trim((string)($data['course'] ?? '')));

if (!preg_match('/^[6-9][0-9]{9}$/', $phone)) {
    reply(false, 'Invalid Indian mobile number.', [], 422);
}
if ($password === '' || strlen($password) > 32) {
    reply(false, 'Invalid password.', [], 422);
}
if (!in_array($course, ['PRELIMS', 'MAINS'], true)) {
    reply(false, 'Invalid course.', [], 422);
}

$apiKey = trim((string)$config['fast2sms_api_key']);
if ($apiKey === '' || str_contains($apiKey, 'PASTE_YOUR_')) {
    reply(false, 'Fast2SMS API key is not configured in sms/config.php.', [], 500);
}

// Keep the SMS short and in English for broad compatibility.
$message = "MPPSC MCQ Hub: Your {$course} course is approved. Mobile: {$phone} Password: {$password}. Login at mppscportal.in";

$url = 'https://www.fast2sms.com/dev/bulkV2';
$payload = [];

if (!empty($config['use_quick_sms'])) {
    // Fast2SMS Quick SMS route. For production/business messaging in India,
    // use a DLT-approved template route instead.
    $payload = [
        'route' => 'q',
        'message' => $message,
        'numbers' => $phone,
        'sms_details' => '1'
    ];
} else {
    if (str_contains($config['dlt_sender_id'], 'YOUR_') || str_contains($config['dlt_template_id'], 'YOUR_')) {
        reply(false, 'DLT sender ID/template ID is not configured.', [], 500);
    }

    // DLT template must already be approved with the exact variable layout.
    // Configure your DLT template and adjust variables_values to match it.
    $payload = [
        'route' => 'dlt',
        'sender_id' => $config['dlt_sender_id'],
        'message' => $config['dlt_template_id'],
        'variables_values' => $phone . '|' . $password . '|' . $course,
        'numbers' => $phone,
        'sms_details' => '1'
    ];
}

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    CURLOPT_HTTPHEADER => [
        'Authorization: ' . $apiKey,
        'Content-Type: application/json',
        'Accept: application/json'
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 25,
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
    reply(false, 'Fast2SMS connection failed: ' . $curlError, [], 502);
}

$decoded = json_decode($response, true);
if (!is_array($decoded)) {
    reply(false, 'Fast2SMS returned an unexpected response.', ['http_code' => $httpCode], 502);
}

if ($httpCode >= 200 && $httpCode < 300 && !empty($decoded['return'])) {
    reply(true, 'SMS sent successfully.', [
        'request_id' => $decoded['request_id'] ?? null,
        'provider' => 'Fast2SMS'
    ]);
}

$providerMessage = '';
if (isset($decoded['message'])) {
    $providerMessage = is_array($decoded['message']) ? implode(', ', $decoded['message']) : (string)$decoded['message'];
}

reply(false, $providerMessage ?: 'Fast2SMS rejected the SMS request.', [
    'http_code' => $httpCode,
    'provider_response' => $decoded
], 502);
