import { Component, OnInit } from '@angular/core';
import { Collections, GraphicCollection } from '@proj-mast/api-interface';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { FirestoreService } from '../../shared/firestore.service';
import { pmFadeInOut } from '../../shared/pm-animation';

@Component({
  animations: [pmFadeInOut],
  selector: 'pm-graphics',
  templateUrl: './pm-graphics.component.html',
  styleUrls: ['./pm-graphics.component.scss'],
})
export class PmGraphicsComponent implements OnInit {
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
  graphicSlides: Array<GraphicCollection> = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.getCollection(Collections.graphics).subscribe(graphic => {
      this.graphicSlides = Array.isArray(graphic) ? graphic : [graphic as GraphicCollection];
    });
  }
}
