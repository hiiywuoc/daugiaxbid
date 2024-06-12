import { User } from "./Users"

export interface BidForm {
    product: string,
    bids: string[],
    user: string,
    price: number,
    bidPriceMax:number
}
export type Bid = BidForm & {
    _id: string
    user: User,
    createdAt:Date,
    isWinBid: Boolean
} 