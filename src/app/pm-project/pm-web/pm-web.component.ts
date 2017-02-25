import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-web',
  templateUrl: './pm-web.component.html',
  styleUrls: ['./pm-web.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmWebComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
