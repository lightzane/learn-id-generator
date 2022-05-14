import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('MyNestApplication', { timestamp: true });
  const port = 3000;

  const config = new DocumentBuilder()
    .setTitle('Id Generator')
    .setDescription('Description for this API')
    .setVersion('1.0')
    .addTag('generators')
    .addTag('utilities')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customSiteTitle: 'Id Generator API' });

  await app.listen(port)
    .then(() => logger.debug(`Listening to: http://localhost:${3000}`));
}
bootstrap();
