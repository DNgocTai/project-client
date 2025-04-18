import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddress } from '../interface/address';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  creatAddress(address: IAddress): Observable<any> {
    return this.http.post(`${this.baseUrl}/address`, address);
  }

  getAddress(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/address/${id}`);
  }

  updateAddress(id: string, address: IAddress): Observable<any> {
    return this.http.patch(`${this.baseUrl}/address/${id}`, address);
  }
}
