import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [FooterComponent]
})
export class FooterModule { }
