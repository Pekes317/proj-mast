import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-graphics',
  templateUrl: './pm-graphics.component.html',
  styleUrls: ['./pm-graphics.component.scss'],
  animations: [pmSlideNav],
  host: {'[@slideNav]': '' }
})
export class PmGraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
