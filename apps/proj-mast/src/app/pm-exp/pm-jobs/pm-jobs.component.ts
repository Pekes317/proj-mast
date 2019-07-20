import { Component, OnInit } from '@angular/core';
import { Documents } from '@proj-mast/api-interface';
import { take } from 'rxjs/operators';

import { FirestoreService } from '../../shared/firestore.service';
import { pmFadeInOut } from '../../shared/pm-animation';

@Component({
  selector: 'pm-jobs',
  templateUrl: './pm-jobs.component.html',
  styleUrls: ['./pm-jobs.component.scss'],
  animations: [pmFadeInOut],
})
export class PmJobsComponent implements OnInit {
  achieves: string[] = [];
  fadeIn = false;

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore
      .getDocument(Documents.achievements)
      .pipe(take(1))
      .subscribe(doc => (this.achieves = doc.list));
    setTimeout(() => {
      this.fadeIn = true;
    }, 500);
  }

  getResume() {}
}
