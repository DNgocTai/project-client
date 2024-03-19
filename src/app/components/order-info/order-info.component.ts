import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.scss',
})
export class OrderInfoComponent {
  @Input() phone: string = '';
  @Input() name: string = '';
  @Input() products: any = [];
  @Input() prdId: string = '';
  @Input() adr: string = '';
  @Input() createdAt: string = '';
  @Input() qty: string = '';
  @Input() total: string = '';

  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
