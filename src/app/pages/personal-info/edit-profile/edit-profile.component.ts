import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../../../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
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
