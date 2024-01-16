import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
  imports: [ComponentsModule, RouterModule],
})
export class PaymentComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Thanh toán | Grocery Coffee');
  }
}
