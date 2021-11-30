import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeType } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private langSub!: Subscription;
  public browserLanguage = navigator.language.substring(0, 2).toLowerCase();
  private storedLanguage = localStorage.getItem('workshop-user-lang');
  private userLanguage = '';
  private userTheme = localStorage.getItem('workshop-user-theme');
  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.userTheme === ThemeType.DARK
      ? this.themeService.themeChange(ThemeType.DARK)
      : this.themeService.themeChange(ThemeType.DEFAULT);

    // init language
    this.userLanguage = this.storedLanguage
      ? this.storedLanguage
      : this.browserLanguage;

    if (this.userLanguage === 'de') {
      this.translate.use('de');
    } else {
      this.translate.use('en');
    }

    this.langSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        localStorage.setItem('workshop-user-lang', event.lang);
      }
    );
  }
}
