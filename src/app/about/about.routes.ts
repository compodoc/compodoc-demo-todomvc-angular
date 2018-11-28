import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { TodoMVCComponent } from './todomvc/todomvc.component';
import { CompodocComponent } from './compodoc/compodoc.component';

/**
 * About Routing module
 *
 * Exposing just two routes, one for Compodoc, the other one for TodoMVC
 */
export const ABOUT_ROUTES: Routes = [
    {
        path: '', component: AboutComponent,
        children: [
            { path: '', redirectTo: 'todomvc', pathMatch: 'full' },
            { path: 'todomvc', component: TodoMVCComponent },
            { path: 'compodoc', component: CompodocComponent }
        ]
    }
];
