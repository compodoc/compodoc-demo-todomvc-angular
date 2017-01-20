import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';

import { AboutRoutingModule }    from './about-routing.module';

/**
 * The about module
 * 
 * Just embedding <about> component and it's routing definition in AboutRoutingModule
 */
@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [AboutRoutingModule]
})
export class AboutModule { }
