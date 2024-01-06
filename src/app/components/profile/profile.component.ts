import { Component, Input } from '@angular/core';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() user: IUser | undefined;
}
