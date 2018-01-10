import 'zone.js/dist/zone-node';

import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';

import { ApplicationModule } from './modules/app.module';
const dist = `${process.cwd()}/dist`;
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`${dist}/public/main.bundle`);

const configuredNgExpressEngine = ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
      provideModuleMap(LAZY_MODULE_MAP)
  ]
});

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule);
app.then(instance => {  
  instance.engine('html', configuredNgExpressEngine);
  instance.set('view engine', 'html');
  instance.set('views', `${dist}/views`);  
  instance.use(express.static(`${dist}/views`));
  instance.listen(3000, () => console.log('Application is listening on port 3000'))
});