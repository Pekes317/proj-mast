import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PmSkill, PmSkills } from '../../shared/pm-interface';
import { PmSkillComponent } from '../pm-skill/pm-skill.component';

@Component({
  selector: 'pm-skills',
  templateUrl: './pm-skills.component.html',
  styleUrls: ['./pm-skills.component.scss']
})
export class PmSkillsComponent implements OnInit {
  apps: Array<PmSkill>;
  coding: Array<PmSkill>;
  frameworks: Array<PmSkill>;
  skills: Array<PmSkills> = [];
  tempArray: Array<any> = [];

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/data/pm-skills.json').subscribe(
      data => {
        this.tempArray.push(data);
        this.skills = this.tempArray[0];
      },
      err => console.log(err),
      () => {
        this.getList('languages');
        this.getList('frameworks');
        this.getList('software');
      }
    );
  }

  getList(category: string) {
    from(this.skills)
      .pipe(filter(res => res.category === category))
      .subscribe(skills => {
        if (category === 'languages') {
          this.coding = skills.list;
        } else if (category === 'frameworks') {
          this.frameworks = skills.list;
        } else if (category === 'software') {
          this.apps = skills.list;
        }
      });
  }

  skillDets(skill: PmSkill) {
    const dets = this.dialog.open(PmSkillComponent, {
      role: 'dialog'
    });
    dets.componentInstance.skill = skill;
  }
}
