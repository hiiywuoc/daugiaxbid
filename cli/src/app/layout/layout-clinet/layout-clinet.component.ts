import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { ProductsComponent } from '../../pages/clent/products/products.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-clinet',
  standalone: true,
  imports: [HeaderComponent,ProductsComponent,RouterOutlet],
  templateUrl: './layout-clinet.component.html',
  styleUrl: './layout-clinet.component.css'
})
export class LayoutClinetComponent {

}
