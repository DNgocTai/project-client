import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.scss',
})
export class OrderInfoComponent {
  @Input() phone: string = '';
  @Input() adr: string = '';
  @Input() createdAt: string = '';
  @Input() qty: string = '';
  @Input() total: string = '';
}
