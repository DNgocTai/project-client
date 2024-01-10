import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ICart } from '../interface/cart';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'http://localhost:3000';
  cart: any = [];
  subTotal: number = 0;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private prodSrv: ProductsService
  ) {}

  getCarts() {
    const token = this.localStorage.retrieve('authToken');
    return this.http.get(`${this.baseUrl}/cart/user`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  }

  getAllCart() {
    const token = this.localStorage.retrieve('authToken');
    return this.http
      .get(`${this.baseUrl}/cart/user`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .pipe(
        map((res: any) =>
          res.data.forEach((el: any) => {
            this.prodSrv.getProduct(el.productId).subscribe((res: any) => {
              this.cart.push({
                ...res.data,
                quantity: 1,
                total: res.data.price * 1,
              });
              this.subTotal += res.data.price;
            });
          })
        )
      )
      .subscribe();
  }
}
