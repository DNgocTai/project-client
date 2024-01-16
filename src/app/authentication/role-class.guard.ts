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
export class RoleClassGuard implements CanActivate {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private notifySrv: NotificationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const role = this.localStorage.retrieve('role');
    if (role === 'ADMIN') {
      return true;
    } else {
      this.router.navigate(['//']);
      this.notifySrv.createNotification(
        'warning',
        'Bạn không có thẩm quyền để vào trang quản trị!'
      );
      return false;
    }
  }
}
