import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'angular2-swiper-wrapper';

import { PmProjectComponent } from './pm-project.component';
import { PmRoofComponent } from './pm-roof/pm-roof.component';
import { PmCodeComponent } from './pm-code/pm-code.component';
import { PmGraphicsComponent } from './pm-graphics/pm-graphics.component';
import { PmBaseComponent } from './pm-base/pm-base.component';

const projectRoutes: Routes = [
  { path: 'projects', component: PmProjectComponent,
    children: [ 
      { path: '', component: PmBaseComponent, data: { title: 'Projects | Project Mast' } },
      { path: 'graphic', component: PmGraphicsComponent, data: { title: 'Graphics | Project Mast' } },
      { path: 'code', component: PmCodeComponent, data: { title: 'Code | Project Mast' } }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(projectRoutes),
    SwiperModule
  ],
  declarations: [
    PmProjectComponent,
    PmRoofComponent,
    PmCodeComponent,
    PmGraphicsComponent,
    PmBaseComponent
  ]
})
export class PmProjectModule { }
