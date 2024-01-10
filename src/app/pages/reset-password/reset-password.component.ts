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
    this.titleService.setTitle('Reset Password | Grocery Mart');
  }

  submitForm() {
    const formValue = this.resetForm.value;
    this.accountSrv.findUserByEmail(formValue).subscribe((res) => {
      if (res.data) {
        this.localStorage.store('resetPassword', res.data._id);
        this.router.navigate(['/new-password']);
      } else {
        this.notify.createNotification('error', 'Email not found', '');
      }
    });
  }
}
