import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent implements OnInit, AfterViewInit {
  @ViewChildren('step') steps!: QueryList<CdkDropList>;

  chain = [
    {
      title: 'Step One',
      data: ['Item 0', 'Item 1', 'Item 2', 'Item 3'],
    },
    {
      title: 'Step Two',
      data: ['Item 4'],
    },
    {
      title: 'Step Three',
      data: ['Item 5', 'Item 6', 'Item 7'],
    },
  ];
  supplyChainSteps: Array<CdkDropList> = [];

  constructor() {}

  ngOnInit(): void {
    console.log('grid-list onInit lifecycle');
  }

  ngAfterViewInit(): void {
    /* https://github.com/angular/angular/issues/1469 */
    // loop through queryList ann create array of CdkDropLists
    this.steps.forEach((directive, index) => {
      this.supplyChainSteps.push(directive);
    });
  }

  dropped(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
