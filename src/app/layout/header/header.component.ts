import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService, ThemeType } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkMode!: boolean;

  constructor(
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
}
