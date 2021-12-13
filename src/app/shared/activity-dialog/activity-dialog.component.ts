import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.scss'],
})
export class ActivityDialogComponent {
  constructor(private matDialogRef: MatDialogRef<ActivityDialogComponent>) {
    // matDialogRef.disableClose = true;
    matDialogRef.disableClose = false; // TODO dev only
  }

  close(): void {
    this.matDialogRef.close();
  }
}
