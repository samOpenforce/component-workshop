import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { AbstractFormComponent } from './abstract-form-component';

@Injectable({
  providedIn: 'root',
})
export class FormComponentDeactivateGuard implements CanDeactivate<AbstractFormComponent> {
  async canDeactivate(component: AbstractFormComponent): Promise<boolean> {
    const canDeactivate = await component.canDeactivate();
    return canDeactivate;
  }
}
