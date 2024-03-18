import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AccountService } from '../../services/account.service';
import { IUser } from '../../interface/user';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzTableModule,
    NzPaginationModule,
    FormsModule,
    NzDividerModule,
    NzIconModule,
    ComponentsModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzPageHeaderModule,
    ReactiveFormsModule,
    NzModalModule,
    NzUploadModule,
    NzFormModule,
    NzInputModule,
    NzDropDownModule,
    NzSkeletonModule,
    NzSelectModule,
  ],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.scss',
})
export class DashboardUserComponent implements OnInit {
  users: any[] = [];
  isVisible: boolean = false;
  isConfirmLoading = false;

  data: any = {
    username: '',
    password: '',
    fullName: '',
    role: '',
  };

  userForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    fullName: [''],
    role: [''],
  });

  constructor(
    private readonly accountSrv: AccountService,
    private readonly message: NzMessageService,
    private readonly fb: FormBuilder,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Người dùng | Grocery Coffee');
    this.loadUsers();
  }

  createUser(user: IUser) {
    this.accountSrv.createUser(user).subscribe(() => {
      this.users = [...this.users];
      this.message.success('Tạo mới người dùng thành công');
      this.loadUsers();
    });
  }

  loadUsers() {
    this.accountSrv.getUsers().subscribe((res: any) => {
      this.users = res.data;
    });
  }

  // Modal
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.submitForm();
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.userForm.reset();
  }

  submitForm(): void {
    this.data.username = this.userForm.value.username;
    this.data.password = this.userForm.value.password;
    this.data.fullName = this.userForm.value.fullName;
    this.data.role = this.userForm.value.role;
    this.createUser(this.data);
    this.userForm.reset();
  }
}
