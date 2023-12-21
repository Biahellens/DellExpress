import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaService {
  constructor() {
    prisma.$connect();
  }

  async user() {
    return prisma.users;
  }

  get order() {
    return prisma.orders;
  }


  async disconnect() {
    await prisma.$disconnect();
  }
}
