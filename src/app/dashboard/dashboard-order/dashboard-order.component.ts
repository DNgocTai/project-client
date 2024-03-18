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
import { OrderService } from '../../services/order.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-order',
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
  templateUrl: './dashboard-order.component.html',
  styleUrl: './dashboard-order.component.scss',
})
export class DashboardOrderComponent implements OnInit {
  orders: any[] = [];
  isVisible: boolean = false;
  isConfirmLoading = false;

  constructor(
    private readonly accountSrv: AccountService,
    private readonly orderSrv: OrderService,
    private readonly message: NzMessageService,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Đơn hàng | Grocery Coffee');
    this.loadOrders();
  }

  delete(id: string) {
    this.orderSrv.deleteOrder(id).subscribe(() => {
      this.orders = this.orders.filter((cat) => cat.id !== id);
      this.message.success('Xóa đơn hàng thành công');
      this.loadOrders();
    });
  }

  loadOrders() {
    this.orderSrv.getOrders().subscribe((res: any) => {
      this.orders = res.data;
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
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
