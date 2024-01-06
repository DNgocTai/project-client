import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly SERVER_API_URL: any;

  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {
    this.SERVER_API_URL = 'http/localhost:3000';
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !request ||
      !request.url ||
      (request.url.startsWith('http') &&
        !(this.SERVER_API_URL && request.url.startsWith(this.SERVER_API_URL)))
    ) {
      return next.handle(request);
    }

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
