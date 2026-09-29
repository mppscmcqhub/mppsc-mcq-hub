MPPSC MCQ Hub - SMS Approval Package
====================================

WHAT THIS ZIP DOES
------------------
When an admin approves a PRELIMS or MAINS payment, admin.html:
1. Creates the student account.
2. Generates a random 9-character password such as GDFT4lskj.
3. Calls sms/send-sms.php.
4. Sends the mobile number, course and password by SMS.

IMPORTANT
---------
A static HTML page cannot safely hold an SMS API key. This package therefore
uses a small PHP endpoint. Your hosting must support PHP + cURL.

FAST2SMS SETUP
--------------
1. Create/login to your Fast2SMS account.
2. Open the Dev API section and copy your API Authorization Key.
3. Open:
      sms/config.php
4. Replace:
      PASTE_YOUR_FAST2SMS_API_KEY_HERE
   with your real API key.
5. Change:
      CHANGE_THIS_TO_A_LONG_RANDOM_SECRET
   to a long random secret.
6. In admin.html, find:
      SMS_ENDPOINT_TOKEN
   and put exactly the same secret there.

DLT / PRODUCTION SMS
--------------------
For business SMS in India, use your DLT-approved sender/template. Fast2SMS
supports DLT routes. If you switch use_quick_sms to false, fill in the
DLT sender/template settings and make sure variables_values exactly match
your approved DLT template.

UPLOAD
------
Upload the files/folders preserving this structure:
  admin.html
  sms/
    config.php
    send-sms.php
    .htaccess

TEST
----
1. Upload the package.
2. Open admin.html and login with your authorized Google account + TOTP.
3. Approve a test payment for a real mobile number.
4. The student account is created with a random password and the SMS is sent.

SECURITY
--------
- Never put the Fast2SMS API key inside admin.html.
- Do not share sms/config.php publicly.
- Change the endpoint token before upload.
- The endpoint token is visible to a user who can inspect admin.html, so this
  is an additional guard, not a replacement for server-side Firebase auth.
