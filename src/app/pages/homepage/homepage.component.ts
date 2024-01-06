import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { Router, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone: true,
  imports: [ComponentsModule, CommonModule, RouterModule],
})
export class HomepageComponent {
  categories: any[] = [];
  tabActive: number = 0;

  constructor(
    private categoriesService: CategoriesService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((res: any) => {
      this.categories = res.data.filter((c: any) => c.status === true);
    });
  }

  navigateToProduct(id: string) {
    this.router.navigate(['/products', id]);
  }

  handleTabAndNavigateProducts(idx: number, path: string) {
    this.tabActive = idx;
    this.router.navigate(['homepage/' + path.toLowerCase()]);
  }
}
