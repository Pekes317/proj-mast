import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { pmSlideNav } from '../../shared/pm-animation';
import { PmFeedback } from '../../shared/pm-interface';

@Component({
  selector: 'app-pm-testimonial',
  templateUrl: './pm-testimonial.component.html',
  styleUrls: ['./pm-testimonial.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmTestimonialComponent implements OnInit {
  message: PmFeedback;
  messages: Array<PmFeedback> = require('./pm-testimonial.data.json');

  constructor() { }

  ngOnInit() {
    this.message = this.messages.find(mess => {
      return mess.id === 6;
    })
    setTimeout(() => {
      this.getFeed();
    }, 5000);
  }

  getFeed() {
    Observable.from(this.messages).zip(
      Observable.interval(5000),
      (data) => { return data }
    ).subscribe(
      data => {
        this.message = data;
      },
      err => console.log(err),
      () => this.getFeed())
  }
}
