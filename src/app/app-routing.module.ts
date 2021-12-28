import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app-routing';
import { CanDeactivateComponent } from './screens/can-deactivate/can-deactivate.component';
import { ColorsComponent } from './screens/colors/colors.component';
import { HomeComponent } from './screens/home/home.component';
import { NumberInputComponent } from './screens/number-input/number-input.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { SelectComponent } from './screens/select/select.component';
import { TextInputComponent } from './screens/text-input/text-input.component';
import { FormComponentDeactivateGuard } from './shared/form-component-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRouting.PATH.HOME,
    pathMatch: 'full',
    data: {
      pageTitle: 'home',
    },
  },
  {
    path: AppRouting.PATH.HOME,
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      pageTitle: 'home',
    },
  },
  {
    path: AppRouting.PATH.TEXT_INPUT,
    pathMatch: 'full',
    component: TextInputComponent,
    data: {
      pageTitle: 'text input',
    },
  },
  {
    path: AppRouting.PATH.NUMBER_INPUT,
    pathMatch: 'full',
    component: NumberInputComponent,
    data: {
      pageTitle: 'number input',
    },
  },
  {
    path: AppRouting.PATH.CAN_DEACTIVATE,
    pathMatch: 'full',
    component: CanDeactivateComponent,
    canDeactivate: [FormComponentDeactivateGuard],
    data: {
      pageTitle: 'canDeactivate',
    },
  },
  {
    path: AppRouting.PATH.COLORS,
    pathMatch: 'full',
    component: ColorsComponent,
    data: {
      pageTitle: 'colors',
    },
  },
  {
    path: AppRouting.PATH.SELECT,
    pathMatch: 'full',
    component: SelectComponent,
    data: {
      pageTitle: 'select',
    },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
