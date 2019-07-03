import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmBioComponent } from './pm-bio/pm-bio.component';
import { PmHomeComponent } from './pm-home/pm-home.component';

const routes: Routes = [
  { path: '', component: PmHomeComponent, data: { title: 'Project Mast' } },
  { path: 'bio', component: PmBioComponent, data: { title: 'Bio | Project Mast' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
