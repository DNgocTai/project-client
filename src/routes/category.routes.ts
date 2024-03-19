import { Routes } from '@angular/router';

export const CATEGORY_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nescafe',
  },
  {
    path: 'trungnguyen',
    loadComponent: () =>
      import(
        '../app/pages/homepage/category/trungnguyen/trungnguyen.component'
      ).then((c) => c.TrungnguyenComponent),
  },
  {
    path: 'nescafe',
    loadComponent: () =>
      import('../app/pages/homepage/category/nescafe/nescafe.component').then(
        (c) => c.NescafeComponent
      ),
  },
  {
    path: 'lavazza',
    loadComponent: () =>
      import('../app/pages/homepage/category/lavazza/lavazza.component').then(
        (c) => c.LavazzaComponent
      ),
  },
  {
    path: 'vinacafe',
    loadComponent: () =>
      import('../app/pages/homepage/category/vinacafe/vinacafe.component').then(
        (c) => c.VinacafeComponent
      ),
  },
];
