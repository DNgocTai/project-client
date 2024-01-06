import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../../../components/components.module';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-nescafe',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './nescafe.component.html',
  styleUrl: './nescafe.component.scss',
})
export class NescafeComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res.data.filter(
        (prd: any) => prd.categoryName === 'Nescafe'
      );
    });
  }
}
