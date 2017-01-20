import { Component, OnInit } from '@angular/core';

import { PmDarkService } from '../shared/pm-dark.service';

@Component({
  selector: 'app-pm-bio',
  templateUrl: './pm-bio.component.html',
  styleUrls: ['./pm-bio.component.scss']
})
export class PmBioComponent implements OnInit {

  constructor(private pmDark: PmDarkService) { }

  ngOnInit() {
  }

}
