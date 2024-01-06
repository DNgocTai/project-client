import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../../../components/components.module';

@Component({
  selector: 'app-starbucks',
  templateUrl: './starbucks.component.html',
  styleUrl: './starbucks.component.scss',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
})
export class StarbucksComponent implements OnInit {
  products: any[] = [];

  constructor(private productsSrv: ProductsService) {}

  ngOnInit() {
    this.productsSrv.getProducts().subscribe((res: any) => {
      this.products = res.data.filter(
        (prd: any) => prd.categoryName === 'Starbucks'
      );
    });
  }
}
