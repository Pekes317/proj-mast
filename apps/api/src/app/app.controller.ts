import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
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

  @Get('collections/:name')
  getCollection(@Res() res: Response, @Param('name') name: string) {
    this.appService
      .getCollections(name)
      .then(data => res.status(HttpStatus.OK).send(data))
      .catch(err => res.status(err.status || HttpStatus.BAD_REQUEST).send(err));
  }

  @Get('skills/:category')
  getSkills(@Res() res: Response, @Param('category') category: string) {
    this.appService
      .getSkillCollection(category)
      .then(data => res.status(HttpStatus.OK).send(data))
      .catch(err => res.status(err.status || HttpStatus.BAD_REQUEST).send(err));
  }
}
