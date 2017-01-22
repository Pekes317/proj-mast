import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-skills',
  templateUrl: './pm-skills.component.html',
  styleUrls: ['./pm-skills.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
