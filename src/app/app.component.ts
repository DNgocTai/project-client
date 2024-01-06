import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TopBarSecondComponent } from './components/top-bar-second/top-bar-second.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { NgxWebstorageModule } from 'ngx-webstorage';

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
    TopBarSecondComponent,
    RouterLink,
    PagesModule,
    RouterModule,
  ],
})
export class AppComponent {
  title = 'grocery-coffee';
}
