import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { PmSkill } from '../../shared/pm-interface';

@Component({
  selector: 'pm-skill',
  templateUrl: './pm-skill.component.html',
  styleUrls: ['./pm-skill.component.scss']
})
export class PmSkillComponent implements OnInit {
  level = 0;
  skill: PmSkill = {
    name: '',
    context: ''
  };

  constructor(private dialogRef: MatDialogRef<PmSkillComponent>) {}

  ngOnInit() {}
}
