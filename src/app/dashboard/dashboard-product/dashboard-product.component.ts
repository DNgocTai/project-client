import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interface/product';
import { RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CategoriesService } from '../../services/categories.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzTableModule,
    NzPaginationModule,
    FormsModule,
    NzDividerModule,
    NzIconModule,
    ComponentsModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzPageHeaderModule,
    ReactiveFormsModule,
    NzModalModule,
    NzUploadModule,
    NzFormModule,
    NzInputModule,
    NzDropDownModule,
    NzSkeletonModule,
    NzSelectModule,
  ],
  templateUrl: './dashboard-product.component.html',
  styleUrl: './dashboard-product.component.scss',
})
export class DashboardProductComponent implements OnInit {
  products: any[] = [];
  productCat: any[] = [];
  fileUrl: string = '';
  editId: string = '';
  isEdit: boolean = false;
  isVisible: boolean = false;
  isConfirmLoading = false;
  visibleSearch = false;

  data: any = {
    name: '',
    price: '',
    star: '',
    categoryName: '',
  };

  productForm: FormGroup;

  constructor(
    private readonly productSrv: ProductsService,
    private readonly message: NzMessageService,
    private fb: FormBuilder,
    private categorySrv: CategoriesService,
    private readonly title: Title
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [''],
      star: [''],
      categoryName: [''],
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Sản phẩm | Grocery Coffee');
    this.loadProducts();
    this.categorySrv.getCategories().subscribe((res: any) => {
      this.productCat = res.data.filter((prodCat: any) => {
        return prodCat.status === true;
      });
    });
  }

  createProduct(prod: IProduct) {
    this.productSrv.createProduct(prod).subscribe(() => {
      this.products = [...this.products];
      this.message.success('Tạo mới sản phẩm thành công');
      this.loadProducts();
    });
  }

  updateProduct(product: IProduct, id: string) {
    this.productSrv.updateProduct(id, product).subscribe(() => {
      this.products = this.products.map((prod) => {
        if (prod._id === id) {
          return { ...prod, ...product };
        }
        return prod;
      });
    });
  }

  delete(id: string) {
    this.productSrv.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((cat) => cat.id !== id);
      this.message.success('Xoá sản phẩm thành công');
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  toggleActive(data: any) {
    data.status = !data.status;
    this.updateProduct(data, data._id);
  }

  // Modal
  showModal(): void {
    this.isVisible = true;
  }

  patchValue(data: any) {
    this.isEdit = true;
    this.editId = data._id;
    this.productForm.patchValue({
      name: data.name,
      price: data.price,
      star: data.star,
      categoryName: data.categoryName,
    });
    this.showModal();
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.submitForm();
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    if (this.isEdit) {
      this.isEdit = false;
    }
    this.productForm.reset();
  }

  submitForm(): void {
    this.data.name = this.productForm.value.name;
    this.data.price = this.productForm.value.price.toString();
    this.data.star = this.productForm.value.star.toString();
    this.data.categoryName = this.productForm.value.categoryName;

    if (this.isEdit) {
      this.updateProduct(this.data, this.editId);
      this.message.success('Cập nhật sản phẩm thành công');
    } else {
      this.createProduct(this.data);
    }
    this.productForm.reset();
    this.isEdit = false;
  }
}
