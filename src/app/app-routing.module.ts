import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ENUMS } from './app-routes.enum';

enum APP_ENUM {
    home = 'home'
}

export const APP_ROUTES: Routes = [
    /*{
        path: 'about',
        loadChildren: () =>
            import('./about/about.module').then(m => m.AboutModule)
    },*/
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '', redirectTo: APP_ENUMS.home, pathMatch: 'full' },
    { path: '**', redirectTo: APP_ENUM.home, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
