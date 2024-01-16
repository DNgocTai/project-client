import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthClassGuard implements CanActivate {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const access_token = this.localStorage.retrieve('authToken');
    const role = this.localStorage.retrieve('role');
    if (access_token) {
      return true;
    } else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
