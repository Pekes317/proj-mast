import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { pmSlideNav } from '../../shared/pm-animation';
import { PmGraphicSlide } from '../../shared/pm-interface';

@Component({
  selector: 'pm-graphics',
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
  newSlide: Array<any> = [];
  graphicSlides: Array<PmGraphicSlide> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/data/pm-graphic.json').subscribe(
      data => {
        this.newSlide.push(data);
      },
      err => console.log(err),
      () => {
        this.graphicSlides = this.newSlide[0];
      }
    );
  }
}
