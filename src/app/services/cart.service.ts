import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'https://project-server-production-f74c.up.railway.app';
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

  addToCart(data: any, id: string) {
    this.getLocalStorage();
    const itemExits = this.cart.find((c) => c._id === id);

    if (!itemExits) {
      this.cart.push(data);
    } else {
      this.addOne(id);
    }
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
  }

  minusOne(id: string) {
    const cartItem = this.cart.find((c) => c._id === id);
    if (cartItem.quantity > 1) {
      cartItem.quantity = cartItem.quantity - 1;
      cartItem.totalAmount = cartItem.price * cartItem.quantity;
      this.cart = [...this.cart];
      this.setLocalStorage();
      this.getLocalStorage();
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
