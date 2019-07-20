import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collections, PmCollection, Skills, SkillsCollection, SkillCollection } from '@proj-mast/api-interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private collectEnd = '/api/collections';
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

  public getCollection(collection: Collections): Observable<PmCollection> {
    return this.http.get(`${this.collectEnd}/${collection}`) as Observable<PmCollection>;
  }

  private getSkills(skill: string): Observable<SkillCollection> {
    return this.http.get(`${this.skillEnd}/${skill}`) as Observable<SkillCollection>;
  }
}
