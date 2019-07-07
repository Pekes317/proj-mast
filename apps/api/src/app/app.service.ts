import { Injectable, Logger } from '@nestjs/common';
import { Message } from '@proj-mast/api-interface';
import { firestore } from 'firebase-admin';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  async getWebData() {
    try {
      const web = await firestore()
        .collection('web')
        .get();

      return web.docs;
    } catch (error) {
      Logger.error(error);

      throw error;
    }
  }
}
