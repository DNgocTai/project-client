import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthJWTService {
  constructor(
    private http: HttpClient,
    private _localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
    private accountSrv: AccountService
  ) {}

  baseUrl = 'http://localhost:3000';

  login(user: IUser) {
    return this.http
      .post(`${this.baseUrl}/auth/login`, user)
      .pipe(map((res) => this.authenticateSuccess(res, true)));
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this._localStorage.clear('authToken');
      this.$sessionStorage.clear('authToken');
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
