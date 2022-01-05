import { Component, OnInit } from '@angular/core';
import { AppRouting } from '../../app-routing';
import { SideDrawerService } from '../../services/side-drawer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screens = [
    { displayName: 'Text Input', route: AppRouting.PATH.TEXT_INPUT },
    { displayName: 'Number Input', route: AppRouting.PATH.NUMBER_INPUT },
    { displayName: 'Select', route: AppRouting.PATH.SELECT },
    { displayName: 'canDeactivate', route: AppRouting.PATH.CAN_DEACTIVATE },
    { displayName: 'Colors', route: AppRouting.PATH.COLORS },
    { displayName: 'Draggable grid-list', route: AppRouting.PATH.GRID_LIST },
    { displayName: 'Tree', route: AppRouting.PATH.TREE },
  ];
  constructor(private sideDrawerService: SideDrawerService) {}

  ngOnInit(): void {
    console.log('eslint says no to empty lifecycle methods');
  }

  openRightSideDrawer(): void {
    this.sideDrawerService.emitRightChange(true);
  }
}
