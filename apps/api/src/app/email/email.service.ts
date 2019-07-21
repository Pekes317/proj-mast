import { Injectable, Logger } from '@nestjs/common';
import { createTransport, SendMailOptions } from 'nodemailer';

import { EmailDto } from './email-dto';
import { getGmailCreds } from '../../util/email.helper';

@Injectable()
export class EmailService {
  private creds = getGmailCreds();

  public async createEmail(email: EmailDto) {
    try {
      const mail = this.getMailOptions(email);
      const sent = await this.sendEmail(mail);

      return sent;
    } catch (error) {
      console.error(error);
      Logger.error(error.message);

      throw error;
    }
  }

  private getMailOptions(EmailData: EmailDto) {
    const message = `Name: ${EmailData.sender}\nEmail: ${EmailData.email}\nMessage: ${EmailData.message}`;
    const mail: SendMailOptions = {
      from: { name: EmailData.sender, address: EmailData.email },
      to: { name: 'Peter Mast', address: 'prmast@projectmast.com' },
      subject: `Message From ${EmailData.sender}`,
      text: message,
      html: message.replace('\n', '<br />'),
    };

    return mail;
  }

  private getTranport() {
    const gmailEmail = this.creds.login;
    const gmailPassword = this.creds.pass;
    const stmp = createTransport({
      service: 'gmail',
      auth: {
        user: gmailEmail,
        pass: gmailPassword,
      },
    });

    return stmp;
  }

  private sendEmail(mailMessage: SendMailOptions) {
    const transport = this.getTranport();

    return new Promise((resolve, reject) => {
      transport.sendMail(mailMessage, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info);
      });
    });
  }
}
