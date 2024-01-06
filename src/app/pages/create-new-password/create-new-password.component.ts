import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-new-password',
  standalone: true,
  imports: [],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.scss',
})
export class CreateNewPasswordComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Create New Password | Grocery Mart');
  }
}
