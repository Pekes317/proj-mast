import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { PmProjectComponent } from './pm-project.component';
import { PmRoofComponent } from './pm-roof/pm-roof.component';

const projectRoutes: Routes = [
  { path: 'projects', component: PmProjectComponent, data: { title: 'Projects | Project Mast' } }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(projectRoutes)
  ],
  declarations: [
    PmProjectComponent,
    PmRoofComponent
  ]
})
export class PmProjectModule { }
