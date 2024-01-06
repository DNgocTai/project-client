import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-block',
  templateUrl: './checkout-block.component.html',
  styleUrl: './checkout-block.component.scss',
})
export class CheckoutBlockComponent {
  @Input() nextPageUrl: string = '';
}
