import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constants';
import { AllExepctionFilter } from './common/filters/http-execption.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: process.env.AMQP_URL,
      queue: RabbitMQ.PassengerQueue,
    },
  });
  app.useGlobalFilters(new AllExepctionFilter());
  await app.listen();
  console.log('Microservices passenger is listen');
}
bootstrap();
