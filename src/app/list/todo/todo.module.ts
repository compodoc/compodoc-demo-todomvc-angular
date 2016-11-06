import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo.component';

import { FirstUpperPipe } from '../../pipes/first-upper.pipe';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TodoComponent,
        FirstUpperPipe
    ],
    exports: [TodoComponent]
})
export class TodoModule { }
