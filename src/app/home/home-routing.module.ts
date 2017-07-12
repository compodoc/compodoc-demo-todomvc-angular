import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const HOME_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
