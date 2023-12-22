import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.listen(8080);
}

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

async function shutdown() {
  await prisma.$disconnect();
}

const app = bootstrap();

process.on('SIGTERM', async () => {
  await shutdown();
  process.exit(0);
});

process.on('SIGINT', async () => {
  await shutdown();
  process.exit(0);
});

export default app;
