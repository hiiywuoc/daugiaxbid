import { Bid } from "./Bids";
import { Category } from "./Category";

export interface Iproduct {
    _id: string,
    id: string,
    title: string,
    price: number,
    description: string,
    category: Category[],
    image: string,
    isShow: boolean,
    startAt:Date,
    endAt:Date,
    bids:Bid[],
    bidPriceMax :number
}
export type ProductForm = {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    isShow: boolean;
  };
  