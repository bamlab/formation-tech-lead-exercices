/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Product} from './interface';
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
  const {data, loading} = useQuery(() => getProducts(1));

  return (
    <View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          ListHeaderComponent={<Header />}
          data={(data as any).products}
          renderItem={info => <ProductItem product={info.item} />}
        />
      )}
    </View>
  );
};
