import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'pm-bio',
  templateUrl: './pm-bio.component.html',
  styleUrls: ['./pm-bio.component.scss']
})
export class PmBioComponent implements OnInit {
  bld: SafeResourceUrl;

  constructor(private santize: DomSanitizer) {}

  ngOnInit() {
    this.bld = this.santize.bypassSecurityTrustResourceUrl('../../assets/svg/bio-building.svg');
  }
}
