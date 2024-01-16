import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PaymentService } from '../../../services/payment.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../interface/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../../../services/account.service';
import { AuthJWTService } from '../../../services/auth-jwt.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-new-card',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-new-card.component.html',
  styleUrl: './add-new-card.component.scss',
})
export class AddNewCardComponent implements OnInit {
  userLoggedIn: IUser | undefined;
  token: string = '';

  addNewCardForm: FormGroup = this.fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    cardNumber: [null, [Validators.required]],
    expiryDate: [null, [Validators.required]],
    cvv: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private paymentSrv: PaymentService,
    private router: Router,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
    private accountSrv: AccountService,
    private authSrv: AuthJWTService,
    private titleSrv: Title
  ) {
    this.titleSrv.setTitle('Tạo thẻ mới | Grocery Coffee');
  }

  ngOnInit(): void {
    this.token =
      this.$localStorage.retrieve('authToken') ??
      this.$sessionStorage.retrieve('authToken');

    if (this.token) {
      this.accountSrv.fetch().subscribe((res: any) => {
        this.userLoggedIn = res.data;
      });
    }
  }

  addNewCard() {
    const formValue = this.addNewCardForm.value;
    this.paymentSrv.createPayment(formValue, this.token).subscribe(() => {
      this.addNewCardForm.reset();
      this.authSrv.logout().subscribe();
      this.router.navigate(['/personal-info/my-wallet']);
    });
  }
}
