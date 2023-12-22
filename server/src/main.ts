import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  return app;
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
