import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';

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
    keyboardControl: true,
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton: '.swiper-button-prev'
  };
  webSlides: Array<PmWebSlide> = require('./pm-web.json');

  constructor() { }

  ngOnInit() { }
}
