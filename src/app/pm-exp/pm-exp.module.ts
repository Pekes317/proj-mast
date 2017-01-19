import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { PmExpComponent } from './pm-exp.component';
import { PmDarkKnightComponent } from './pm-dark-knight/pm-dark-knight.component';
import { PmSkillsComponent } from './pm-skills/pm-skills.component';
import { PmTestimonialComponent } from './pm-testimonial/pm-testimonial.component';

const expRoutes: Routes = [
  { path: 'experience', component: PmExpComponent, data: { title: 'Experience | Project Mast' } }
    /* children: [
       { path: '', component: PmSkillsComponent, data: { title: 'Experience | Project Mast' } },
       { path: 'testimonial', component: PmTestimonialComponent, data: { title: 'Testimonial | Project Mast' } }
     ] }*/
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(expRoutes)
  ],
  declarations: [
    PmExpComponent,
    PmDarkKnightComponent,
    PmSkillsComponent,
    PmTestimonialComponent
    ]
})
export class PmExpModule { }
