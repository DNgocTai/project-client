import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ComponentsModule } from '../../components/components.module';
import { CartService } from '../../services/cart.service';
import { CheckoutCartItemComponent } from '../../components/checkout-cart-item/checkout-cart-item.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../../services/account.service';
import { AddressComponent } from '../../components/address/address.component';
import { AddressService } from '../../services/address.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CheckoutBlockComponent } from '../../components/checkout-block/checkout-block.component';

@Component({
  selector: 'app-shipping',
  standalone: true,
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
  imports: [
    ComponentsModule,
    CheckoutCartItemComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AddressComponent,
  ],
})
export class ShippingComponent implements OnInit {
  userLoggedIn: any;
  subTotal: any = this?.cartSrv?.getTotalPrice();
  subTotalItems: any = this?.cartSrv?.getTotalQty();
  nextPageUrl = '/payment';
  openModalCreate: boolean = false;
  address: any;
  hasAddress: boolean = false;

  addressForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    phoneNumber: [null, Validators.required],
    address_details: [null, Validators.required],
  });

  constructor(
    private titleService: Title,
    private accountSrv: AccountService,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private cartSrv: CartService,
    private fb: FormBuilder,
    private addressSrv: AddressService,
    private mesage: NzMessageService
  ) {
    this.titleService.setTitle('Đặt hàng | Grocery Coffee');
  }

  ngOnInit(): void {
    const token: string | null =
      this.localStorageService.retrieve('authToken') ??
      this.sessionStorageService.retrieve('authToken');
    if (token) {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = { ...res.data };
        this.address = this.userLoggedIn.addresses[0];
        this.hasAddress = this.userLoggedIn.addresses?.length != 0;
      });
    }
  }

  submitFormAddress() {
    const formValue = this.addressForm.value;
    this.addressSrv.creatAddress(formValue).subscribe((res: any) => {
      this.address = res.data;
      this.hasAddress = !this.hasAddress;
      this.mesage.success('Thêm mới địa chỉ thành công');
      this.openModalCreate = !this.openModalCreate;
    });
  }
}
