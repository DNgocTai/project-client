import { Component, Input } from '@angular/core';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
})
export class AccountInfoComponent {
  @Input() user: IUser | undefined;
}
