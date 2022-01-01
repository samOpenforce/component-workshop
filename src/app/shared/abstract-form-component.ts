import { Component, HostListener } from '@angular/core';
import { DialogServiceOptions } from '../models/DialogServiceOptions';
import { DialogService } from '../services/dialog.service';

/**
 * Abstract form component that to be used in combination with the FormComponentDeactivateGuard
 */
@Component({
  selector: 'app-abstract-form',
  template: '<span></span>',
})
export abstract class AbstractFormComponent {
  protected constructor(protected dialogService: DialogService) {}

  /**
   * only show browser refresh warning if form has changes
   */
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event: BeforeUnloadEvent): boolean {
    if (this.hasFormChanges()) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * parent overwrites form change state
   */
  abstract hasFormChanges(): boolean;

  /**
   * called by the FormComponentDeactivateGuard - shows a confirmation dialog if hasFormChanges() returns true
   */
  public async canDeactivate(): Promise<boolean> {
    let canDeactivate = true;
    if (this.hasFormChanges()) {
      await this.dialogService.openConfirmation(
        {
          titleKey: 'dialogs.confirm-dialog.unsaved-changes.title',
          messageKey: 'dialogs.confirm-dialog.unsaved-changes.text',
        },
        (result: boolean) => {
          canDeactivate = result;
        }
      );
    }
    return canDeactivate;
  }
}
