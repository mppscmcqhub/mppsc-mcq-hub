# Student + Admin Paid Course Flow

## Courses
- Paid PRELIMS: 200 tests (10 units × 20)
- Paid MAINS: 600 practice boxes (6 papers × 100)

## Student flow
1. Student opens Student Login or chooses a paid course from the home page.
2. Student submits mobile number, UTR and payment screenshot on `payment.html`.
3. The request appears in Admin under Payment Requests.
4. Admin approves the request.
5. Admin receives/shows the generated student password.
6. Student logs in at `student-login.html`.
7. Approved course(s) appear in `student-dashboard.html`.
8. PRELIMS and MAINS master pages and their individual boxes check the approved course session.

## Admin
- `admin-login.html` -> `admin.html`
- Payment approval supports PRELIMS and MAINS.
- If the same mobile buys both courses, the account keeps one password and gets both course permissions.
- Student Accounts are visible in the admin page.

## Important deployment note
This version uses browser `localStorage`/`sessionStorage`. It is suitable for a static/demo workflow, but it is **not a real multi-device authentication or payment-verification backend**. Data created in one browser is not automatically available to another device/browser, and client-side access checks can be bypassed by a technically skilled user.

For production on GitHub Pages, connect Firebase/Supabase (or another server backend) for real student accounts, payment requests, screenshots, approvals and protected course access.
