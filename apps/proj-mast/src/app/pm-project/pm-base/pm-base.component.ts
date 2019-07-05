import { Component, OnInit } from '@angular/core';

import { pmFadeInOut } from '../../shared/pm-animation';

@Component({
  selector: 'pm-base',
  templateUrl: './pm-base.component.html',
  styleUrls: ['./pm-base.component.scss'],
  animations: [pmFadeInOut]
})
export class PmBaseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
