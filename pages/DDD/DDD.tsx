/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, Alert} from 'react-native';
import {Discount, Product} from './interface';
//@ts-ignore
import {getProducts} from './fakeAPI';

const ProductItem = (props: {product: Product}) => {
  return (
    <View>
      <Text>
        {props.product.name} - {props.product.price}€
      </Text>
    </View>
  );
};

const Header = () => {
  return <Text>Products</Text>;
};

const PaymentButton = (props: {
  data: {products: Product[]; discounts: Discount[]};
}) => {
  const price = props.data.products.reduce(
    (total, product) => total + product.price,
    0,
  );

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
  const {data, loading} = useQuery<any>(() => getProducts(1));

  return (
    <View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          ListHeaderComponent={<Header />}
          data={data.products}
          renderItem={info => <ProductItem product={info.item} />}
          ListFooterComponent={<PaymentButton data={data} />}
        />
      )}
    </View>
  );
};
