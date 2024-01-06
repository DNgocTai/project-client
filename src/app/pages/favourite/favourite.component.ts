import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favourite',
  standalone: true,
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss',
  imports: [ComponentsModule, RouterModule],
})
export class FavouriteComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Favourite');
  }
}
