import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`).pipe(map((res) => res));
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }
}
