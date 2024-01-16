import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IUser } from '../../../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../../../services/account.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  userLoggedIn!: IUser;
  personForm: FormGroup = this.fb.group({
    fullName: [null, [Validators.required]],
    username: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
    private accountSrv: AccountService,
    private message: NzMessageService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Thông tin cá nhân | Grocery Coffee');
  }

  ngOnInit(): void {
    const token: string | null =
      this.$localStorage.retrieve('authToken') ??
      this.$sessionStorage.retrieve('authToken');

    if (token) {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = res.data;
        this.loadInfo();
      });
    }
  }

  loadInfo() {
    this.personForm.controls['username'].disable();
    this.personForm.patchValue({
      fullName: this.userLoggedIn?.fullName,
      username: this.userLoggedIn?.username,
      phoneNumber: this.userLoggedIn?.phoneNumber,
      password: this.userLoggedIn?.password,
    });
  }

  submitForm() {
    const formValue = this.personForm.value;
    const data = {
      username: formValue.username,
      fullName: formValue.fullName,
      phoneNumber: formValue.phoneNumber,
    };

    this.accountSrv
      .updateUser(formValue, this.userLoggedIn?._id)
      .subscribe(() => {
        this.message.success('Cập nhật thành công');
        this.router.navigate(['/sign-in']);
      });
  }
}
