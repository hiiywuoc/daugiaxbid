import { DatePipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Iproduct } from '../../../interface/Iproduct';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/Product.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BidService } from '../../../service/bid.service';

@Component({
  selector: 'app-phongdaugia',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, DatePipe, CountdownComponent],
  templateUrl: './phongdaugia.component.html',
  styleUrl: './phongdaugia.component.css'
})
export class PhongdaugiaComponent {
  product!: Iproduct;
  config: CountdownConfig = { leftTime: 0 }
  bidPriceMax: number = 0
  route = inject(ActivatedRoute)
  productsService = inject(ProductService)
  bidService = inject(BidService)
  productId!: string
  getPhongdaugia(id: string) {
    this.productsService.getProductDetail(id).subscribe({
      next: (data) => {
        this.product = data
        const stepTimeBid = Math.floor((new Date(data.endAt).getTime() - new Date().getTime())) / 1000
        console.log(stepTimeBid);
        this.config = {
          leftTime: stepTimeBid
        };
        // const maxPrice = Math.max(...data.bids.map((bid) => bid.price))
        // console.log(maxPrice);
        // this.bidPriceMax = maxPrice
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
  bidForm: FormGroup = new FormGroup({
    price: new FormControl('', [Validators.min(0)])
  })
  onSubmit() {
    if (!this.product) return
    const userId = localStorage.getItem('userId');
    if (!userId) return
    this.bidService.createBid({
      product: this.product._id,
      bids: this.product.bids.map(bid => bid._id),
      user: userId,
      price: this.bidForm.value.price,
      bidPriceMax: this.product.bidPriceMax
    }).subscribe({
      next: () => {
        this.getPhongdaugia(this.productId)
      }
    })
  }
}
