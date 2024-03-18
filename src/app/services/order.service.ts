import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'https://project-server-production-f74c.up.railway.app';

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
