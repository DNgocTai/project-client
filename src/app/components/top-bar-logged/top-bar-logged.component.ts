import { Component, Input } from '@angular/core';
import { IUser } from '../../interface/user';
import { AuthJWTService } from '../../services/auth-jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-logged',
  templateUrl: './top-bar-logged.component.html',
  styleUrl: './top-bar-logged.component.scss',
})
export class TopBarLoggedComponent {
  @Input() isAuthenticated: boolean = false;
  @Input() userLoggedIn: IUser | undefined;

  constructor(private authSrv: AuthJWTService) {}

  logout() {
    this.authSrv.logout().subscribe();
  }
}
