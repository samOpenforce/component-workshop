import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface StepNode {
  name: string;
  children?: StepNode[];
  id: string;
}

interface TreeSupplier {
  name: string;
  id: string;
  icon: string;
  region: string;
}

const TREE_DATA: StepNode[] = [
  {
    id: 'aaa-00001',
    name: 'Product 0001',
    children: [
      {
        id: 'stage-0001',
        name: 'Stage One',
        children: [
          { name: 'Supplier 0001', id: '0001' },
          { name: 'Supplier 0002', id: '0002' },
          { name: 'Supplier 0003', id: '0003' },
        ],
      },
      {
        id: 'stage-0002',
        name: 'Stage Two',
        children: [
          { name: 'Supplier 0004', id: '0004' },
          { name: 'Supplier 0005', id: '0005' },
          { name: 'Supplier 0006', id: '0006' },
        ],
      },
    ],
  },
];

const SUPPLIER_DATA: Array<TreeSupplier> = [
  { name: 'AAA Supplier', id: '0001', icon: 'done', region: 'AT' },
  { name: 'BBB Supplier', id: '0002', icon: 'done', region: 'AT' },
  { name: 'CCC Supplier', id: '0003', icon: 'done', region: 'AT' },
  { name: 'DDD Supplier', id: '0004', icon: 'done', region: 'AT' },
  { name: 'EEE Supplier', id: '0005', icon: 'done', region: 'AT' },
  { name: 'FFF Supplier', id: '0006', icon: 'done', region: 'AT' },
];
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  treeControl = new NestedTreeControl<StepNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<StepNode>();
  hoveredOption = '';
  selectedOption: StepNode | undefined = undefined;
  selectedSupplier: TreeSupplier | undefined = undefined;
  selectedSupplierAncestors: Array<any> | null = null;
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: StepNode) => !!node.children && node.children.length > 0;

  getAncestors(array: Array<StepNode> | undefined, id: string): Array<any> | null {
    if (typeof array !== 'undefined') {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return [array[i]];
        }
        const a = this.getAncestors(array[i].children, id);
        if (a !== null) {
          a?.unshift(array[i]);
          return a;
        }
      }
    }
    return null;
  }
  ngOnInit(): void {
    console.log('tree onInit lifcycle');
  }

  displayNode(event: MouseEvent, node: StepNode): void {
    event.stopImmediatePropagation();
    console.log(node);
    this.hoveredOption = node.name;
  }

  selectNode(event: MouseEvent, node: StepNode): void {
    event.stopImmediatePropagation();
    console.log(node);
    this.selectedOption = node;
    this.setSelectedSupplier(node);
    this.selectedSupplierAncestors = this.getAncestors(this.dataSource.data, node.id);
  }

  setSelectedSupplier(node: StepNode): void {
    SUPPLIER_DATA.forEach((supplier) => {
      if (supplier.id === node.id) {
        this.selectedSupplier = supplier;
      }
    });
    console.log('selected', this.selectedSupplier);
  }
}
