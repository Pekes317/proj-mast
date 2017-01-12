import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PmLogoComponent } from './pm-logo/pm-logo.component';
import { SkylineComponent } from './skyline/skyline.component';
import { PmHeroComponent } from './pm-hero/pm-hero.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Project Mast' } },
  { path: 'bio', component: HomeComponent, data: { title: 'Bio | Project Mast' } },
  { path: 'experience', component: HomeComponent, data: { title: 'Experience | Project Mast' } },
  { path: 'contact', component: HomeComponent, data: { title: 'Contact | Project Mast' } }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PmLogoComponent,
    SkylineComponent,
    PmHeroComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
