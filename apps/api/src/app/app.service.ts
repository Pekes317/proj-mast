import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import { Collections, Documents, Message, Skills } from '@proj-mast/api-interface';
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
      const message = `Collection ${name} doesn't exist!`;
      Logger.error(message);

      throw {
        error: message,
        status: HttpStatus.NOT_FOUND,
      };
    }
  }

  public async getOtherDocument(name: string) {
    const isExists = Object.values(Documents).includes(name);
    if (isExists) {
      const doc = await this.getDocument(name);

      return doc;
    } else {
      const message = `Document ${name} doesn't exist!`;
      Logger.error(message);

      throw {
        error: message,
        status: HttpStatus.NOT_FOUND,
      };
    }
  }

  public async getSkillCollection(skillType: string) {
    const isValidType = Object.values(Skills).includes(skillType);
    if (isValidType) {
      const docs = await this.getSkillDocuments(skillType);

      return docs;
    } else {
      const message = `Skill Set ${skillType} doesn't exits`;
      Logger.error(message);

      throw {
        error: message,
        status: HttpStatus.NOT_FOUND,
      };
    }
  }

  private async getDocument(id: string) {
    try {
      const document = await this.db
        .collection('other')
        .doc(id)
        .get();

      return document.data();
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

  private async getSkillDocuments(skillType: string) {
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
}
