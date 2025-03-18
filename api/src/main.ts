import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from './core/environments/environments';
import { BusinessExceptionFilter } from './core/exception/business-exception-filter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CustomLogger } from './core/logger/custom.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BusinessExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Clients')
    .setDescription('Api Teddy')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useLogger(app.get(CustomLogger));

  await app.listen(APP_PORT || 3000);
  console.log(`App is running on port ${APP_PORT}`);
}
bootstrap();
