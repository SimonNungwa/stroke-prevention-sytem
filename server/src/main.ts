import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';
import rateLimit from 'express-rate-limit';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS setup for mobile app (allowing all origins)
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Security headers with Helmet
  app.use(helmet());

  // Disable x-powered-by header
  app.getHttpAdapter().getInstance().disable('x-powered-by');

  // Compression for responses
  app.use(compression());

  // Logging
  app.use(morgan('dev'));

  // Rate limiting to prevent abuse
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: 'Too many requests from this IP, please try again later',
    }),
  );

  // Validation pipe for all incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties not defined in DTO
      forbidNonWhitelisted: true, // Throw errors for non-whitelisted properties
      transform: true, // Transform payloads to DTO instances
    }),
  );

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Stroke Management System API')
    .setDescription('Stroke Management System backend API documentation')
    .setVersion('1.0')
    .addBearerAuth() // If you're using JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
