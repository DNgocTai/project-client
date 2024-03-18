import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AuthJWTService } from '../../services/auth-jwt.service';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  toggleButton: boolean = false;
  isSpinning: boolean = false;

  signupForm: FormGroup = this.fb.group({
    fullName: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]],
  });

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private authSrv: AuthJWTService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.titleService.setTitle('Đăng ký | Grocery Coffee');
  }

  signUp() {
    const formValue = this.signupForm.value;

    if (
      !this.authSrv.isMatchPassword(
        formValue.password,
        formValue.confirmPassword
      )
    ) {
      this.isSpinning = true;
      setTimeout(() => {
        this.isSpinning = false;
        this.message.error('Đăng ký thất bại! Mật khẩu không khớp.');
      }, 1000);
      return;
    }

    const payload = {
      fullName: formValue.fullName,
      username: formValue.username,
      password: formValue.password,
      phoneNumber: formValue.phoneNumber,
    };

    this.authSrv.signUp(payload).subscribe(() => {
      this.isSpinning = true;
      setTimeout(() => {
        this.isSpinning = false;
        this.router.navigate(['/sign-in']);
        this.message.success('Đăng ký thành công');
      }, 1000);
    });
  }
}
