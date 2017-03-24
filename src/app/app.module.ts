import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PmBioComponent } from './pm-bio/pm-bio.component';
import { PmContactComponent } from './pm-contact/pm-contact.component';
import { PmExpModule } from './pm-exp/pm-exp.module';
import { PmHeroComponent } from './pm-hero/pm-hero.component';
import { PmHomeComponent } from './pm-home/pm-home.component';
import { PmLogoComponent } from './pm-logo/pm-logo.component';
import { PmProjectModule } from './pm-project/pm-project.module';
import { PmSkylineComponent } from './pm-skyline/pm-skyline.component';
import { PmSocialComponent } from './pm-social/pm-social.component';

@NgModule({
  declarations: [
    AppComponent,
    PmBioComponent,
    PmContactComponent,
    PmHeroComponent,
    PmHomeComponent,
    PmLogoComponent,
    PmSkylineComponent,  
    PmSocialComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    PmExpModule,
    PmProjectModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    PmContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
