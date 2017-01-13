import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pm-social',
  templateUrl: './pm-social.component.html',
  styleUrls: ['./pm-social.component.scss']
})
export class PmSocialComponent implements OnInit {;

  constructor(private sanitize: DomSanitizer, private mdReg: MdIconRegistry) {
    mdReg.addSvgIconSetInNamespace('social', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/icons-social.svg'));
  }

  ngOnInit() {
    
  }

}
