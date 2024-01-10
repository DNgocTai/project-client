import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent implements OnInit {
  cart: any = [];
  subTotal: any;

  constructor(private cartSrv: CartService) {}

  ngOnInit(): void {
    this.cartSrv.getAllCart();
    this.cart = this.cartSrv.cart;
    this.cartSrv.subTotal = this.subTotal;
    console.log(this.cart.forEach((c: any) => console.log(c)));
    console.log(this.subTotal);
  }
}
