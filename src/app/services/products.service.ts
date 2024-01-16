import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createProduct(product: IProduct): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`).pipe(map((res) => res));
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }

  updateProduct(id: string, product: IProduct): Observable<any> {
    return this.http.patch(`${this.baseUrl}/products/${id}`, product);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }
}
