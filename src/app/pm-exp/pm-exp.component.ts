import { Component, OnInit } from '@angular/core';

import { pmSlideUpDown } from '../shared/pm-animation';

@Component({
  selector: 'app-pm-exp',
  templateUrl: './pm-exp.component.html',
  styleUrls: ['./pm-exp.component.scss'],
  animations: [pmSlideUpDown]
})
export class PmExpComponent implements OnInit {
  slide: string = 'in';

  constructor() { }

  ngOnInit() {

  }

  toggleSection() {
    this.slide = this.slide === 'out' ? 'in' : 'out';
  }
}
