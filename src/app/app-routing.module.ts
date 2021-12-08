import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app-routing';
import { HomeComponent } from './screens/home/home.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { SelectComponent } from './screens/select/select.component';
import { TextInputComponent } from './screens/text-input/text-input.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRouting.PATH.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRouting.PATH.HOME,
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: AppRouting.PATH.TEXT_INPUT,
    pathMatch: 'full',
    component: TextInputComponent,
  },
  {
    path: AppRouting.PATH.SELECT,
    pathMatch: 'full',
    component: SelectComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
