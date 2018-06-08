import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NoopGuard implements CanActivate {

    /**
     * Decide if a route can be activated
     */
    canActivate (): boolean {
        return true;
    }

}
