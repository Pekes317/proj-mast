import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { EmailDto } from './email-dto';
import { EmailService } from './email.service';

@Controller('emails')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  postEmail(@Body() message: EmailDto, @Res() res: Response) {
    this.emailService
      .createEmail(message)
      .then(sent => res.status(HttpStatus.CREATED).send(sent))
      .catch(err => res.status(err.status || HttpStatus.BAD_REQUEST).send(err));
  }
}
