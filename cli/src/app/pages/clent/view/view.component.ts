import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../service/Product.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Iproduct } from '../../../interface/Iproduct';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [JsonPipe,RouterLink,NgIf],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  product!: Iproduct;
  constructor(private route: ActivatedRoute, private productsService: ProductService) {
    this.route.paramMap.subscribe((param: any) => {
      const id = String(param.get('id'))
      console.log(id);
      this.productsService.getProductDetail(id).subscribe(
        (product) => {
          this.product = product
        },
        (err) => console.log(err.message)

      )
    })
  }
}
