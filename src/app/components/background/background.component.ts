import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {
  @Input() backgroundLink: string = '../../../assets/images/bg/background.png';
}
