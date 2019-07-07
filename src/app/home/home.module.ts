import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { HeaderModule } from '../header/';
import { ListModule } from '../list/';
import { FooterModule } from '../footer/';

/**
 * The header module
 *
 * Just embedding <home> component and it's routing definition in {@link HomeRoutingModule}
 */
@NgModule({
    declarations: [HomeComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        HeaderModule.forRoot(),
        ListModule,
        FooterModule,
        HomeRoutingModule
    ],
    exports: [HomeComponent]
})
export class HomeModule {}
