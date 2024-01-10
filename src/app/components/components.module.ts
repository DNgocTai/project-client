import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { ProductCompComponent } from './product-comp/product-comp.component';
import { CategoryComponent } from './category/category.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BackgroundComponent } from './background/background.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { RouterModule } from '@angular/router';
import { SwitchComponent } from './switch/switch.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { TopBarLoggedComponent } from './top-bar-logged/top-bar-logged.component';
import { FavouriteCartItemComponent } from './favourite-cart-item/favourite-cart-item.component';
import { CheckoutCartItemComponent } from './checkout-cart-item/checkout-cart-item.component';
import { GiftComponent } from './gift/gift.component';
import { CheckoutBlockComponent } from './checkout-block/checkout-block.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ListsComponent } from './lists/lists.component';
import { FilterComponent } from './filter/filter.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { PaymentComponent } from './payment/payment.component';

const COMPONENTS: any[] = [
  ProductCompComponent,
  CategoryComponent,
  BackgroundComponent,
  TopBarComponent,
  BreadcrumbComponent,
  ProductDetailComponent,
  SwitchComponent,
  FooterComponent,
  TopBarLoggedComponent,
  AddressComponent,
  FavouriteCartItemComponent,
  CheckoutCartItemComponent,
  GiftComponent,
  CheckoutBlockComponent,
  ShippingComponent,
  ShippingMethodComponent,
  GiftComponent,
  CheckoutBlockComponent,
  ShippingComponent,
  ShippingMethodComponent,
  ProductContentComponent,
  ProfileComponent,
  WalletComponent,
  AccountInfoComponent,
  ListsComponent,
  FilterComponent,
  CartItemComponent,
  CartListComponent,
  FavouriteListComponent,
  PaymentComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzRadioModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    NzSwitchModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    NzUploadModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
