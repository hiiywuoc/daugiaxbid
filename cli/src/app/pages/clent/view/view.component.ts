import { Component } from '@angular/core';
import { Bienso } from '../../../interface/Bienso';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../service/Product.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [JsonPipe,RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  product!: Bienso;
  constructor(private route: ActivatedRoute, private productsService: ProductService) {
    this.route.paramMap.subscribe((param: any) => {
      const id = String(param.get('id'))
      console.log(id);
      this.productsService.View(id).subscribe(
        (product) => {
          this.product = product
        },
        (err) => console.log(err.message)

      )
    })
  }
}
