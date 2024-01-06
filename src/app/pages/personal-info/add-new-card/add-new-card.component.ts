import { Component } from '@angular/core';
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

@Component({
  selector: 'app-add-new-card',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-new-card.component.html',
  styleUrl: './add-new-card.component.scss',
})
export class AddNewCardComponent {
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
    private accountSrv: AccountService
  ) {}

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
      this.router.navigate(['/personal-info/my-wallet']);
    });
  }
}
