import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { TodoMVCComponent } from './todomvc/todomvc.component';
import { CompodocComponent } from './compodoc/compodoc.component';

import { ABOUT_ROUTES } from './about.routes';

/**
 * The about module
 *
 * Just embedding <about> component and it's routing definition in {@link AboutRoutingModule}
 */
@NgModule({
    declarations: [AboutComponent, TodoMVCComponent, CompodocComponent],
    imports: [RouterModule.forChild(ABOUT_ROUTES)]
})
export class AboutModule {}
