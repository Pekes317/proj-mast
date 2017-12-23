import { Component, OnInit } from '@angular/core';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { PmSocial } from '../shared/pm-interface';
import { PmContactComponent } from '../pm-contact/pm-contact.component';

@Component({
  selector: 'app-pm-social', 
  templateUrl: './pm-social.component.html',
  styleUrls: ['./pm-social.component.scss']
})
export class PmSocialComponent implements OnInit {
  socialBtns: Array<PmSocial> = [
    { svgIcon: 'linkedin', tip: 'LinkedIn', link: 'https://www.linkedin.com/in/prmast' },
    { svgIcon: 'github', tip: 'Github', link: 'https://github.com/Pekes317' },
    { svgIcon: 'ionic', tip: 'Ionic Forums', link: 'https://forum.ionicframework.com/users/El_Dee565/summary' },
    { svgIcon: 'xda', tip: 'XDA Profile', link: 'https://forum.xda-developers.com/member.php?u=4905136' }
  ];

  constructor(private dialog: MatDialog, private mdReg: MatIconRegistry, private sanitize: DomSanitizer) {
    mdReg.addSvgIconSetInNamespace('social', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/icons-social.svg'));
  }

  ngOnInit() {
    
  }

  contactMe() {
    let contactForm = this.dialog.open(PmContactComponent, {
      role: 'dialog'
    });
  }
}
