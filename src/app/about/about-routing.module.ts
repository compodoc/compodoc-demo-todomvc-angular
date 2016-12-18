import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const APP_ROUTES: Routes = [
    { path: '', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
