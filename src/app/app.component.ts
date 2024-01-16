import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { httpInterceptorProviders } from './interceptors';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NzTabsModule,
    ComponentsModule,
    RouterLink,
    PagesModule,
    RouterModule,
  ],
  providers: [...httpInterceptorProviders],
})
export class AppComponent {
  title = 'grocery-coffee';
}
