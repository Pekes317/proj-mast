import { Component, OnInit } from '@angular/core';

import { pmSlideNav } from '../../shared/pm-animation';

@Component({
  selector: 'app-pm-testimonial',
  templateUrl: './pm-testimonial.component.html',
  styleUrls: ['./pm-testimonial.component.scss'],
  animations: [pmSlideNav],
  host: { '[@slideNav]': '' }
})
export class PmTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
