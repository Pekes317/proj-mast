import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PmBioComponent } from './pm-bio/pm-bio.component';
import { PmContactComponent } from './pm-contact/pm-contact.component';
import { PmExpModule } from './pm-exp/pm-exp.module';
import { PmHeroComponent } from './pm-hero/pm-hero.component';
import { PmHomeComponent } from './pm-home/pm-home.component';
import { PmLogoComponent } from './pm-logo/pm-logo.component';
import { PmMaterialModule } from './pm-material/pm-material.module';
import { PmProjectModule } from './pm-project/pm-project.module';
import { PmSkylineComponent } from './pm-skyline/pm-skyline.component';
import { PmSocialComponent } from './pm-social/pm-social.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'pm-server' }),
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    PmExpModule,
    PmMaterialModule,
    PmProjectModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [PmContactComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
