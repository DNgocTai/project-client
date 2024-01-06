import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input() catName: string = 'cat';
  @Input() prdName: string = 'cat';

  constructor(private readonly router: Router) {}

  backToHome() {
    this.router.navigate(['/homepage']);
  }
}
