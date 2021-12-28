import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  colors = ['red', 'blue', 'orange', 'green'];
  shades = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  constructor() {}

  ngOnInit(): void {
    console.log('colors component');
  }
}
