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
import { NotificationService } from '../../services/notification.service';

import { NzSpinModule } from 'ng-zorro-antd/spin';

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
    fullName: [null],
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]],
  });

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private authSrv: AuthJWTService,
    private notify: NotificationService,
    private router: Router
  ) {
    this.titleService.setTitle('Sign Up | Grocery Mart');
  }

  signUp() {
    const formValue = this.signupForm.value;
    console.log(formValue);

    if (
      !this.authSrv.isMatchPassword(
        formValue.password,
        formValue.confirmPassword
      )
    ) {
      this.isSpinning = true;
      setTimeout(() => {
        this.notify.createNotification(
          'error',
          'Sign Up Failed',
          'Password is not match'
        );
      }, 1000);
      return;
    }

    const payload = {
      fullName: formValue.fullName,
      username: formValue.username,
      password: formValue.password,
    };

    this.authSrv.signUp(payload).subscribe(() => {
      this.isSpinning = true;
      setTimeout(() => {
        this.isSpinning = false;
        this.router.navigate(['/sign-in']);
        this.notify.createNotification('success', 'Đăng ký thành công', '');
      }, 1000);
    });
  }
}
