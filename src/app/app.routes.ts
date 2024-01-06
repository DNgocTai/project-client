import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { COMMON_LAYOUT_ROUTES } from '../routes/common-layout.routes';
import { DASHBOARD_LAYOUT_ROUTES } from '../routes/dashboard-layout.routes';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { CreateNewPasswordComponent } from './pages/create-new-password/create-new-password.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: COMMON_LAYOUT_ROUTES,
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: DASHBOARD_LAYOUT_ROUTES,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'new-password',
    component: CreateNewPasswordComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
