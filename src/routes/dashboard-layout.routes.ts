import { Routes } from '@angular/router';
import { authGuard } from '../app/authentication/auth.guard';
import { RoleClassGuard } from '../app/authentication/role-class.guard';
import { AuthClassGuard } from '../app/authentication/auth-class.guard';

export const DASHBOARD_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('../app/dashboard/dashboard-order/dashboard-order.component').then(
        (c) => c.DashboardOrderComponent
      ),
    canActivate: [AuthClassGuard, RoleClassGuard],
  },
  {
    path: 'manage-user',
    loadComponent: () =>
      import('../app/dashboard/dashboard-user/dashboard-user.component').then(
        (c) => c.DashboardUserComponent
      ),
    canActivate: [AuthClassGuard, RoleClassGuard],
  },
  {
    path: 'manage-category',
    loadComponent: () =>
      import(
        '../app/dashboard/dashboard-category/dashboard-category.component'
      ).then((c) => c.DashboardCategoryComponent),
    canActivate: [AuthClassGuard, RoleClassGuard],
  },
  {
    path: 'manage-product',
    loadComponent: () =>
      import(
        '../app/dashboard/dashboard-product/dashboard-product.component'
      ).then((c) => c.DashboardProductComponent),
    canActivate: [AuthClassGuard, RoleClassGuard],
  },
];
