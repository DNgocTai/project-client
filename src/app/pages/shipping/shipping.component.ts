import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-shipping',
  standalone: true,
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
  imports: [ComponentsModule],
})
export class ShippingComponent {
  nextPage: string = '/payment';
  openModalCreate: boolean = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Shipping | Grocery Mart');
  }
}
