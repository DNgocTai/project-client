import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  @Input() prd: any;
  token: string = '';

  constructor(
    private cartSrv: CartService,
    private prodSrv: ProductsService,
    private message: NzMessageService,
    private commonLayout: CommonLayoutComponent,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.localStorage.retrieve('authToken');
    console.log(this.token === null);
  }

  addToCart(id: string) {
    this.prodSrv.getProduct(id).subscribe((res: any) => {
      const data = {
        ...res.data,
        quantity: 1,
      };
      data.totalAmount = data.price * data.quantity;
      this.cartSrv.addToCart(data);
      this.message.success(`Đã thêm ${data?.name} vào giỏ hàng`);
      this.commonLayout.subTotal = this.cartSrv.getTotalPrice();
    });
  }
}
