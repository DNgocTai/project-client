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
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LocalStorageService } from 'ngx-webstorage';
import { CartService } from '../../services/cart.service';

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
    private message: NzMessageService,
    private localStorage: LocalStorageService,
    private cartSrv: CartService
  ) {
    this.titleService.setTitle('Đăng nhập | Grocery Coffee');

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
          this.cartSrv.cart = [];
          this.cartSrv.setLocalStorage();
          setTimeout(() => {
            this.isSpinning = false;
            this.router.navigate(['/homepage']);
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
