import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrl: './product-comp.component.scss',
})
export class ProductCompComponent {
  @Input() product: any;

  constructor(
    private cartSrv: CartService,
    private prodSrv: ProductsService,
    private message: NzMessageService,
    private commonLayout: CommonLayoutComponent
  ) {}

  addToCart(id: string) {
    this.prodSrv.getProduct(id).subscribe((res: any) => {
      const data = {
        ...res.data,
        quantity: 1,
      };
      data.totalAmount = data.price * data.quantity;
      this.cartSrv.addToCart(data, id);
      this.message.success(`Đã thêm ${data?.name} vào giỏ hàng`);
      this.commonLayout.subTotal = this.cartSrv.getTotalPrice();
    });
  }
}
