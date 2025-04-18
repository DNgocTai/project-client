import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICategory } from '../interface/category';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createCategory(category: ICategory): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, category);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`).pipe(map((res) => res));
  }

  updateCategory(id: string, category: ICategory): Observable<any> {
    return this.http.patch(`${this.baseUrl}/categories/${id}`, category);
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categories/${id}`);
  }
}
