import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { pmSlideNav } from '../shared/pm-animation';

@Component({
  animations: [pmSlideNav],
  selector: 'pm-project',
  templateUrl: './pm-project.component.html',
  styleUrls: ['./pm-project.component.scss']
})
export class PmProjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  routerTransition(outlet: RouterOutlet) {
    return outlet.activatedRoute;
  }
}
