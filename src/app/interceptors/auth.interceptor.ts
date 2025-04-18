import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly SERVER_API_URL: any;

  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {
    this.SERVER_API_URL = environment.apiUrl;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null =
      this.localStorage.retrieve('authToken') ??
      this.sessionStorage.retrieve('authToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
