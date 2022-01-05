import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TextInputComponent } from './screens/text-input/text-input.component';
import { NumberInputComponent } from './screens/number-input/number-input.component';
import { SelectComponent } from './screens/select/select.component';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ValidationErrorComponent } from './shared/validation-error/validation-error.component';
import { AutocompleteSelectComponent } from './shared/autocomplete-select/autocomplete-select.component';
import { AutocompleteMultiselectComponent } from './shared/autocomplete-multiselect/autocomplete-multiselect.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftSideDrawerComponent } from './drawers/left-side-drawer/left-side-drawer.component';
import { RightSideDrawerComponent } from './drawers/right-side-drawer/right-side-drawer.component';
import { ErrorStateMatcher, MatRippleModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { InfoDialogComponent } from './shared/info-dialog/info-dialog.component';
import { ActivityDialogComponent } from './shared/activity-dialog/activity-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './layout/footer/footer.component';
import { FileInputComponent } from './screens/file-input/file-input.component';
import { CanDeactivateComponent } from './screens/can-deactivate/can-deactivate.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { TemplateNumberFormatPipe } from './shared/template-number-format.pipe';
import { InputNumberFormatDirective } from './shared/input-number-format.directive';
import { ColorsComponent } from './screens/colors/colors.component';
import { ShowErrorOnSubmitted, ShowErrorOnTouchedOrSubmitted } from './utils/workshop-ErrorStateMatchers';
import { GridListComponent } from './screens/grid-list/grid-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeComponent } from './screens/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
// required for ngx-translate AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    TextInputComponent,
    NumberInputComponent,
    SelectComponent,
    ValidationErrorComponent,
    AutocompleteSelectComponent,
    AutocompleteMultiselectComponent,
    LeftSideDrawerComponent,
    RightSideDrawerComponent,
    InfoDialogComponent,
    ActivityDialogComponent,
    FooterComponent,
    FileInputComponent,
    CanDeactivateComponent,
    ConfirmDialogComponent,
    TemplateNumberFormatPipe,
    InputNumberFormatDirective,
    ColorsComponent,
    GridListComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatSidenavModule,
    MatRippleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    DragDropModule,
    MatTreeModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: ShowErrorOnTouchedOrSubmitted,
    },
  ],
})
export class AppModule {}
