/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
