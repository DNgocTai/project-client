import { Routes } from '@angular/router';

export const DASHBOARD_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: 'admin',
    loadComponent: () =>
      import(
        '../app/dashboard/dashboard-category/dashboard-category.component'
      ).then((c) => c.DashboardCategoryComponent),
  },
];
