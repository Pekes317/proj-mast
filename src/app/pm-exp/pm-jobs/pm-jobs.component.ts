import { Component, OnInit } from '@angular/core';

import { pmFadeInOut, pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-jobs',
  templateUrl: './pm-jobs.component.html',
  styleUrls: ['./pm-jobs.component.scss'],
  animations: [ pmFadeInOut, pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmJobsComponent implements OnInit {
  achieves: Array<string> = [
    'Elected to lead team daily meeting',
    'Became lead email template creator with mobile in mind',
    'Played a key part in several site migrations',
    'Became a valuable resource for Business Partners'
  ];
  fadeIn: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.fadeIn = true;
    }, 500);
  }

}
