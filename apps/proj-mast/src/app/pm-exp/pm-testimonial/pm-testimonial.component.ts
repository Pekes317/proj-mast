import { Component, OnInit } from '@angular/core';
import { Collections, FeedbackCollection } from '@proj-mast/api-interface';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

import { FirestoreService } from '../../shared/firestore.service';
import { pmFadeInOut } from '../../shared/pm-animation';

@Component({
  selector: 'pm-testimonial',
  templateUrl: './pm-testimonial.component.html',
  styleUrls: ['./pm-testimonial.component.scss'],
  animations: [pmFadeInOut],
})
export class PmTestimonialComponent implements OnInit {
  message: FeedbackCollection;
  messages: Array<FeedbackCollection> = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.getCollection(Collections.testimonials).subscribe(
      data => {
        this.messages = Array.isArray(data) ? (data as FeedbackCollection[]) : [data as FeedbackCollection];
        this.message = this.messages[this.messages.length - 1];
      },
      err => console.error(err),
      () => {
        setTimeout(() => {
          this.getFeed();
        }, 5000);
      },
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
        () => this.getFeed(),
      );
  }
}
