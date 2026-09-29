MPPSC MCQ HUB - SMS BACKEND
=============================

This package provides a PHP endpoint for sending the student approval SMS.

FILES
-----
1. send-sms.php  -> SMS API endpoint
2. config.php    -> MSG91 credentials/configuration
3. test-sms.html -> test page
4. .htaccess     -> protects config.php and README.txt

IMPORTANT
---------
GitHub Pages cannot execute PHP. These PHP files must be uploaded to
a PHP-enabled hosting/server for mppscportal.in (or another backend host).

FIREBASE
--------
This PHP method does NOT require Firebase Cloud Functions.
Therefore you do not need to upgrade Firebase just to run this PHP endpoint.

MSG91 SETUP
-----------
1. Create/login to your MSG91 account.
2. Configure SMS sender ID and DLT-approved template/flow.
3. The template must contain variables that your MSG91 setup accepts.
4. Put the Auth Key, Flow/Template ID and Sender ID into config.php.
5. Change endpoint_token to a long random secret.
6. Upload all files to your PHP hosting.
7. Open test-sms.html and send one test SMS.

EXPECTED ADMIN REQUEST
---------------------
POST JSON to send-sms.php:

{
  "token": "YOUR_ENDPOINT_TOKEN",
  "phone": "9876543210",
  "course": "PRELIMS",
  "password": "GDFT4lskj"
}

course must be PRELIMS or MAINS.

PASSWORD
--------
If admin.html sends no password, send-sms.php generates a random 8-character
password automatically.

SECURITY
--------
Never put MSG91 Auth Key in admin.html.
Only send the endpoint token from admin.html.
Keep config.php on the server.

DLT
---
For Indian commercial/service messaging, sender/header and content-template
requirements can apply. Use the template approved in your SMS provider/DLT
setup. Do not change the live SMS text without updating the approved template
when required.

ADMIN INTEGRATION
-----------------
After a payment is approved and the password is saved, admin.html should call:

fetch('https://YOUR-PHP-HOST/send-sms.php', {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({
    token: 'YOUR_ENDPOINT_TOKEN',
    phone: studentMobile,
    course: 'PRELIMS',
    password: generatedPassword
  })
});

For MAINS change course to 'MAINS'.

NOTE
----
The package intentionally does not contain your real MSG91 Auth Key or endpoint
token. Never publish those secrets in a public GitHub repository.
