import { Module } from '@nestjs/common';

import { AppController } from './app/app.controller';


@Module({
	controllers: [ AppController ]
})
export class ApplicationModule { }