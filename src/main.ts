import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  //const serverConfig = config.get<number>('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  console.log(process.env.PORT);
  const port = process.env.PORT;

 // const port = 3001;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
