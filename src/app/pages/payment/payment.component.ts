import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
  imports: [ComponentsModule],
})
export class PaymentComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Payment | Grocery Mart');
  }
}
