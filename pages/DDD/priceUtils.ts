import {Discount, Product} from './interface';

export type PriceInCents = number & {_brand: 'PriceInCents'};

export const computeProductsTotalPrice = (
  products: Product[],
): PriceInCents => {
  return products.reduce(
    (total, product) => total + product.price,
    0,
  ) as PriceInCents;
};

export const applyDiscountToPrice = (
  discounts: Discount[],
  priceWithoutDiscounts: PriceInCents,
): PriceInCents => {
  const price = discounts.reduce<number>((total, discount) => {
    return (total * (100 - discount.value)) / 100;
  }, priceWithoutDiscounts);
  return Math.floor(price) as PriceInCents;
};

export const formatPriceInCents = (price: PriceInCents): string =>
  `${price / 100}`;
