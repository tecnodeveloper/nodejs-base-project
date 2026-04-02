import express from 'express';

import path from 'path';

import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
const adapter = new PrismaBetterSqlite3({
  url: `file:${path.resolve('dev.db')}`,
});

export const prisma = new PrismaClient({ adapter });

// const prisma = new PrismaClient();
const router = express.Router();
export default router.post('/book',  );

