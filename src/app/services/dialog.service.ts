import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { ActivityDialogComponent } from '../shared/activity-dialog/activity-dialog.component';
// import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component'
import { InfoDialogComponent } from '../shared/info-dialog/info-dialog.component';
// import { SnackbarDialogComponent } from '../shared/snackbar-dialog/snackbar-dialog.component'

export interface AppSnackOptions {
  mode: 'info' | 'success' | 'error';
  message: string; // TODO translate in snackbar OR use service.instant in calling component (handle params)
  snackId?: string;
}
export interface AppSnackOptionsExtended extends AppSnackOptions {
  duration?: number;
  hPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
  vPosition?: 'top' | 'bottom';
}

export interface AppConfirmOptions {
  titleKey: string;
  messageKey: string;
  cancelKey?: string | undefined;
  confirmKey?: string | undefined;
  panelClass?: string | undefined;
  testSelector?: string | undefined;
  destructive?: boolean | undefined;
  hasBackdrop?: boolean;
  backdropClass?: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private activityDialogRef!: MatDialogRef<ActivityDialogComponent>;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  // ACTIVITY
  public openActivity(standardBackdrop: boolean): void {
    this.activityDialogRef = this.dialog.open(ActivityDialogComponent, {
      panelClass: 'activity-panel',
      backdropClass: standardBackdrop ? '' : 'activityBackdropClass',
    });
  }

  public closeActivity(): void {
    if (this.activityDialogRef) {
      this.activityDialogRef.close();
    }
  }

  // SNACKBAR
  /*   public openSnackBar(options: AppSnackOptionsExtended): void {
    this.snackBar.openFromComponent(SnackbarDialogComponent, {
      // 0 is not recognised as value and must be checked for independently
      duration: options.duration === 0 ? 0 : options.duration ? options.duration : 3000,
      horizontalPosition: (options.hPosition as MatSnackBarHorizontalPosition) || 'right',
      verticalPosition: (options.vPosition as MatSnackBarVerticalPosition) || 'top',
      panelClass: `snack-${options.mode}-panel`,
      data: {
        mode: options.mode,
        message: options.message,
      },
    })
  } */

  // CONFIRMATION
  /*  public async openConfirmation(
    options: AppConfirmOptions,
    confirmedAction?: (result: any) => void
  ): Promise<void> {
    const panelClasses = ['dialog-panel'];
    if (options.panelClass) {
      panelClasses.push(options.panelClass);
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        titleKey: options.titleKey,
        messageKey: options.messageKey,
        cancelKey: options.cancelKey,
        confirmKey: options.confirmKey,
        testSelector: options.testSelector,
        destructive: options.destructive,
      },
      autoFocus: false,
      restoreFocus: false,
      disableClose: true,
      panelClass: panelClasses,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (confirmedAction) {
        confirmedAction(result);
      }
    });

    await dialogRef.afterClosed().toPromise();
  } */

  // INFO
  public openInfo(options: AppConfirmOptions): void {
    const panelClasses = ['dialog-panel'];
    if (options.panelClass) {
      panelClasses.push(options.panelClass);
    }
    this.dialog.open(InfoDialogComponent, {
      data: {
        titleKey: options.titleKey,
        messageKey: options.messageKey,
        confirmKey: options.confirmKey,
        testSelector: options.testSelector,
        destructive: options.destructive,
      },
      backdropClass: options.backdropClass ? options.backdropClass : '',
      autoFocus: false,
      restoreFocus: false,
      //  disableClose: true,
      hasBackdrop: options.hasBackdrop ? options.hasBackdrop : true,
      panelClass: panelClasses,
    });
  }
}
