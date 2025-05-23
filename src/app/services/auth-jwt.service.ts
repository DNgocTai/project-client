import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from './account.service';
import { CartService } from './cart.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthJWTService {
  constructor(
    private http: HttpClient,
    private _localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
    private accountSrv: AccountService,
    private cartSrv: CartService
  ) {}

  baseUrl = environment.apiUrl;

  login(user: IUser) {
    return this.http
      .post(`${this.baseUrl}/auth/login`, user)
      .pipe(map((res) => this.authenticateSuccess(res, true)));
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this._localStorage.clear('authToken');
      this.$sessionStorage.clear('authToken');
      this._localStorage.clear('shopping-cart');
      this._localStorage.clear('role');
      observer.complete();
    });
  }

  signUp(user: IUser) {
    return this.accountSrv.createUser(user);
  }

  authenticateSuccess(res: any, rememberMe: boolean): void {
    const jwt = res.data.access_token;
    if (rememberMe) {
      this._localStorage.store('authToken', jwt);
      this.$sessionStorage.clear('authToken');
    } else {
      this.$sessionStorage.store('authToken', jwt);
      this._localStorage.clear('authToken');
    }
  }

  isMatchPassword(password: string, confirmPassword: string): boolean {
    debugger;
    return password === confirmPassword;
  }
}
