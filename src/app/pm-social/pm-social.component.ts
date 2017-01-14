import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { PmSocial } from '../pm-interface';

@Component({
  selector: 'app-pm-social',
  templateUrl: './pm-social.component.html',
  styleUrls: ['./pm-social.component.scss']
})
export class PmSocialComponent implements OnInit {
  socialBtns: Array<PmSocial> = [
    { svgIcon: 'linkedin', tip: 'LinkedIn' },
    { svgIcon: 'github', tip: 'Github' },
    { svgIcon: 'ionic', tip: 'Ionic Forums' },
    { svgIcon: 'xda', tip: 'XDA Profile' }
  ];

  constructor(private sanitize: DomSanitizer, private mdReg: MdIconRegistry) {
    mdReg.addSvgIconSetInNamespace('social', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/icons-social.svg'));
  }

  ngOnInit() {
    
  }

}
