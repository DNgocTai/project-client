import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() prod: any;
}
