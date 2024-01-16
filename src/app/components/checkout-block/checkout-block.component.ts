import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { CommonLayoutComponent } from '../../layout/common-layout/common-layout.component';
import { OrderService } from '../../services/order.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-checkout-block',
  templateUrl: './checkout-block.component.html',
  styleUrl: './checkout-block.component.scss',
})
export class CheckoutBlockComponent implements OnInit {
  @Input() nextPageUrl: string = '';
  @Input() subTotalItems = this.cartSrv.getTotalQty();
  @Input() price = this.cartSrv.getTotalPrice();
  @Input() userLoggedIn: any;
  isCheckout = false;

  constructor(
    private cartSrv: CartService,
    private localStorage: LocalStorageService,
    private accountSrv: AccountService,
    private router: Router,
    private notify: NotificationService,
    private commonLayout: CommonLayoutComponent,
    private orderSrv: OrderService
  ) {}

  ngOnInit(): void {
    this.isCheckout = this.nextPageUrl === '';
    const token: string | null = this.localStorage.retrieve('authToken');

    if (token) {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = { ...res.data };
      });
    }
  }
  checkout(): void {
    if (this.isCheckout) {
      this.cartSrv.getLocalStorage();
      const token: string | null = this.localStorage.retrieve('authToken');

      if (token) {
        this.accountSrv.fetch().subscribe((res: any) => {
          this.userLoggedIn = { ...res.data };
          console.log(this.userLoggedIn);
          const orderCart = {
            fullName: this.userLoggedIn.fullName,
            phoneNumber: this.userLoggedIn.phoneNumber,
            products: this.cartSrv.cart,
            address: this.userLoggedIn.addresses[0].address_details,
            totalQty: this.cartSrv.getTotalQty(),
            totalAmount: this.cartSrv.getTotalPrice(),
          };
          this.orderSrv.createOrdered(orderCart).subscribe(() => {
            this.notify.createNotification('success', 'Đặt hàng thành công');
            this.router.navigate(['/homepage']);
            this.cartSrv.clearAllCart();
            this.commonLayout.subTotal = 0;
            this.commonLayout.cart = this.cartSrv.cart;
          });
        });
      }
    }
  }
}
