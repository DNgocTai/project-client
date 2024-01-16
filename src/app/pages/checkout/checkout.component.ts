import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Title } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CheckoutCartItemComponent } from '../../components/checkout-cart-item/checkout-cart-item.component';
import { RouterModule } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [
    ComponentsModule,
    CommonModule,
    CheckoutCartItemComponent,
    RouterModule,
  ],
})
export class CheckoutComponent {
  cart: any[] = this.cartSrv.cart;
  subTotal: number = this?.cartSrv?.getTotalPrice();
  subTotalItems: number = this?.cartSrv?.getTotalQty();
  isEmptyCart = this.cartSrv.isEmptyCart();

  constructor(private titleService: Title, private cartSrv: CartService) {
    this.titleService.setTitle('Giỏ hàng | Grocery Coffee');
  }
}
