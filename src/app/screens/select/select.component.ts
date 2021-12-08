import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  selectFormGroup!: FormGroup;

  options: Array<any> = [];

  basicOptions = [
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.options = this.basicOptions;
    this.selectFormGroup = this.formBuilder.group({});
  }

  get getControl(): {
    [key: string]: AbstractControl;
  } {
    return this.selectFormGroup.controls;
  }
}
