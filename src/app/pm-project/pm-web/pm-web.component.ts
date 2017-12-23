import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { pmSlideNav } from '../../shared/pm-animation';
import { PmWebSlide } from '../../shared/pm-interface';

@Component({
  selector: 'app-pm-web',
  templateUrl: './pm-web.component.html',
  styleUrls: ['./pm-web.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmWebComponent implements OnInit {
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
  webSlides: Array<PmWebSlide> = require('./pm-web.json');

  constructor() { }

  ngOnInit() { }
}
