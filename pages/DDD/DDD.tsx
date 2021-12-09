/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, Alert} from 'react-native';
import {Discount, Product} from './interface';
//@ts-ignore
import {getProducts} from './fakeAPI';
import {applyDiscountToPrice, computeProductsTotalPrice} from './priceUtils';

const ProductItem = (props: {product: Product}) => {
  return (
    <View>
      <Text>
        {props.product.name} - {props.product.price / 100}€
      </Text>
    </View>
  );
};

const Header = (props: {orderById: () => void; orderByPrice: () => void}) => {
  return (
    <View>
      <Text>Products</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="tri par id" onPress={props.orderById} />
        <Button title="tri par prix" onPress={props.orderByPrice} />
      </View>
    </View>
  );
};

const PaymentButton = (props: {
  data: {products: Product[]; discounts?: Discount[]};
}) => {
  const priceWithoutDiscounts = computeProductsTotalPrice(props.data.products);

  const price = props.data.discounts
    ? applyDiscountToPrice(props.data.discounts, priceWithoutDiscounts)
    : priceWithoutDiscounts;

  return (
    <Button
      title={`Payer ${price}€`}
      onPress={() => Alert.alert(`${price}€`)}
    />
  );
};

function useQuery<Data>(query: () => Promise<Data>) {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const d = await query();
    setData(d);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {data, loading};
}

export const DDD = () => {
  let {data, loading} = useQuery<any>(() => getProducts(1));
  const [filterType, setFilterType] = useState('ID');
  const orderById = () => setFilterType('ID');
  const orderByPrice = () => setFilterType('PRICE');

  if (data && filterType === 'PRICE') {
    data.products = data.products.sort(
      (productA: Product, productB: Product) => productB.price - productA.price,
    );
  }

  if (data && filterType === 'ID') {
    data.products = data.products.sort(
      (productA: Product, productB: Product) => productA.id - productB.id,
    );
  }

  return (
    <View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <Header orderById={orderById} orderByPrice={orderByPrice} />
          }
          data={data.products}
          renderItem={info => <ProductItem product={info.item} />}
          ListFooterComponent={<PaymentButton data={data} />}
        />
      )}
    </View>
  );
};
