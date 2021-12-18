import { Component } from '@angular/core';
import { DialogServiceOptions } from '../models/DialogServiceOptions';
import { DialogService } from '../services/dialog.service';

/**
 * Abstract form component that to be used in combination with the FormComponentDeactivateGuard
 */
@Component({
  selector: 'nxlr-abstract-form',
  template: '<span></span>',
})
export abstract class AbstractFormComponent {
  protected constructor(protected dialogService: DialogService) {}

  /**
   * overwrites to get if form has changes
   */
  abstract hasFormChanges(): boolean;

  /**
   * User can overwrite to return different options that are used by the confirm dialog
   */
  protected getFormConfirmDialogOptions(): DialogServiceOptions {
    return {
      titleKey: 'dialogs.confirm-dialog.unsaved-changes.title',
      messageKey: 'dialogs.confirm-dialog.unsaved-changes.text',
      cancelKey: 'common.no',
      continueKey: 'common.yes',
    };
  }

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
          cancelKey: 'common.no',
          // continueKey: 'common.yes',
        },
        (result: boolean) => {
          canDeactivate = result;
        }
      );
    }
    return canDeactivate;
  }
}
