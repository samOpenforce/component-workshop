import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { SideDrawerService } from '../../services/side-drawer.service';
import { ThemeService, ThemeType } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkMode!: boolean;

  constructor(
    private sideDrawerService: SideDrawerService,
    private themeService: ThemeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    localStorage.getItem('workshop-user-theme') === ThemeType.DARK
      ? (this.isDarkMode = true)
      : (this.isDarkMode = false);
  }

  onThemeChange(event: MatSlideToggleChange): void {
    if (event.checked) {
      this.themeService.themeChange(ThemeType.DARK);
      this.isDarkMode = true;
    } else {
      this.themeService.themeChange(ThemeType.DEFAULT);
      this.isDarkMode = false;
    }
  }

  handleSetLang(locale: string): void {
    this.translate.use(locale);
    localStorage.setItem('workshop-user-lang', locale);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  public toggleLeftDrawer(): void {
    this.sideDrawerService.emitLeftChange(!this.sideDrawerService.leftOpen);
  }

  public toggleRightDrawer(): void {
    this.sideDrawerService.emitRightChange(!this.sideDrawerService.rightOpen);
  }
}
