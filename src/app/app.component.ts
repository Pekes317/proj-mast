import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatListItem } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router, ActivationEnd,  ChildActivationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { PmNav } from './shared/pm-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren('btns') btns: QueryList<MatListItem>;

  darkTheme: boolean = false;
  navItems: Array<PmNav> = [
    { name: 'Home', path: '', icon: 'home', match: { exact: true } },
    { name: 'Bio', path: 'bio', icon: 'person', match: { exact: false } },
    { name: 'Experience', path: 'experience', icon: 'school', match: { exact: false } },
    { name: 'Projects', path: 'projects', icon: 'work', match: { exact: false } }
  ];

  constructor(private active: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
      this.router.events
      .subscribe(evt => {
        if(evt instanceof ActivationEnd) {
          let activeRoute = evt.snapshot;
          if(activeRoute.firstChild !== null) {
            let childTitle = activeRoute.firstChild
            this.title.setTitle(childTitle.data['title']);
          } else {
            this.title.setTitle(activeRoute.data['title']);
          }
        }
      })
  }

  ngAfterViewInit() {
    this.btns['_results'].forEach(el => {
      let inner: HTMLDivElement = el['_element'].nativeElement['firstChild'];
      inner.style.justifyContent = 'center';
    });
  }
}
