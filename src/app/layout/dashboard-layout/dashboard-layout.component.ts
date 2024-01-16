import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { CommonModule } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AuthJWTService } from '../../services/auth-jwt.service';
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
  imports: [
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzDropDownModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    NzAvatarModule,
    NzBadgeModule,
    NzPageHeaderModule,
  ],
})
export class DashboardLayoutComponent {
  constructor(private authSrv: AuthJWTService, private router: Router) {}

  logout() {
    this.authSrv.logout().subscribe();
  }
}
