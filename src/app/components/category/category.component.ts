import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() categoryName: string = '';
  @Input() title: string = '';
  @Input() path: string = '';
  @Input() avatarUrl: string = '';
  @Input() isActive: boolean = false;
}
