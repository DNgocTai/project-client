import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { RouterOutlet } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { identity, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-common-layout',
  standalone: true,
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.scss',
  imports: [ComponentsModule, RouterOutlet, CommonModule],
})
export class CommonLayoutComponent {
  userIdentified: any;
  userLoggedIn: IUser | undefined;

  constructor(
    private accountSrv: AccountService,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    const token: string | null =
      this.localStorageService.retrieve('authToken') ??
      this.sessionStorageService.retrieve('authToken');

    if (token) {
      this.userIdentified = true;
      this.accountSrv.fetch().subscribe((res: any) => {
        console.log({ ...res.data });
        this.userLoggedIn = { ...res.data };
      });
    }
  }
}
