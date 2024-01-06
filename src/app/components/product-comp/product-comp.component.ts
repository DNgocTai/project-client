import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrl: './product-comp.component.scss',
})
export class ProductCompComponent {
  @Input() product: any;
}
