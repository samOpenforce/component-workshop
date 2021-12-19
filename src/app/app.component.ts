import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SideDrawerService } from './services/side-drawer.service';
import { ThemeService, ThemeType } from './services/theme.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// locale handling
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en-AU';
import localeDe from '@angular/common/locales/de-AT';
@UntilDestroy()
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

  title = 'component-workshop';
  //LAYOUT
  isLeftDrawerOpen = false;
  isRightDrawerOpen = false;
  constructor(
    private sideDrawerService: SideDrawerService,
    private translate: TranslateService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    registerLocaleData(localeEn);
    registerLocaleData(localeDe);

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

    /* LEFT SIDE DRAWER */
    this.sideDrawerService.leftChangeEmitted$
      .pipe(untilDestroyed(this))
      .subscribe((change: any) => {
        this.isLeftDrawerOpen = change;
        this.sideDrawerService.leftOpen = change;
      });

    /* RIGHT SIDE DRAWER DISPL*/
    this.sideDrawerService.rightChangeEmitted$
      .pipe(untilDestroyed(this))
      .subscribe((change: any) => {
        this.isRightDrawerOpen = change;
        this.sideDrawerService.rightOpen = change;
      });
  }

  public closeDrawers(): void {
    this.sideDrawerService.emitLeftChange(false);
    this.sideDrawerService.emitRightChange(false);
  }
}
