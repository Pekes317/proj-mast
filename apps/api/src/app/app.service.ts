import { Injectable, Logger } from '@nestjs/common';
import { Message } from '@proj-mast/api-interface';
import { firestore } from 'firebase-admin';

// import { firestore } from '../util/firebase';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  async getWebData() {
    try {
      const docs = await firestore()
        .collection('web')
        .get();
      Logger.log(docs);

      return [];
    } catch (error) {
      Logger.error(error.message);

      throw error;
    }
  }
}
