import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { PmProjectComponent } from './pm-project.component';
import { PmRoofComponent } from './pm-roof/pm-roof.component';
import { PmCodeComponent } from './pm-code/pm-code.component';
import { PmGraphicsComponent } from './pm-graphics/pm-graphics.component';

const projectRoutes: Routes = [
  { path: 'projects', component: PmProjectComponent,
    children: [ 
      { path: '', component: PmGraphicsComponent, data: { title: 'Projects | Project Mast' } },
      { path: 'code', component: PmCodeComponent, data: { title: 'Code | Project Mast' } }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(projectRoutes)
  ],
  declarations: [
    PmProjectComponent,
    PmRoofComponent,
    PmCodeComponent,
    PmGraphicsComponent
  ]
})
export class PmProjectModule { }
