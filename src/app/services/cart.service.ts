import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'http://localhost:3000';
  cart: any[] = [];
  subTotal: number = 0;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getTotalQty() {
    return this.cart?.reduce((acc, curr) => {
      return (acc += curr.quantity);
    }, 0);
  }

  getTotalPrice() {
    return this.cart?.reduce((acc, curr) => {
      return (acc += curr.totalAmount);
    }, 0);
  }

  addToCart(data: any) {
    this.getLocalStorage();
    this.cart.push(data);
    this.setLocalStorage();
  }

  deleteCart(id: string) {
    const cart = this.cart.filter((item) => item._id !== id);
    this.cart = [...cart];
    this.setLocalStorage();
  }

  addOne(id: any) {
    const cartItem = this.cart.find((c) => c._id === id);
    cartItem.quantity = cartItem.quantity + 1;
    cartItem.totalAmount = cartItem.price * cartItem.quantity;
    this.cart = [...this.cart];
    this.setLocalStorage();
    this.getLocalStorage();
    console.log(this.cart);
  }

  minusOne(id: string) {
    const cartItem = this.cart.find((c) => c._id === id);
    if (cartItem.quantity > 1) {
      cartItem.quantity = cartItem.quantity - 1;
      cartItem.totalAmount = cartItem.price * cartItem.quantity;
      this.cart = [...this.cart];
      this.setLocalStorage();
      this.getLocalStorage();
      console.log(this.cart);
    }
  }

  setLocalStorage() {
    this.cart = this.localStorage.store('shopping-cart', this.cart);
  }

  getLocalStorage() {
    this.cart = this.localStorage.retrieve('shopping-cart');
  }

  isEmptyCart() {
    return this.cart?.length === 0;
  }

  clearAllCart() {
    this.cart = [];
    this.setLocalStorage();
  }
}
