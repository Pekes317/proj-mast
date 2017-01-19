import { Component, trigger, state, style, transition, animate, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm-exp',
  templateUrl: './pm-exp.component.html',
  styleUrls: ['./pm-exp.component.scss'],
  animations: [
    trigger('slideUp', [
      state('in', style({ top: 0 })),
      state('out', style({ top: '-100vh' })),
      transition('in => out', animate('1s ease')),
      transition('out => in', animate('1s ease'))
    ]),
    trigger('slideDown', [
      state('out', style({ top: 0 })),
      state('in', style({ top: '100vh', display: 'none' })),
      transition('in => out', animate('1s ease')),
      transition('out => in', animate('1s ease'))
    ])
  ]
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
