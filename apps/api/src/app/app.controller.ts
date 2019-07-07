import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Message } from '@proj-mast/api-interface';
import { Response } from 'express';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('web')
  getweb(@Res() res: Response) {
    this.appService
      .getWebData()
      .then(data => res.status(HttpStatus.OK).send(data))
      .catch(err => res.status(err.status || HttpStatus.BAD_REQUEST).send(err));
  }
}
