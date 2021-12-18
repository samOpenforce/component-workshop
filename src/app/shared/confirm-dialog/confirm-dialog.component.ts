import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      messageKey: string;
      titleKey: string;
      cancelKey: string;
      confirmKey: string;
      testSelector: string | undefined;
      destructive?: boolean | undefined;
    },
    private matDialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit(): void {
    console.log('dialog created');
    console.log(this.data);
  }

  cancel(): void {
    this.close(false);
  }
  close(value: boolean): void {
    this.matDialogRef.close(value);
  }
  confirm(): void {
    this.close(true);
  }
  @HostListener('keydown.esc')
  onEsc(): void {
    this.cancel();
  }
}
