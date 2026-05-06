// src/lib/prisma.js
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
const adapter = new PrismaBetterSqlite3({
  url: `file:${path.resolve('dev.db')}`,
});
export const prisma = new PrismaClient({ adapter });
