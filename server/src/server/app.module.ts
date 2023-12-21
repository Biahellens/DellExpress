import { Module } from '@nestjs/common'
import { OrderController } from './controllers/order.controller'
import { UserController } from './controllers/user.controller'
import { PrismaService } from './prisma.service'

@Module({
  controllers: [OrderController, UserController],
  providers: [PrismaService],
})
export class AppModule {}
