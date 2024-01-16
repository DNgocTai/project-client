import { Component, Input } from '@angular/core';
import { IProduct } from '../../interface/product';
import { CartService } from '../../services/cart.service';
import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-cart-item',
  templateUrl: './checkout-cart-item.component.html',
  styleUrl: './checkout-cart-item.component.scss',
  standalone: true,
  imports: [
    CommonLayoutComponent,
    CheckoutComponent,
    RouterModule,
    CommonModule,
  ],
})
export class CheckoutCartItemComponent {
  @Input() prod: any = {};
  openModal: boolean = false;

  constructor(
    private cartSrv: CartService,
    private commonLayout: CommonLayoutComponent,
    private checkout: CheckoutComponent
  ) {}

  deleteCart(id: string) {
    this.cartSrv.deleteCart(id);
    this.commonLayout.cart = this.cartSrv.cart;
    this.checkout.cart = this.cartSrv.cart;
    this.checkout.subTotalItems = this.cartSrv.getTotalQty();
    this.checkout.subTotal = this.cartSrv.getTotalPrice();
    this.commonLayout.subTotal = this.cartSrv.getTotalPrice();
    this.openModal = !this.openModal;
  }

  addQuantity(id: string) {
    this.cartSrv.addOne(id);
    this.checkout.subTotalItems = this.cartSrv.getTotalQty();
    this.checkout.subTotal = this.cartSrv.getTotalPrice();
    this.commonLayout.subTotal = this.cartSrv.getTotalPrice();
  }

  minusQuantity(id: string) {
    this.cartSrv.minusOne(id);
    this.checkout.subTotalItems = this.cartSrv.getTotalQty();
    this.checkout.subTotal = this.cartSrv.getTotalPrice();
    this.commonLayout.subTotal = this.cartSrv.getTotalPrice();
  }
}
