import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../services/categories.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ICategory } from '../../interface/category';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dashboard-category',
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
  ],
  templateUrl: './dashboard-category.component.html',
  styleUrl: './dashboard-category.component.scss',
})
export class DashboardCategoryComponent implements OnInit {
  categories: any[] = [];
  fileUrl: string = '';
  editId: string = '';
  searchValue = '';
  isEdit: boolean = false;
  isVisible: boolean = false;
  isConfirmLoading = false;
  visibleSearch = false;

  data: any = {
    name: '',
    title: '',
    // avatarUrl: '',
  };

  categoryForm: FormGroup;

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly message: NzMessageService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      catName: ['', Validators.required],
      title: [''],
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.reset();
  }

  createCategory(category: ICategory) {
    this.categoriesService.createCategory(category).subscribe(() => {
      this.categories = [...this.categories];
      this.message.success(
        'Tạo mới thành công. Đã thêm danh mục này vào danh sách'
      );
      this.loadCategories();
    });
  }

  updateCategory(category: ICategory, id: string) {
    this.categoriesService.updateCategory(id, category).subscribe(() => {
      this.categories = this.categories.map((cat) => {
        if (cat._id === id) {
          return { ...cat, ...category };
        }
        return cat;
      });
    });
  }

  delete(id: string) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.categories = this.categories.filter((cat) => cat.id !== id);
      this.message.success('Xóa thành công');
      this.loadCategories();
    });
  }

  loadCategories() {
    this.categoriesService.getCategories().subscribe((res: any) => {
      this.categories = res.data;
    });
  }

  toggleActive(data: any) {
    console.log(data);
    data.status = !data.status;
    console.log(data);
    this.updateCategory(data, data._id);
  }

  // Modal
  showModal(): void {
    this.isVisible = true;
  }

  patchValue(data: any) {
    this.isEdit = true;
    this.editId = data._id;
    this.categoryForm.patchValue({ catName: data.name });
    this.categoryForm.patchValue({ title: data.title });
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
    this.categoryForm.reset();
  }

  submitForm(): void {
    this.data.name = this.categoryForm.value.catName;
    this.data.title = this.categoryForm.value.title;
    // this.data.avatarUrl = this.categoryForm.value.fileName;
    if (this.isEdit) {
      this.updateCategory(this.data, this.editId);
      this.message.success('Cập nhật thành công');
    } else {
      this.createCategory(this.data);
    }
    this.categoryForm.reset();
    this.isEdit = false;
  }

  OnChange(e: NzUploadChangeParam) {
    console.log(e.file);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  categoriesFilter = [...this.categories];

  search(): void {
    this.visibleSearch = false;
    this.categoriesFilter = this.categories.filter(
      (item: any) =>
        item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
    );
  }
}
