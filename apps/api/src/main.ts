import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as admin from 'firebase-admin';
import { runWith } from 'firebase-functions';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const express = new ExpressAdapter();
const firebase = JSON.parse(process.env.FIREBASE_CONFIG);
firebase.credential = admin.credential.cert(require('./assets/projectmast.json'));

const bootstrap = async () => {
  admin.initializeApp(firebase);
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
