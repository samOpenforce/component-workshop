import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      messageKey: string;
      titleKey: string;
      confirmKey: string;
      testSelector: string | undefined;
      destructive?: boolean | undefined;
    },
    private matDialogRef: MatDialogRef<InfoDialogComponent>
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
