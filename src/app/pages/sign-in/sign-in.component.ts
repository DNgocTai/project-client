import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AuthJWTService } from '../../services/auth-jwt.service';
import { AccountService } from '../../services/account.service';
import { mergeMap } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, NzSpinModule],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  isSpinning: boolean = false;

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private authJWTSrv: AuthJWTService,
    private accountService: AccountService,
    private router: Router,
    private notificationSrv: NotificationService,

    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {
    this.titleService.setTitle('Sign In | Grocery Mart');

    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    const data = this.loginForm.value;
    this.authJWTSrv
      .login(data)
      .pipe(mergeMap(() => this.accountService.identity(true)))
      .subscribe(
        () => {
          this.isSpinning = true;
          setTimeout(() => {
            this.isSpinning = false;
            this.router.navigate(['/homepage']);
            this.notificationSrv.createNotification(
              'success',
              'Đăng nhập thành công',
              ''
            );
          }, 1000);
        },
        () => {
          this.isSpinning = true;
          setTimeout(() => {
            this.isSpinning = false;
            this.loginForm.reset();
            this.notificationSrv.createNotification(
              'error',
              'Đăng nhập thất bại!',
              'Tài khoản hoặc mật khẩu không chính xác.'
            );
          }, 1000);
        }
      );
  }
}
