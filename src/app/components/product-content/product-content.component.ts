import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.scss',
})
export class ProductContentComponent {
  @Input() prod: any = '';
}
