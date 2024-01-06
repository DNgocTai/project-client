import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [ComponentsModule],
})
export class CheckoutComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Checkout | Grocery Mart');
  }
}
