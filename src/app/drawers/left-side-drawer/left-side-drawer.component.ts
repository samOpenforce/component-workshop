import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '../../services/dialog.service';
import { SideDrawerService } from '../../services/side-drawer.service';

const basicOptions = [
  {
    displayName: 'some',
    value: 'SO',
  },
  {
    displayName: 'many',
    value: 'MA',
  },
  {
    displayName: 'none',
    value: 'NO',
  },
  {
    displayName: 'all',
    value: 'AL',
  },
  {
    displayName: 'far',
    value: 'FA',
  },
  {
    displayName: 'near',
    value: 'NE',
  },
  {
    displayName: 'close',
    value: 'CL',
  },
  {
    displayName: 'away',
    value: 'AW',
  },
];
@Component({
  selector: 'app-left-side-drawer',
  templateUrl: './left-side-drawer.component.html',
  styleUrls: ['./left-side-drawer.component.scss'],
})
export class LeftSideDrawerComponent implements OnInit {
  leftDrawerFormGroup!: FormGroup;
  options: Array<any> = [];
  constructor(
    private sideDrawerService: SideDrawerService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.leftDrawerFormGroup = this.formBuilder.group({});
    this.options = basicOptions;
  }

  public toggleLeftDrawer(): void {
    this.sideDrawerService.emitLeftChange(!this.sideDrawerService.leftOpen);
  }

  public handleOpenInfo(): void {
    this.dialogService.openInfo({
      titleKey: 'Opened dialog from side drawer',
      messageKey: `How's my backdrop?`,
      //hasBackdrop: false,
      backdropClass: 'transparent-backdrop',
    });
  }

  public handleOpenActivity(): void {
    this.dialogService.openActivity(false);
  }
}
