import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { PmBaseComponent } from './pm-base/pm-base.component';
import { PmGraphicsComponent } from './pm-graphics/pm-graphics.component';
import { PmMaterialModule } from '../pm-material/pm-material.module';
import { PmProjectComponent } from './pm-project.component';
import { PmRoofComponent } from './pm-roof/pm-roof.component';
import { PmWebComponent } from './pm-web/pm-web.component';

const projectRoutes: Routes = [
  {
    path: 'projects',
    component: PmProjectComponent,
    children: [
      { path: '', component: PmBaseComponent, data: { title: 'Projects | Project Mast' } },
      { path: 'graphic', component: PmGraphicsComponent, data: { title: 'Graphics | Project Mast' } },
      { path: 'code', component: PmWebComponent, data: { title: 'Code | Project Mast' } }
    ]
  }
];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, PmMaterialModule, RouterModule.forChild(projectRoutes), SwiperModule],
  declarations: [PmBaseComponent, PmGraphicsComponent, PmProjectComponent, PmRoofComponent, PmWebComponent]
})
export class PmProjectModule {}
