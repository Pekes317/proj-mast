import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { PmHomeComponent } from './pm-home/pm-home.component';
import { PmLogoComponent } from './pm-logo/pm-logo.component';
import { PmSkylineComponent } from './pm-skyline/pm-skyline.component';
import { PmHeroComponent } from './pm-hero/pm-hero.component';
import { PmSocialComponent } from './pm-social/pm-social.component';
import { PmBioComponent } from './pm-bio/pm-bio.component';
import { PmBuildingComponent } from './pm-building/pm-building.component';

const appRoutes: Routes = [
  { path: '', component: PmHomeComponent, data: { title: 'Project Mast' } },
  { path: 'bio', component: PmBioComponent, data: { title: 'Bio | Project Mast' } },
  { path: 'experience', component: PmHomeComponent, data: { title: 'Experience | Project Mast' } },
  { path: 'projects', component: PmHomeComponent, data: { title: 'Projects | Project Mast' } }
];

@NgModule({
  declarations: [
    AppComponent,
    PmHomeComponent,
    PmLogoComponent,
    PmSkylineComponent,
    PmHeroComponent,
    PmSocialComponent,
    PmBioComponent,
    PmBuildingComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    InlineSVGModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
