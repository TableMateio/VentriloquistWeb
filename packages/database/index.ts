import 'server-only';
import { PrismaClient } from './generated/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const database = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = database;
}

export * from './generated/client';
