import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPayment } from '../interface/payment';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createPayment(data: IPayment, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment`, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  }
}
