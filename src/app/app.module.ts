import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeModule } from './home/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoStore } from './shared/services/todo.store';
import { NoopInterceptor } from './shared/interceptors/noopinterceptor.interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HomeModule, AppRoutingModule],
    providers: [
        TodoStore,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NoopInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
