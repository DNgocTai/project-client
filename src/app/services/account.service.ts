import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';
import {
  Observable,
  ReplaySubject,
  catchError,
  map,
  of,
  shareReplay,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private userIdentity: any;
  private authenticationState = new ReplaySubject<IUser | null>(1);
  private accountCache$?: Observable<IUser | null>;

  baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private _localStorage: LocalStorageService
  ) {}

  createUser(user: IUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  getUserIdentity(): IUser | null {
    return this.userIdentity;
  }

  fetch(): Observable<IUser> {
    const token = this._localStorage.retrieve('authToken');

    return this.http.get<IUser>(`http://localhost:3000/auth/me`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  }

  identity(force?: boolean): Observable<IUser | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => of(null)),
        map((account: IUser | null) => {
          this.authenticate(account);
          return account;
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== undefined;
  }

  authenticate(identity: IUser | null) {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }
}
