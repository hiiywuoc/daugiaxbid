import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { BannerComponent } from '../../../component/banner/banner.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Tab1Component,Tab2Component,Tab3Component,RouterLink,BannerComponent,RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
