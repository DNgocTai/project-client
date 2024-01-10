import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interface/user';
import { AuthJWTService } from '../../services/auth-jwt.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ICart } from '../../interface/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar-logged',
  templateUrl: './top-bar-logged.component.html',
  styleUrl: './top-bar-logged.component.scss',
})
export class TopBarLoggedComponent {
  @Input() isAuthenticated: boolean = false;
  @Input() userLoggedIn: IUser | undefined;
  @Input() carts: ICart | undefined;

  constructor(private authSrv: AuthJWTService) {}

  logout() {
    this.authSrv.logout().subscribe();
  }
}
