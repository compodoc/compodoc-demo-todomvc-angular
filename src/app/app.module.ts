import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from './header/';

import { ListModule } from './list/';

import { FooterModule } from './footer/';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        HeaderModule,
        ListModule,
        FooterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
