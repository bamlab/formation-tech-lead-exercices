import {Discount, Product} from './interface';

export const computeProductsTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.price, 0) / 100;
};

export const applyDiscountToPrice = (
  discounts: Discount[],
  priceWithoutDiscounts: number,
): number => {
  return discounts.reduce((total, discount) => {
    return (total * (100 - discount.value)) / 100;
  }, priceWithoutDiscounts);
};
