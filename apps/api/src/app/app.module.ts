import { Module } from '@nestjs/common';
import { loadPackage } from '@nestjs/common/utils/load-package.util';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

applyDomino({}, join(__dirname, 'views', 'index.html'));

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bundle: loadPackage(join(__dirname, 'server', 'main.js'), 'SSR'),
      viewsPath: join(__dirname, 'views')
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
