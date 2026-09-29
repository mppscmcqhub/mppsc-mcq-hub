# MPPSC MCQ Hub — Approve → Generate Password → SMS

यह package आपके Admin approval flow को इस तरह करता है:

1. Admin payment approve करता है।
2. Student password `RKO@so478` जैसे format में generate होता है।
3. Student account `localStorage.mppsc_students` में save होता है।
4. Admin page Firebase callable function को call करता है।
5. Callable function signed-in admin email verify करता है।
6. MSG91 Flow API से student mobile पर SMS request भेजी जाती है।
7. Admin को `SMS Sent` या `SMS Failed` status मिलता है।

## SMS provider

यह package MSG91 Flow API use करता है। MSG91 के वर्तमान API में Flow endpoint:
`https://control.msg91.com/api/v5/flow`

India में SMS भेजने के लिए sender/template/DLT requirements लागू हो सकती हैं। पहले MSG91 में approved DLT template/flow बनाएं।

Suggested template variables:
- VAR1 = PRELIMS या MAINS
- VAR2 = generated password
- VAR3 = mppscportal.in

Suggested message:
`MPPSC MCQ Hub: आपका {VAR1} course activate हो गया है। Login Password: {VAR2}. Website: {VAR3}`

## Firebase setup

Firebase CLI से project में:

```bash
firebase login
firebase use YOUR_FIREBASE_PROJECT_ID

firebase functions:secrets:set MSG91_AUTHKEY
firebase functions:secrets:set MSG91_FLOW_ID
firebase functions:secrets:set ADMIN_EMAIL

cd functions
npm install
cd ..

firebase deploy --only functions:sendStudentCredentialsSMS
```

`ADMIN_EMAIL` में वही Google email डालें जो आपके Admin panel में authorized है।

## बहुत जरूरी

MSG91 `authkey` को `admin.html` में कभी न डालें। वह Cloud Function secret में ही रहे।

Function region `asia-south1` रखा गया है। Admin page भी उसी region को call करता है।

`SMS Sent` का अर्थ provider ने request accept की है। वास्तविक handset delivery अलग provider delivery report पर निर्भर हो सकती है।

## Admin upload

`admin.html` को आपकी website के पुराने `admin.html` से replace करें।

बाकी Firebase project files/functions को GitHub/Firebase project में deploy करें।

## अगर आपके Firebase project में Functions अभी enabled नहीं हैं

Firebase CLI deployment पहली बार billing/Blaze plan मांग सकता है। Cloud Functions और SMS provider दोनों की अलग लागत/limits हो सकती हैं।
