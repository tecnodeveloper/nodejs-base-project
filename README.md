# Express-Nodejs template project (Node.js + Express + Prisma + SQLite)

Backend API for a Book Store system built with Node.js and Express.  
Includes Prisma ORM with SQLite, Swagger docs, linting, formatting, and Docker support.

---

## Features

- Express server with basic folder structure
- SQLite database (file-based)
- Prisma ORM integration
- Swagger API documentation (`/api-docs`)
- ESLint + Prettier setup
- Pre-commit hooks with Husky + lint-staged
- Docker support

---

## Tech Stack

- **Express**
- **Prisma ORM**
- **SQLite**
- **Swagger (swagger-ui-express, swagger-jsdoc)**

---

## Setup & Installation

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

- Server runs on: `http://localhost:3000`
- Health check: `GET /health`
- Swagger docs: `http://localhost:3000/api-docs`

---

## Database Setup (Prisma + SQLite)

### Initialize Prisma

```bash
npx prisma init
```

### Run Migration

```bash
npm run prisma:migrate
```

### Generate Prisma Client

```bash
npm run prisma:generate
```

---

## Linting & Formatting

### Check lint

```bash
npm run lint
```

### Fix lint issues

```bash
npm run lint:fix
```

### Format code

```bash
npm run format
```

---

## Pre-commit Hooks

- ESLint runs on staged files
- Prettier formats staged files
- Commit blocked on errors

---

## Docker

### Build Image

```bash
docker build -t bookstore-api .
```

### Run Container

```bash
docker run -p 3000:3000 bookstore-api
```

---

## Environment Variables

Create a `.env` file:

```
DATABASE_URL="file:./dev.db"
PORT=3000
```

---

### Validation Rules

- `name` → required (string)
- `authors` → required (array of strings)
- `price` → required (number, must be ≥ 0)
- `publisher` → optional (string)

---

## Testing the API

You can test the API using:

- Swagger UI → `http://localhost:3000/api-docs`
- Postman / Thunder Client
