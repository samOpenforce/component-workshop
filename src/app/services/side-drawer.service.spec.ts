import { TestBed } from '@angular/core/testing';

import { SideDrawerService } from './side-drawer.service';

describe('SideDrawerService', () => {
  let service: SideDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
