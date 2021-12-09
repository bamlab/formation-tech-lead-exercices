const createBaseBasket = () => ({
  products: [
    {
      id: 1,
      name: 'Post its bleus',
      price: 12.39,
    },
    {
      id: 2,
      name: 'Post its rouges',
      price: 17.47,
    },
  ],
  discounts: [
    {
      id: 1,
      type: 'percent',
      value: 10,
    },
  ],
});

export const getProducts = async basketId => {
  if (basketId === undefined) throw new Error('no basket id');
  // fake timeout
  await new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });

  const basket = createBaseBasket();

  // basket with discounts on product
  if (basketId === 2) {
    return {
      ...basket,
      discounts: [
        {
          id: 2,
          type: 'percent',
          value: 20,
          productId: 1,
        },
      ],
    };
  }

  // basket with a lot of products
  if (basketId === 3) {
    return {
      ...basket,
      products: Array.from(Array(200)).map((_, index) => ({
        id: index,
        name: `album des Beatles #${index}`,
        price: Math.round(Math.random() * 1000),
      })),
    };
  }

  return basket;
};
