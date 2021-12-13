import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideDrawerService {
  leftOpen!: Observable<boolean>;
  rightOpen!: Observable<boolean>;

  /* LEFT SIDE DRAWER */
  // Observable source
  private emitLeftChangeSource = new Subject<boolean>();
  // Observable stream
  public leftChangeEmitted$ = this.emitLeftChangeSource.asObservable();
  // Service commands
  public emitLeftChange = (change: boolean) => {
    this.emitLeftChangeSource.next(change);
  };

  /* RIGHT SIDE DRAWER */
  // Observable string sources
  private emitRightChangeSource = new Subject<any>();
  // Observable string streams
  public rightChangeEmitted$ = this.emitRightChangeSource.asObservable();
  // Service message commands
  public emitRightChange = (change: boolean) => {
    this.emitRightChangeSource.next(change);
  };
}
