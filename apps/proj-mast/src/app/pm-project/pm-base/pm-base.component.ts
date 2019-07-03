import { Component, OnInit } from '@angular/core';

import { pmFadeInOut, pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'pm-base',
  templateUrl: './pm-base.component.html',
  styleUrls: ['./pm-base.component.scss'],
  animations: [pmSlideNav, pmFadeInOut],
  host: { '[@slideNav]': '' }
})
export class PmBaseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
