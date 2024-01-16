import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentsModule } from '../../../../components/components.module';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-vinacafe',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './vinacafe.component.html',
  styleUrl: './vinacafe.component.scss',
})
export class VinacafeComponent {
  products: any[] = [];
  categoryName: string = 'Vinacafe';

  constructor(private productsSrv: ProductsService) {}

  ngOnInit() {
    this.productsSrv.getProducts().subscribe((res: any) => {
      this.products = res.data.filter(
        (prd: any) => prd.categoryName === 'Vinacafe' && prd.status === true
      );
    });
  }
}
