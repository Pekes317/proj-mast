import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { pmSlideNav } from '../shared/pm-animation';

@Component({
  animations: [pmSlideNav],
  selector: 'pm-exp',
  templateUrl: './pm-exp.component.html',
  styleUrls: ['./pm-exp.component.scss']
})
export class PmExpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  routerTransition(outlet: RouterOutlet) {
    return outlet.activatedRoute;
  }
}
