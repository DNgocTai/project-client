import { Component, Input } from '@angular/core';
import { IPayment } from '../../interface/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  @Input() paymentCard: IPayment | undefined;
}
