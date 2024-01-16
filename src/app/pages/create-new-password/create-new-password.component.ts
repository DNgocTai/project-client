import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-create-new-password',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.scss',
})
export class CreateNewPasswordComponent {
  userResetId: string = this.localStorage.retrieve('resetPassword');

  newPassForm: FormGroup = this.fb.group({
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]],
  });

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
    private accountSrv: AccountService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.titleService.setTitle('Tạo mật khẩu mới | Grocery Coffee');
  }

  submitForm() {
    const formValue = this.newPassForm.value;

    if (formValue.password !== formValue.confirmPassword) {
      this.message.error('Mật khẩu không khớp!');
    } else {
      this.accountSrv
        .updateUser({ password: formValue.password }, this.userResetId)
        .subscribe(() => {
          this.message.success('Thay đổi mật khẩu thành công');
          this.localStorage.clear('resetPassword');
          this.router.navigate(['/sign-in']);
        });
    }
    this.newPassForm.reset();
  }
}
