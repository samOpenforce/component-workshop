import { OverlayContainer } from '@angular/cdk/overlay';
import { HostBinding, Injectable } from '@angular/core';

export enum ThemeType {
  DARK = 'dark-theme',
  DEFAULT = 'default-theme',
}
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  @HostBinding('class') componentCssClass: any;
  constructor(public overlayContainer: OverlayContainer) {}

  themeChange(value: ThemeType | null): void {
    if (value === ThemeType.DARK) {
      localStorage.setItem('workshop-user-theme', ThemeType.DARK);
      document.getElementsByTagName('body')[0].classList.add('dark-theme');
      this.overlayContainer
        .getContainerElement()
        .classList.remove('default-theme');
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
    } else {
      localStorage.setItem('workshop-user-theme', ThemeType.DEFAULT);
      document.getElementsByTagName('body')[0].classList.remove('dark-theme');
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
      this.overlayContainer
        .getContainerElement()
        .classList.add('default-theme');
      this.componentCssClass = 'default-theme';
    }
  }
}
