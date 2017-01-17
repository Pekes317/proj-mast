import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PmBioComponent } from './pm-bio/pm-bio.component';
import { PmContactComponent } from './pm-contact/pm-contact.component';
import { PmExpModule } from './pm-exp/pm-exp.module';
import { PmHeroComponent } from './pm-hero/pm-hero.component';
import { PmHomeComponent } from './pm-home/pm-home.component';
import { PmLogoComponent } from './pm-logo/pm-logo.component';
import { PmProjectModule } from './pm-project/pm-project.module';
import { PmSkylineComponent } from './pm-skyline/pm-skyline.component';
import { PmSocialComponent } from './pm-social/pm-social.component';

const appRoutes: Routes = [
  { path: '', component: PmHomeComponent, data: { title: 'Project Mast' } },
  { path: 'bio', component: PmBioComponent, data: { title: 'Bio | Project Mast' } },
  { path: 'projects', component: PmHomeComponent, data: { title: 'Projects | Project Mast' } }
];

@NgModule({
  declarations: [
    AppComponent,
    PmBioComponent,
    PmContactComponent,
    PmHeroComponent,
    PmHomeComponent,
    PmLogoComponent,
    PmSkylineComponent,  
    PmSocialComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    PmExpModule,
    PmProjectModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    PmContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
