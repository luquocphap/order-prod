import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { RabbitMqModule } from 'src/modules-system/rabbitmq/rabbitmq.module';

@Module({
  imports: [RabbitMqModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
