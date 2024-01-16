import { Component, Input } from '@angular/core';
import { IAddress } from '../../interface/address';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddressService } from '../../services/address.service';
import { AccountService } from '../../services/account.service';
import { ShippingComponent } from '../../pages/shipping/shipping.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class AddressComponent {
  @Input() address: IAddress = {};
  openModalEdit: boolean = false;

  addressForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    phoneNumber: [null, Validators.required],
    address_details: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private addressSrv: AddressService,
    private accountSrv: AccountService,
    private shipping: ShippingComponent,
    private message: NzMessageService,
    private router: Router
  ) {}

  openEdit(id: any) {
    this.openModalEdit = !this.openModalEdit;
    this.addressSrv.getAddress(id).subscribe((res: any) =>
      this.addressForm.patchValue({
        name: res.data.name,
        phoneNumber: res.data.phoneNumber,
        address_details: res.data.address_details,
      })
    );
  }

  submitFormAddress(id: any) {
    const formValue = this.addressForm.value;
    this.addressSrv.updateAddress(id, formValue).subscribe((res: any) => {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.address = res.data.addresses[0];
      });
    });
    this.message.success('Cập nhật địa chỉ thành công');
    this.openModalEdit = !this.openModalEdit;
  }
}
