import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pm-logo',
  templateUrl: './pm-logo.component.html',
  styleUrls: ['./pm-logo.component.scss']
})
export class PmLogoComponent implements OnInit {
  title: Object = {
    first: 'Project',
    last: 'Mast'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHome() {
    console.log('click');
    this.router.navigate(['']);
  }
}
