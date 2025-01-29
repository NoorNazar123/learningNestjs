import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log("Gloabal middleware one");
  next()
}
function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log("Gloabal middleware Two");
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddlewareOne)
  app.use(globalMiddlewareTwo)
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server is runing on port: 3000`);
  });
}
bootstrap();
