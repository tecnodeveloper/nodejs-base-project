# Express-Nodejs template project (Node.js + Express + Prisma + SQLite)

Backend API for a Book Store system built with Node.js and Express.  
Includes Prisma ORM with SQLite, Swagger docs, linting, formatting, and Docker support.

---

## Features

- Express server with basic folder structure
- Health check endpoint (`/health`)
- SQLite database (file-based)
- Prisma ORM integration
- Swagger API documentation (`/api-docs`)
- ESLint + Prettier setup
- Pre-commit hooks with Husky + lint-staged
- Nodemon for auto-reload
- Docker support

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **Prisma ORM**
- **SQLite**
- **Swagger (swagger-ui-express, swagger-jsdoc)**
- **ESLint + Prettier**
- **Husky + lint-staged**
- **Docker**

---

## Project Structure

```

.
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   └── app.js
├── prisma/
│   └── schema.prisma
├── .husky/
├── .eslintrc
├── .prettierrc
├── Dockerfile
├── package.json
└── README.md

```

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

## Prisma Model

```prisma
model Book {
  id        Int     @id @default(autoincrement())
  name      String
  author    String
  price     Float
  publisher String?
}
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

## Scripts

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write .",
  "prisma:migrate": "npx prisma migrate dev",
  "prisma:generate": "npx prisma generate"
}
```

---

## Environment Variables

Create a `.env` file:

```
DATABASE_URL="file:./dev.db"
PORT=3000
```

---

## Status

- Core setup complete
- Database connected
- Tooling configured
- Dockerized

---

## Books API

```
POST /books ""Endpoint**
```

**Description:**
Creates a new book with multiple authors and stores it in the database.

---

### Request Body

```json
{
  "name": "Atomic Habits",
  "authors": ["Zain", "Chris"],
  "price": 100,
  "publisher": "Humdard Publisher"
}
```

---

### Validation Rules

- `name` → required (string)
- `authors` → required (array of strings)
- `price` → required (number, must be ≥ 0)
- `publisher` → optional (string)

---

### Responses

#### 201 - Created

```json
{
  "id": 1,
  "name": "Atomic Habits",
  "price": 100,
  "publisher": "Humdard Publisher",
  "authors": [{ "name": "Zain" }, { "name": "Chris" }]
}
```

---

#### 400 - Bad Request

```json
{
  "error": "Validation failed",
  "details": "Invalid input data"
}
```

---

## Testing the API

You can test the API using:

- Swagger UI → `http://localhost:3000/api-docs`
- Postman / Thunder Client

---

## Notes

- Ensure `express.json()` middleware is enabled
- Request body must match validation schema
