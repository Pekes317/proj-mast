import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';

import { pmSlideNav } from '../../shared/pm-animation';
import { PmGraphicSlide } from '../../shared/pm-interface';

@Component({
  selector: 'app-pm-graphics',
  templateUrl: './pm-graphics.component.html',
  styleUrls: ['./pm-graphics.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmGraphicsComponent implements OnInit {
  configSlides: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboardControl: true,
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton: '.swiper-button-prev'
   };
  graphicSlides: Array<PmGraphicSlide> = require('./pm-graphic.json');

  constructor() { }

  ngOnInit() { }

}
