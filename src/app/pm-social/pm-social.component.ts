import { Component, OnInit } from '@angular/core';
import { MdDialog, MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { PmSocial } from '../pm-interface';
import { PmContactComponent } from '../pm-contact/pm-contact.component';

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

  constructor(private dialog: MdDialog, private mdReg: MdIconRegistry, private sanitize: DomSanitizer) {
    mdReg.addSvgIconSetInNamespace('social', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/icons-social.svg'));
  }

  ngOnInit() {
    
  }

  contactMe() {
    let contactForm = this.dialog.open(PmContactComponent);
  }
}
