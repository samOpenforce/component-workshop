import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from '../../services/side-drawer.service';

@Component({
  selector: 'app-right-side-drawer',
  templateUrl: './right-side-drawer.component.html',
  styleUrls: ['./right-side-drawer.component.scss'],
})
export class RightSideDrawerComponent implements OnInit {
  constructor(private sideDrawerService: SideDrawerService) {}

  ngOnInit(): void {
    console.log('right side drawer empty oninit');
  }

  public toggleRightDrawer(): void {
    this.sideDrawerService.emitRightChange(!this.sideDrawerService.rightOpen);
  }
}
