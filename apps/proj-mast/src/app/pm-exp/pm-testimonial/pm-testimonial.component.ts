import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

import { pmFadeInOut } from '../../shared/pm-animation';
import { PmFeedback } from '../../shared/pm-interface';

@Component({
  selector: 'pm-testimonial',
  templateUrl: './pm-testimonial.component.html',
  styleUrls: ['./pm-testimonial.component.scss'],
  animations: [pmFadeInOut]
})
export class PmTestimonialComponent implements OnInit {
  message: PmFeedback;
  messages: Array<PmFeedback> = [];
  newMess: Array<any> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/data/pm-testimonial.data.json').subscribe(
      data => {
        this.newMess.push(data);
        this.messages = this.newMess[0];
      },
      err => console.log(err),
      () => {
        this.message = this.messages.find(mess => {
          return mess.id === 6;
        });
        setTimeout(() => {
          this.getFeed();
        }, 5000);
      }
    );
  }

  getFeed() {
    from(this.messages)
      .pipe(concatMap(mess => of(mess).pipe(delay(5000))))
      .subscribe(
        data => {
          this.message = data;
        },
        err => console.log(err),
        () => this.getFeed()
      );
  }
}
