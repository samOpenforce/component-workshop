import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app-routing';
import { CanDeactivateComponent } from './screens/can-deactivate/can-deactivate.component';
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
    path: AppRouting.PATH.NUMBER_INPUT,
    pathMatch: 'full',
    component: NumberInputComponent,
  },
  {
    path: AppRouting.PATH.CAN_DEACTIVATE,
    pathMatch: 'full',
    component: CanDeactivateComponent,
    canDeactivate: [FormComponentDeactivateGuard],
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
