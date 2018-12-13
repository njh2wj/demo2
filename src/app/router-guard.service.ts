import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot} from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => boolean;
}

@Injectable({providedIn: 'root'})
export class RouterGuardService implements CanDeactivate<CanComponentDeactivate>, CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(state.url);
        if (state.url.includes('information-add')) {
            if (localStorage.getItem('personEntity')) {
                return false;
            } else {
                return true;
            }
        }
        if (state.url.includes('information-edit')) {
            if (localStorage.getItem('personEntity')) {
                return true;
            } else {
                return false;
            }
        }
        if (state.url.includes('user-exercise')) {
            if (localStorage.getItem('personEntity')) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    canDeactivate(component: CanComponentDeactivate) {
        console.log(component);
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
