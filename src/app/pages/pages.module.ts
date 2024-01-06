import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PageRoutingModule } from './pages.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    ComponentsModule,
    RouterModule,
    NzTabsModule,
    PageRoutingModule,
  ],
})
export class PagesModule {}
