<?php
// =============================================================
// MPPSC MCQ Hub - SMS configuration
// Fast2SMS API credentials are kept on the server, not in HTML.
// =============================================================

return [
    // Get this from Fast2SMS -> Dev API.
    'fast2sms_api_key' => 'PASTE_YOUR_FAST2SMS_API_KEY_HERE',

    // Shared secret between admin.html and this PHP endpoint.
    // Change this to a long random value before uploading.
    'endpoint_token' => 'VtIhcu98gS3l2US18xY12sjq_s2cEltQu6pj8J2MoAI',

    // true = Fast2SMS Quick SMS route (good for testing/internal alerts).
    // For production business SMS in India, use your DLT-approved route/template.
    'use_quick_sms' => true,

    // Optional DLT settings. Used only when use_quick_sms = false.
    'dlt_sender_id' => 'YOUR_SENDER_ID',
    'dlt_template_id' => 'YOUR_TEMPLATE_ID',
    'dlt_entity_id' => 'YOUR_ENTITY_ID',
];
