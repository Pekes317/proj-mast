import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { PmSkill } from '../../shared/pm-interface';

@Component({
  selector: 'app-pm-skill',
  templateUrl: './pm-skill.component.html',
  styleUrls: ['./pm-skill.component.scss']
})
export class PmSkillComponent implements OnInit {
  level: number = 0;
  skill: PmSkill = {
    name: '',
    level: null
  };

  constructor(private dialogRef:MdDialogRef<PmSkillComponent>) { }

  ngOnInit() {
    let load = setInterval(() => {
      this.level += 1;
      if (this.level === this.skill.level) {
        clearInterval(load);
      }
    }, 50);
  }

}
