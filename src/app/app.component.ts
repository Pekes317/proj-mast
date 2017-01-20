import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MdListItem } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { PmNav } from './shared/pm-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren('btns') btns: QueryList<MdListItem>;

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
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.active)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.title.setTitle(event['title']));
  }

  ngAfterViewInit() {
    this.btns['_results'].forEach(el => {
      let inner: HTMLDivElement = el['_element'].nativeElement['firstChild'];
      inner.style.justifyContent = 'center';
    });
  }
}
