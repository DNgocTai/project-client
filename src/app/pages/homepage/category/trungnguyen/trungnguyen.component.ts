import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../../../components/components.module';

@Component({
  selector: 'app-trungnguyen',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './trungnguyen.component.html',
  styleUrl: './trungnguyen.component.scss',
})
export class TrungnguyenComponent {
  products: any[] = [];
  categoryName: string = 'Trung Nguyên Legend';

  constructor(private productsSrv: ProductsService) {}

  ngOnInit() {
    this.productsSrv.getProducts().subscribe((res: any) => {
      this.products = res.data.filter(
        (prd: any) => prd.categoryName === 'Trung Nguyên' && prd.status === true
      );
    });
  }
}
