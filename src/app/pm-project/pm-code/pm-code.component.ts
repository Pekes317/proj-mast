import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-code',
  templateUrl: './pm-code.component.html',
  styleUrls: ['./pm-code.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
