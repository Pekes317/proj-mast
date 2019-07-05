import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { createWindow } from 'domino';
import { runWith } from 'firebase-functions';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const win = createWindow();
const express = new ExpressAdapter();

global['window'] = win;
global['document'] = win.document;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, express);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  if (environment.production) {
    app.init();
  } else {
    const port = process.env.port || 3333;
    await app.listen(port, () => {
      Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
  }
};

bootstrap();
export const server = runWith({}).https.onRequest(express.getInstance());
