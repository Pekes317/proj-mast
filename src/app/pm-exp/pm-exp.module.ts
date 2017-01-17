import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { PmExpComponent } from './pm-exp.component';
import { PmDarkKnightComponent } from './pm-dark-knight/pm-dark-knight.component';

const expRoutes: Routes = [
  { path: 'experience', component: PmExpComponent, data: { title: 'Experience | Project Mast' } }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(expRoutes)
  ],
  declarations: [
    PmExpComponent,
    PmDarkKnightComponent
    ]
})
export class PmExpModule { }
