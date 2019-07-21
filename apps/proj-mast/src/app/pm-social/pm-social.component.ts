import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { PmSocial } from '../shared/pm-interface';
import { PmContactComponent } from '../pm-contact/pm-contact.component';

@Component({
  selector: 'pm-social',
  templateUrl: './pm-social.component.html',
  styleUrls: ['./pm-social.component.scss'],
})
export class PmSocialComponent implements OnInit {
  socialBtns: Array<PmSocial> = [
    {
      svgIcon: 'linkedin',
      tip: 'LinkedIn',
      link: 'https://www.linkedin.com/in/prmast',
    },
    { svgIcon: 'github', tip: 'Github', link: 'https://github.com/Pekes317' },
    {
      svgIcon: 'ionic',
      tip: 'Ionic Forums',
      link: 'https://forum.ionicframework.com/users/El_Dee565/summary',
    },
    {
      svgIcon: 'xda',
      tip: 'XDA Profile',
      link: 'https://forum.xda-developers.com/member.php?u=4905136',
    },
  ];

  constructor(
    private dialog: MatDialog,
    private mdReg: MatIconRegistry,
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitize: DomSanitizer,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.mdReg.addSvgIconSetInNamespace(
        'social',
        this.sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/icons-social.svg'),
      );
    }
  }

  contactMe() {
    this.dialog.open(PmContactComponent, {
      role: 'dialog',
    });
  }
}
