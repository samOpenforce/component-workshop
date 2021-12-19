import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

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
      class: 'red',
    },
    {
      displayName: 'many',
      value: 'MA',
      class: 'blue',
    },
    {
      displayName: 'none',
      value: 'NO',
      class: 'orange',
    },
    {
      displayName: 'all',
      value: 'AL',
      class: 'green',
    },
    /*   {
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
    }, */
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
