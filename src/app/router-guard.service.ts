import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({ providedIn: 'root'})
export class RouterGuardService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate) {
    console.log(component);
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
