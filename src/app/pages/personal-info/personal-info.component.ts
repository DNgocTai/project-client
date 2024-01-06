import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { IUser } from '../../interface/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
  imports: [ComponentsModule, RouterOutlet],
})
export class PersonalInfoComponent implements OnInit {
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
