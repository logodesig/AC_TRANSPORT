import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // const config = new DocumentBuilder()
  //   .setTitle('Gestion Projet')
  //   .setDescription('Gestion Projet API description')
  //   .setVersion('1.0')
  //   .addTag('Gestion Projet')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule.setup('api/doc', app, document);
  await app.listen(3000);
}
bootstrap();
