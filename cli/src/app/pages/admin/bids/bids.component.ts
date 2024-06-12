import { Component, inject } from '@angular/core';
import { Iproduct } from '../../../interface/Iproduct';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BidService } from '../../../service/bid.service';
import { ProductService } from '../../../service/Product.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-bids',
  standalone: true,
  imports: [NgxPaginationModule, RouterLink, NgIf, CommonModule],
  templateUrl: './bids.component.html',
  styleUrl: './bids.component.css'
})
export class BidsComponent {
  product!: Iproduct;
  p: number = 1
  route = inject(ActivatedRoute)
  productsService = inject(ProductService)
  bidService = inject(BidService)
  products: Iproduct[] = [];
  productId!: string
  getPhongdaugia(id: string) {
    this.productsService.getProductDetail(id).subscribe({
      next: (data) => {
        this.product = data
      }, error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productId = param['id']
      this.getPhongdaugia(this.productId)
    })
  }
  handleSetBidWin(id: string) {
    this.bidService.updateBid(id, true).subscribe({
      next:(data)=>{},
      error:(err)=>{
        console.log(err);      
      }
    })
  }
}
