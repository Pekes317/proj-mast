import { Component, OnInit } from '@angular/core';

import { pmFadeInOut, pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'pm-jobs',
  templateUrl: './pm-jobs.component.html',
  styleUrls: ['./pm-jobs.component.scss'],
  animations: [pmFadeInOut, pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmJobsComponent implements OnInit {
  achieves: Array<string> = [
    'Elected to lead daily team meeting',
    'Became lead email template creator with mobile in mind',
    'Played a key part in several site migrations',
    'Became a valuable resource for Business Partners',
    'Developed into a subject matter expert within 18 months'
  ];
  fadeIn: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.fadeIn = true;
    }, 500);
  }

  getResume() {}
}