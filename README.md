# E-commerce MERN (backend + frontend)

This repo contains:
- `backend/` – Express + MongoDB API
- `frontend/` – React (Vite)

## Prerequisites
- Node.js 18+ (recommended)
- MongoDB (local) **or** Docker Desktop (to run Mongo via compose)

## 1) Configure environment variables

### Backend
1. Go to `backend/`
2. Copy `.env.example` → `.env`
3. Update `MONGO_URI` and `JWT_SECRET`

### Frontend (optional)
If you want to point Vite dev proxy to a different backend:
1. Go to `frontend/`
2. Copy `.env.example` → `.env.local`
3. Change `VITE_API_URL`

> By default, the Vite dev server proxies `/api/*` to `http://localhost:5000`.

## 2) Start MongoDB

### Option A — Local MongoDB
Make sure MongoDB is running on `mongodb://localhost:27017`.

### Option B — Docker (recommended)
From this folder (`resturant-mern-main/`):
```bash
docker compose up -d
```

## 3) Install dependencies (backend + frontend)
From this folder:
```bash
npm run install:all
```

## 4) Run the app (dev mode)
From this folder:
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend health check: http://localhost:5000/api/health

## Seed sample data (optional)
```bash
npm run seed
```

## Notes
- `node_modules/` is intentionally **not** included in the zip/repo. The scripts above install everything deterministically using the lockfiles.
