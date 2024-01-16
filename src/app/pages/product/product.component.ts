import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ComponentsModule } from '../../components/components.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
  imports: [ComponentsModule, RouterModule],
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private readonly productService: ProductsService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Chi tiết sản phẩm | Grocery Coffee');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productService.getProduct(params['id']).subscribe((res: any) => {
        this.product = res.data;
      });
    });
  }
}
