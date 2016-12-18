import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
