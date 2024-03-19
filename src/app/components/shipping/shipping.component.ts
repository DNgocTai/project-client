import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
})
export class ShippingComponent implements OnInit {
  userLoggedIn: any;
  constructor(
    private readonly _localStorage: LocalStorageService,
    private readonly accountSrv: AccountService
  ) {}

  ngOnInit(): void {
    const token: string | null = this._localStorage.retrieve('authToken');
    if (token) {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = { ...res.data };
        console.log(this.userLoggedIn);
      });
    }
  }
}
