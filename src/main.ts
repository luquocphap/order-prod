import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RABBIMQ_URL } from './common/constant/app.constant';
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [RABBIMQ_URL!],
      queue: 'order_queue',
      queueOptions: {
        durable: false,
      },
      socketOptions: {
        connectionOptions: {
            clientProperties: {
                connection_name: "order-on"
            }
        }
    }
    },
  });
  await app.listen();
}
bootstrap();
