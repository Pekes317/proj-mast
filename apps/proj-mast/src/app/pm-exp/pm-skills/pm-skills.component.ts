import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Skills, SkillCollection, SkillsCollection } from '@proj-mast/api-interface';

import { FirestoreService } from '../../shared/firestore.service';
import { pmFadeInOut } from '../../shared/pm-animation';
import { PmSkillComponent } from '../pm-skill/pm-skill.component';

@Component({
  animations: [pmFadeInOut],
  selector: 'pm-skills',
  templateUrl: './pm-skills.component.html',
  styleUrls: ['./pm-skills.component.scss'],
})
export class PmSkillsComponent implements OnInit {
  apps: SkillCollection[] = [];
  coding: SkillCollection[] = [];
  frameworks: SkillCollection[] = [];

  constructor(private dialog: MatDialog, private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.skillSubject.subscribe(skilSet => this.getList(skilSet));
    this.firestore.getAllSkills();
  }

  public skillDets(skill: SkillCollection) {
    const dets = this.dialog.open(PmSkillComponent, {
      role: 'dialog',
    });
    dets.componentInstance.skill = skill;
  }

  private getList(set: SkillsCollection) {
    set.list.subscribe(list => {
      this.setCategory(set.category as Skills, list);
    });
  }

  private setCategory(category: Skills, list: SkillCollection) {
    switch (category) {
      case Skills.frameworks:
        this.frameworks = Array.isArray(list) ? list : [list];
        break;

      case Skills.language:
        this.coding = Array.isArray(list) ? list : [list];
        break;

      case Skills.software:
        this.apps = Array.isArray(list) ? list : [list];
        break;
    }
  }
}
