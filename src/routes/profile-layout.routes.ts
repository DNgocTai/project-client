import { Routes } from '@angular/router';

export const PROFILE_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-wallet',
  },
  {
    path: 'my-wallet',
    loadComponent: () =>
      import('../app/pages/personal-info/my-wallet/my-wallet.component').then(
        (c) => c.MyWalletComponent
      ),
  },
  {
    path: 'edit-profile',
    loadComponent: () =>
      import(
        '../app/pages/personal-info/edit-profile/edit-profile.component'
      ).then((c) => c.EditProfileComponent),
  },
  {
    path: 'add-new-card',
    loadComponent: () =>
      import(
        '../app/pages/personal-info/add-new-card/add-new-card.component'
      ).then((c) => c.AddNewCardComponent),
  },
  {
    path: 'order',
    loadComponent: () =>
      import('../app/pages/personal-info/order/order.component').then(
        (c) => c.OrderComponent
      ),
  },
];
