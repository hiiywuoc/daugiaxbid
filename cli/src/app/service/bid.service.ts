import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BidForm } from '../interface/Bids';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  url = 'http://localhost:3000/bids'
  http = inject(HttpClient)


  createBid(data: BidForm) {
    return this.http.post(this.url, data)
  }
  updateBid(id: string, isWinBid: boolean) {
    return this.http.put(`${this.url}/${id}`, {isWinBid })
  }
}
