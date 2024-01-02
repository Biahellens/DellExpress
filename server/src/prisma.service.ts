/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private readonly prisma: PrismaClient;
  private readonly logger = new Logger(PrismaService.name);

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
    try {
      await this.prisma.$disconnect();
      this.logger.log('Prisma client disconnected successfully.');
    } catch (error) {
      this.logger.error('Error disconnecting Prisma client:', error.stack || error.message || error);
    }
  }
}
