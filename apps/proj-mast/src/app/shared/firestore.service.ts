import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Collections,
  Documents,
  PmCollection,
  PmDocument,
  Skills,
  SkillsCollection,
  SkillCollection,
} from '@proj-mast/api-interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private collectEnd = '/api/collections';
  private docuEnd = '/api/documents';
  private skillEnd = '/api/skills';
  public skillSubject: Subject<SkillsCollection> = new Subject();

  constructor(private http: HttpClient) {}

  public getAllSkills() {
    const skillCats: string[] = Object.values(Skills);
    skillCats.forEach(skillCat => {
      this.skillSubject.next({
        category: skillCat,
        list: this.getSkills(skillCat),
      });
    });
  }

  public getCollection(collection: Collections) {
    return this.http.get(`${this.collectEnd}/${collection}`) as Observable<PmCollection>;
  }

  public getDocument(doc: Documents) {
    return this.http.get(`${this.docuEnd}/${doc}`) as Observable<PmDocument>;
  }

  private getSkills(skill: string) {
    return this.http.get(`${this.skillEnd}/${skill}`) as Observable<SkillCollection>;
  }
}
