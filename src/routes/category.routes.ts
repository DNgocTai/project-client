import { Routes } from '@angular/router';

export const CATEGORY_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'starbucks',
  },
  {
    path: 'starbucks',
    loadComponent: () =>
      import(
        '../app/pages/homepage/category/starbucks/starbucks.component'
      ).then((c) => c.StarbucksComponent),
  },
  {
    path: 'lavazza',
    loadComponent: () =>
      import('../app/pages/homepage/category/lavazza/lavazza.component').then(
        (c) => c.LavazzaComponent
      ),
  },
  {
    path: 'nescafe',
    loadComponent: () =>
      import('../app/pages/homepage/category/nescafe/nescafe.component').then(
        (c) => c.NescafeComponent
      ),
  },
];
