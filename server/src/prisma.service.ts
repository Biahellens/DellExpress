/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get user() {
    return this.prisma.user;
  }

  get order() {
    return this.prisma.order;
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
