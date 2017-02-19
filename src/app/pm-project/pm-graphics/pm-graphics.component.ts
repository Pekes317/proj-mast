import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { pmSlideNav } from '../../shared/pm-animation';
import { PmGraphic } from '../../shared/pm-interface';

@Component({
  selector: 'app-pm-graphics',
  templateUrl: './pm-graphics.component.html',
  styleUrls: ['./pm-graphics.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmGraphicsComponent implements OnInit {
  configSlides: SwiperOptions = {
    direction: 'horizontal',
    keyboardControl: true,
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton: '.swiper-button-prev'
  };
  graphicSlides: Array<PmGraphic> = require('./pm-graphic.json');

  constructor() { }

  ngOnInit() { }

}
