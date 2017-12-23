import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { pmFadeInOut, pmSlideNav } from '../../shared/pm-animation';
import { PmFeedback } from '../../shared/pm-interface';

@Component({
  selector: 'app-pm-testimonial',
  templateUrl: './pm-testimonial.component.html',
  styleUrls: ['./pm-testimonial.component.scss'],
  animations: [pmFadeInOut, pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmTestimonialComponent implements OnInit {
  message: PmFeedback;
  messages: Array<PmFeedback> = [];
  newMess: Array<any> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/data/pm-testimonial.data.json')
      .subscribe(
      data => {
        this.newMess.push(data);
        this.messages = this.newMess[0];
      },
      err => console.log(err),
      () => {
        this.message = this.messages.find(mess => {
          return mess.id === 6;
        })
        setTimeout(() => {
          this.getFeed();
        }, 5000);
      });
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
