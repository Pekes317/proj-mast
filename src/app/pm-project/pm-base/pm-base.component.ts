import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-base',
  templateUrl: './pm-base.component.html',
  styleUrls: ['./pm-base.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
