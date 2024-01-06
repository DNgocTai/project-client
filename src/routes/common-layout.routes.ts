import { Routes } from '@angular/router';
import { PersonalInfoComponent } from '../app/pages/personal-info/personal-info.component';
import { PROFILE_LAYOUT_ROUTES } from './profile-layout.routes';
import { HomepageComponent } from '../app/pages/homepage/homepage.component';
import { CATEGORY_LAYOUT_ROUTES } from './category.routes';

export const COMMON_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children: CATEGORY_LAYOUT_ROUTES,
  },
  {
    path: 'personal-info',
    component: PersonalInfoComponent,
    children: PROFILE_LAYOUT_ROUTES,
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('../app/pages/product/product.component').then(
        (c) => c.ProductComponent
      ),
  },
  {
    path: 'favourite-list',
    loadComponent: () =>
      import('../app/pages/favourite/favourite.component').then(
        (c) => c.FavouriteComponent
      ),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('../app/pages/checkout/checkout.component').then(
        (c) => c.CheckoutComponent
      ),
  },
  {
    path: 'shipping',
    loadComponent: () =>
      import('../app/pages/shipping/shipping.component').then(
        (c) => c.ShippingComponent
      ),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('../app/pages/payment/payment.component').then(
        (c) => c.PaymentComponent
      ),
  },
];
