import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { RouterOutlet } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { identity, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { TopBarLoggedComponent } from '../../components/top-bar-logged/top-bar-logged.component';

@Component({
  selector: 'app-common-layout',
  standalone: true,
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.scss',
  imports: [ComponentsModule, RouterOutlet, CommonModule, FormsModule],
})
export class CommonLayoutComponent implements OnInit {
  userIdentified: any;
  userLoggedIn: IUser | undefined;
  cart: any[] = [];
  subTotal: any;

  constructor(
    private accountSrv: AccountService,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private cartSrv: CartService
  ) {}

  ngOnInit(): void {
    const token: string | null =
      this.localStorageService.retrieve('authToken') ??
      this.sessionStorageService.retrieve('authToken');

    if (token) {
      this.userIdentified = true;
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = { ...res.data };
        this.localStorageService.store('role', res?.data?.role);
        console.log(this.userLoggedIn);
      });
    }
    this.cartSrv.getLocalStorage();
    this.cart = this.cartSrv.cart;
  }
}
