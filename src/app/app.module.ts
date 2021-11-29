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
import { MultiselectComponent } from './screens/multiselect/multiselect.component';
import { AutocompleteComponent } from './screens/autocomplete/autocomplete.component';
import { MatListModule } from '@angular/material/list';
import { ValidationErrorComponent } from './shared/validation-error/validation-error.component';

// required for AOT compilation
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
    MultiselectComponent,
    AutocompleteComponent,
    ValidationErrorComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
