import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthJWTService } from '../../services/auth-jwt.service';
import { AccountService } from '../../services/account.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LocalStorageService } from 'ngx-webstorage';
import { mergeMap } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-admin-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzSpinModule,
  ],
  templateUrl: './admin-sign-in.component.html',
  styleUrl: './admin-sign-in.component.scss',
})
export class AdminSignInComponent implements OnInit {
  loginForm: FormGroup;
  isSpinning: boolean = false;

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private authJWTSrv: AuthJWTService,
    private accountService: AccountService,
    private router: Router,
    private message: NzMessageService,
    private localStorage: LocalStorageService
  ) {
    this.titleService.setTitle('Đăng nhập Admin | Grocery Coffee');
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  public ngOnInit() {}

  async onLogin() {
    const data = this.loginForm.value;
    this.authJWTSrv
      .login(data)
      .pipe(mergeMap(() => this.accountService.identity(true)))
      .subscribe(
        () => {
          this.isSpinning = true;
          setTimeout(() => {
            this.isSpinning = false;
            this.router.navigate(['/admin']);
          }, 1000);
        },
        () => {
          this.isSpinning = true;
          setTimeout(() => {
            this.isSpinning = false;
            this.loginForm.reset();
            this.message.error(
              'Đăng nhập thất bại! Tài khoản hoặc mật khẩu không chính xác'
            );
          }, 1000);
        }
      );
  }
}
