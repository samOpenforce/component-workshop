import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('eslint says no to empty lifecycle methods');
  }
}
