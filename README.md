# TradeX — Deployment & Submission Checklist

A campus marketplace for KNUST students. Built with React (Vite) + Express + Prisma + Supabase.

---

## Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, Vite, React Bootstrap   |
| Backend   | Node.js, Express 5, Prisma 7      |
| Database  | PostgreSQL via Supabase            |
| Storage   | Supabase Storage (item-images)    |
| Auth      | JWT (7-day expiry, localStorage)  |
| Hosting   | Vercel (frontend) · Railway (backend) |

---

## Local Development

```bash
# 1. Backend
cd server
cp .env.example .env        # fill in all values
npm install
npm run dev                 # http://localhost:8000

# 2. Frontend (separate terminal)
cd client
cp .env.example .env        # set VITE_API_URL=http://localhost:8000
npm install
npm run dev                 # http://localhost:5173

# 3. Seed the database (optional)
cd server
npm run seed
```

---

## Environment Variables

### Backend (`server/.env`)

| Variable                | Required | Description                                          |
|-------------------------|----------|------------------------------------------------------|
| `PORT`                  | No       | Server port (default 8000)                           |
| `DATABASE_URL`          | Yes      | Supabase pooler connection string (pgBouncer)        |
| `DIRECT_URL`            | Yes      | Supabase direct connection string (for migrations)   |
| `JWT_SECRET`            | Yes      | Long random string for signing JWTs                  |
| `SUPABASE_URL`          | Yes      | Supabase project URL                                 |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes  | Supabase service-role key (not anon key)             |
| `EMAIL_USER`            | No       | Gmail address for password-reset emails              |
| `EMAIL_PASS`            | No       | Gmail app password (not your account password)       |
| `NODE_ENV`              | Yes      | `production` on Railway, `development` locally       |
| `ALLOWED_ORIGINS`       | Yes      | Comma-separated frontend URLs, e.g. `https://tradex.vercel.app` |
| `CLIENT_ORIGIN`         | Yes      | Frontend URL used in password-reset email links      |
| `ADMIN_EMAILS`          | No       | Comma-separated emails with admin privileges         |

### Frontend (`client/.env`)

| Variable       | Required | Description                              |
|----------------|----------|------------------------------------------|
| `VITE_API_URL` | Yes      | Backend URL, e.g. `https://tradex.up.railway.app` |

---

## Deploying to Railway (Backend)

1. Push the repo to GitHub.
2. Create a new Railway project → **Deploy from GitHub repo**.
3. Set the root directory to `server/`.
4. Add all environment variables from the table above.
5. Railway reads `railway.json` automatically:
   - Start command: `node src/index.js`
   - Healthcheck: `GET /api` → `{ ok: true }`
   - Restart policy: on failure, up to 3 retries
6. After deploy, copy the Railway public URL into `ALLOWED_ORIGINS` and redeploy.

---

## Deploying to Vercel (Frontend)

1. Create a new Vercel project → import the same GitHub repo.
2. Set the root directory to `client/`.
3. Add `VITE_API_URL` pointing to your Railway backend URL.
4. Vercel reads `vercel.json` automatically:
   - All routes rewrite to `/index.html` for SPA routing.
5. Copy the Vercel deployment URL back into the backend's `ALLOWED_ORIGINS`.

---

## Database Migrations

```bash
# Apply pending migrations to production DB
cd server
npx prisma migrate deploy
```

Run this after any schema changes before deploying the new backend.

---

## Pre-Submission Checklist

- [ ] `NODE_ENV=production` set on Railway
- [ ] `ALLOWED_ORIGINS` contains the exact Vercel URL (no trailing slash)
- [ ] `CLIENT_ORIGIN` contains the exact Vercel URL (used in reset-password emails)
- [ ] `JWT_SECRET` is a long (32+ char) random string — not a placeholder
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is the **service role** key, not the anon key
- [ ] `EMAIL_USER` and `EMAIL_PASS` set if password-reset emails are required
- [ ] `ADMIN_EMAILS` contains at least one admin email for category management
- [ ] `npx prisma migrate deploy` run against production DB
- [ ] Supabase Storage bucket `item-images` exists and is set to **public**
- [ ] Health check passes: `GET https://<railway-url>/api` returns `{ ok: true }`
- [ ] Frontend loads and can log in with a `@st.knust.edu.gh` email

---

## File Upload Limits

| Upload type | Max size | Max count | Accepted formats         |
|-------------|----------|-----------|--------------------------|
| Listing images | 5 MB  | 5         | JPEG, PNG, WebP, GIF     |
| Lost & Found images | 5 MB | 5    | JPEG, PNG, WebP, GIF     |
| Avatar      | 2 MB     | 1         | JPEG, PNG, WebP, GIF     |

---

## API Overview

| Method | Path                          | Auth     | Description                        |
|--------|-------------------------------|----------|------------------------------------|
| POST   | `/api/auth/register`          | Public   | Register with KNUST email          |
| POST   | `/api/auth/login`             | Public   | Login, returns JWT                 |
| GET    | `/api/auth/me`                | Required | Get current user profile           |
| PUT    | `/api/auth/me`                | Required | Update profile / avatar            |
| GET    | `/api/listings`               | Public   | Paginated listings (`?page=&limit=`) |
| POST   | `/api/listings`               | Required | Create a listing                   |
| PUT    | `/api/listings/:id`           | Owner    | Edit a listing                     |
| DELETE | `/api/listings/:id`           | Owner    | Soft-delete a listing              |
| GET    | `/api/messages/conversations` | Required | All conversations (DB-level aggregation) |
| GET    | `/api/messages/:partnerId`    | Required | Message thread + mark-read         |
| POST   | `/api/messages`               | Required | Send a message                     |
| POST   | `/api/transactions`           | Required | Initiate a purchase                |
| PUT    | `/api/transactions/:id`       | Party    | Complete or cancel                 |
| GET    | `/api/lostfound`              | Public   | Lost & Found posts                 |
| POST   | `/api/lostfound`              | Required | Report lost/found item             |
| GET    | `/api/saved`                  | Required | Saved listings                     |
| POST   | `/api/saved/:listingId`       | Required | Save a listing                     |
| DELETE | `/api/saved/:listingId`       | Required | Unsave a listing                   |
| POST   | `/api/reports`                | Required | Report a listing or post           |
| GET    | `/api/categories`             | Public   | All categories                     |
