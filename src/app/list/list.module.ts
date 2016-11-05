import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';

import { TodoModule } from './todo/';

@NgModule({
    imports: [TodoModule],
    declarations: [
        ListComponent
    ],
    exports: [ListComponent]
})
export class ListModule { }
