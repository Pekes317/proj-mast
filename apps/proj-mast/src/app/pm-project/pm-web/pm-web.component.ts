import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { PmWebSlide } from '../../shared/pm-interface';

@Component({
  selector: 'pm-web',
  templateUrl: './pm-web.component.html',
  styleUrls: ['./pm-web.component.scss']
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
  newSlide: Array<any> = [];
  webSlides: Array<PmWebSlide> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/data/pm-web.json').subscribe(
      data => {
        this.newSlide.push(data);
      },
      err => console.log(err),
      () => {
        this.webSlides = this.newSlide[0];
      }
    );
  }
}
