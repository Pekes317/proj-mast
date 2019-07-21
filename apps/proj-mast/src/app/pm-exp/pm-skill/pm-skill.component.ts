import { Component, OnInit } from '@angular/core';
import { SkillCollection } from '@proj-mast/api-interface';

@Component({
  selector: 'pm-skill',
  templateUrl: './pm-skill.component.html',
  styleUrls: ['./pm-skill.component.scss'],
})
export class PmSkillComponent implements OnInit {
  level = 0;
  skill: SkillCollection = {
    name: '',
    context: '',
  };

  constructor() {}

  ngOnInit() {}
}
