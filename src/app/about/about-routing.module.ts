import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { TodoMVCComponent } from './todomvc/todomvc.component';
import { CompodocComponent } from './compodoc/compodoc.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: AboutComponent,
        children: [
            { path: '', redirectTo: 'todomvc', pathMatch: 'full' },
            { path: 'todomvc', component: TodoMVCComponent },
            { path: 'compodoc', component: CompodocComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [
        TodoMVCComponent,
        CompodocComponent
    ]
})
export class AboutRoutingModule { }
