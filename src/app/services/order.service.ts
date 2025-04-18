import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createOrdered(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/cart`, data);
  }

  getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart`);
  }

  getOrdersByUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart/user`);
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cart/${orderId}`);
  }
}
