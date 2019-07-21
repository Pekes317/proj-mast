import { Component, OnInit } from '@angular/core';
import { Collections, WebCollection } from '@proj-mast/api-interface';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { FirestoreService } from '../../shared/firestore.service';

@Component({
  selector: 'pm-web',
  templateUrl: './pm-web.component.html',
  styleUrls: ['./pm-web.component.scss'],
})
export class PmWebComponent implements OnInit {
  configSlides: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboard: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  webSlides: Array<WebCollection> = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.getCollection(Collections.web).subscribe(web => {
      this.webSlides = Array.isArray(web) ? web : [web as WebCollection];
    });
  }
}
