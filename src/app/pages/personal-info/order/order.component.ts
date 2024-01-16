import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { OrderService } from '../../../services/order.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, ComponentsModule, NzDescriptionsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  orders: any = [];

  constructor(private orderService: OrderService, private titleSrv: Title) {
    this.titleSrv.setTitle('Đơn hàng | Grocery Coffee');
  }

  ngOnInit(): void {
    this.orderService.getOrdersByUser().subscribe((res: any) => {
      this.orders = [...res.data];
    });
  }
}
