import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPayment } from '../interface/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl = 'https://project-server-production-f74c.up.railway.app';

  constructor(private http: HttpClient) {}

  createPayment(data: IPayment, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment`, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  }
}
