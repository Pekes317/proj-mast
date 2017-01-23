import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-jobs',
  templateUrl: './pm-jobs.component.html',
  styleUrls: ['./pm-jobs.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmJobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
