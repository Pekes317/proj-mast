import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import { Collections, Message } from '@proj-mast/api-interface';
import { firestore } from 'firebase-admin';

@Injectable()
export class AppService {
  private db = firestore();

  public getData(): Message {
    return { message: 'Welcome to api!' };
  }

  public async getCollections(name: string) {
    const isValid = Object.values(Collections).includes(name);
    if (isValid) {
      const docs = await this.getDocuments(name);

      return docs;
    } else {
      const message = `Collect ${name} doesn't exist!`;
      Logger.error(message);

      throw {
        error: message,
        status: HttpStatus.NOT_FOUND,
      };
    }
  }

  public async getSkillCollection(skillType: string) {
    try {
      const collection = await this.db
        .collection(Collections.skills)
        .where('category', '==', skillType)
        .get();
      const list = await this.db
        .doc(`${Collections.skills}/${collection.docs[0].id}`)
        .collection('list')
        .get();

      return list.docs.map(doc => doc.data());
    } catch (error) {
      Logger.error(error.message);

      throw { error: error.message };
    }
  }

  private async getDocuments(name: string) {
    try {
      const collection = await this.db.collection(name).get();

      return collection.docs.map(doc => doc.data());
    } catch (error) {
      Logger.error(error.message);

      throw { error: error.message };
    }
  }
}
