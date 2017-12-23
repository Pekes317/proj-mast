import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
    keyboard: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
   };
  graphicSlides: Array<PmGraphicSlide> = require('./pm-graphic.json');

  constructor() { }

  ngOnInit() { }

}
