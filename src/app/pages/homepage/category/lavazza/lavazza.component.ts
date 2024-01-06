import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../../../components/components.module';

@Component({
  selector: 'app-lavazza',
  templateUrl: './lavazza.component.html',
  styleUrl: './lavazza.component.scss',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
})
export class LavazzaComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res.data.filter(
        (prd: any) => prd.categoryName === 'LavAzza'
      );
    });
  }
}
