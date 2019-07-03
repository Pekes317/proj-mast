import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatListItem } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';

import { PmNav } from './shared/pm-interface';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChildren('btns') btns: QueryList<MatListItem>;

  darkTheme = false;
  navItems: Array<PmNav> = [
    { name: 'Home', path: '', icon: 'home', match: { exact: true } },
    { name: 'Bio', path: 'bio', icon: 'person', match: { exact: false } },
    {
      name: 'Experience',
      path: 'experience',
      icon: 'school',
      match: { exact: false }
    },
    {
      name: 'Projects',
      path: 'projects',
      icon: 'work',
      match: { exact: false }
    }
  ];

  constructor(private router: Router, private title: Title) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (evt instanceof ActivationEnd) {
        const activeRoute = evt.snapshot;
        if (activeRoute.firstChild !== null) {
          const childTitle = activeRoute.firstChild;
          this.title.setTitle(childTitle.data['title']);
        } else {
          this.title.setTitle(activeRoute.data['title']);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.btns['_results'].forEach((el: MatListItem) => {
      const inner: HTMLDivElement = el['_element'].nativeElement['firstChild'];
      inner.style.justifyContent = 'center';
    });
  }
}
