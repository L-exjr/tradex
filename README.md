# TradeX

Campus marketplace for students (**KNUST** `@st.knust.edu.gh` accounts): listings, lost & found, messaging, transactions, saved items, and reports.

## Stack

| Part | Tech |
|------|------|
| **Client** | React 19, Vite 8, React Router 7, React Bootstrap, TanStack Query |
| **Server** | Express 5, Prisma 7 (PostgreSQL), JWT auth, Supabase Storage (images) |
| **Database** | PostgreSQL (e.g. Supabase) |

## Repo layout

```
tradex/
├── client/          # Vite SPA
├── server/          # Express API + Prisma
└── README.md
```

## Prerequisites

- Node.js 20+ (recommended)
- PostgreSQL (local or hosted, e.g. Supabase)
- A Supabase project if you use Supabase Storage for uploads

## Quick start (local)

### 1. Server

```bash
cd server
cp .env.example .env
# Edit .env: DATABASE_URL, JWT_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, etc.

npm install
npx prisma generate
npm run dev
```

API defaults to **http://localhost:5000** (or `PORT` in `.env`).

Health check: `GET http://localhost:5000/api`

### 2. Client

```bash
cd client
cp .env.example .env
# Optional: VITE_API_URL=http://localhost:5000

npm install
npm run dev
```

App: **http://localhost:5173**

### 3. Seed categories (optional)

```bash
cd server
npm run seed
```

## Environment variables

### Server (`server/.env`)

See **`server/.env.example`**. Important keys:

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret for signing JWTs |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only; storage uploads |
| `ALLOWED_ORIGINS` | Comma-separated browser origins (CORS) |
| `CLIENT_ORIGIN` | Public web app URL (password-reset links in email) |
| `EMAIL_USER` / `EMAIL_PASS` | Optional; Gmail or other SMTP for password reset |
| `ADMIN_EMAILS` | Comma-separated emails allowed to **create/update/delete categories** and see **all** reports |

### Client (`client/.env`)

| Variable | Purpose |
|----------|---------|
| `VITE_API_URL` | API origin **without** `/api` (e.g. `http://localhost:5000`). Required in production builds. |

## Database & Prisma

- Prisma **7** uses **`server/prisma.config.ts`** for the datasource URL (not `url` in `schema.prisma`).
- Migrations live under **`server/prisma/migrations/`**.

### Apply migrations

Use a **direct** Postgres URL (**port 5432**) when running CLI commands. Supabase’s **transaction pooler** (`:6543`) is often unsuitable for `migrate deploy` (advisory locks).

```bash
cd server
npx prisma migrate deploy
```

### Existing database already matches the schema

If tables exist but Prisma has no migration history, baseline after verifying the DB matches **`schema.prisma`**:

```bash
npx prisma migrate resolve --applied 20260330120000_init
```

### Introspect / drift

```bash
npx prisma migrate diff --from-url "$DATABASE_URL" --to-schema prisma/schema.prisma --script
```

If `db pull` or `migrate deploy` returns **P1001**, fix **network/DNS** and reachability to the database host first.

## Scripts

### Server (`server/package.json`)

| Script | Command |
|--------|---------|
| `npm run dev` | `nodemon src/index.js` |
| `npm start` | `node src/index.js` |
| `npm run seed` | Seed categories |
| `npm run migrate:deploy` | `prisma migrate deploy` |
| `npm run migrate:diff` | Print SQL from empty DB → current schema |

### Client (`client/package.json`)

| Script | Command |
|--------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

## Deployment (typical)

- **Frontend:** Vite static build on Vercel (or similar). Set **`VITE_API_URL`** to your API base URL, then rebuild.
- **Backend:** Node host (e.g. Railway, Render). Set **`PORT`** from the platform; do **not** override it unless you know the platform’s requirements. Set **`ALLOWED_ORIGINS`** and **`CLIENT_ORIGIN`** to your real web origin(s).
- **`client/vercel.json`** includes SPA rewrites so client-side routes work on refresh.

## Security notes

- Never commit **`.env`** or real secrets.
- **JWT** tokens are stored in **`localStorage`** on the client.
- Category mutations and full report listing are restricted by **`ADMIN_EMAILS`** (see server routes).

## License

ISC (see `server/package.json`). Update as needed for your team.
