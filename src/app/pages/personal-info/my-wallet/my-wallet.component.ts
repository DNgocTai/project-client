import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { IUser } from '../../../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-my-wallet',
  standalone: true,
  templateUrl: './my-wallet.component.html',
  styleUrl: './my-wallet.component.scss',
  imports: [RouterModule, ComponentsModule],
})
export class MyWalletComponent {
  userLoggedIn: IUser | undefined;

  constructor(
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
    private accountSrv: AccountService
  ) {}

  ngOnInit(): void {
    const token: string | null =
      this.$localStorage.retrieve('authToken') ??
      this.$sessionStorage.retrieve('authToken');

    if (token) {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = res.data;
      });
    }
  }
}
