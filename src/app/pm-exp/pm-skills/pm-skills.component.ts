import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { pmSlideNav } from '../../shared/pm-animation';
import { PmSkill, PmSkills } from '../../shared/pm-interface';
import { PmSkillComponent } from '../pm-skill/pm-skill.component';

@Component({
  selector: 'app-pm-skills',
  templateUrl: './pm-skills.component.html',
  styleUrls: ['./pm-skills.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmSkillsComponent implements OnInit {
  coding: Array<PmSkill>;
  frameworks: Array<PmSkill>;
  skills: Array<PmSkills> = require('./pm-skills.json');
  apps: Array<PmSkill>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.getList('languages');
    this.getList('frameworks');
    this.getList('software');
  }

  getList(category: string) {
    Observable.from(this.skills).filter(res => res.category === category).subscribe(
      skills => {
        if (category === 'languages') {
          this.coding = skills.list;
        } else if (category === 'frameworks') {
          this.frameworks = skills.list;
        } else if (category === 'software') {
          this.apps = skills.list;
        }
      })
  }

  skillDets(skill: PmSkill) {
    let dets = this.dialog.open(PmSkillComponent, {
      role: 'dialog'
    });
    dets.componentInstance.skill = skill;
  }
}
