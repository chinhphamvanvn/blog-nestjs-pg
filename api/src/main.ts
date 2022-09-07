import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './environment/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = new AppConfig();

  app.setGlobalPrefix('api');
  
  app.enableCors({
    origin: appConfig.frontend,
    allowedHeaders: "*, Content-Type",
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
