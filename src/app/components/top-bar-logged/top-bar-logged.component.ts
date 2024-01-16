import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interface/user';
import { AuthJWTService } from '../../services/auth-jwt.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-top-bar-logged',
  templateUrl: './top-bar-logged.component.html',
  styleUrl: './top-bar-logged.component.scss',
})
export class TopBarLoggedComponent implements OnInit {
  @Input() isAuthenticated: boolean = false;
  @Input() userLoggedIn: IUser | undefined;
  @Input() cart: any[] = [];
  @Input() subTotal: number = 0;

  constructor(private authSrv: AuthJWTService, private cartSrv: CartService) {}

  ngOnInit(): void {
    this.subTotal = this.cartSrv.getTotalPrice();
  }

  logout() {
    this.authSrv.logout().subscribe();
  }
}
