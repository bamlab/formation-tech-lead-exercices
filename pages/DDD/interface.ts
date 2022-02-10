import {PriceInCents} from './priceUtils';

export interface Product {
  id: number;
  price: PriceInCents;
  name: string;
}

export interface Discount {
  id: number;
  value: number;
  type: string;
}
