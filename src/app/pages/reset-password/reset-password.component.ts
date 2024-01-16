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
import { AccountService } from '../../services/account.service';
import { NotificationService } from '../../services/notification.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  isShow: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  resetForm: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
  });

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private accountSrv: AccountService,
    private notify: NotificationService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    this.titleService.setTitle('Đặt lại mật khẩu | Grocery Coffee');
  }

  submitForm() {
    const formValue = this.resetForm.value;
    this.accountSrv.findUserByEmail(formValue).subscribe((res) => {
      if (res.data) {
        this.isShow = true;
        this.isSuccess = true;
        this.resetForm.reset();
        setTimeout(() => {
          this.isShow = false;
          this.isSuccess = false;
          this.localStorage.store('resetPassword', res.data._id);
          this.router.navigate(['/new-password']);
        }, 1000);
      } else {
        this.isShow = true;
        this.isError = true;
        setTimeout(() => {
          this.isShow = false;
          this.isError = false;
        }, 2000);
      }
    });
  }
}
