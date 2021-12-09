import {useEffect, useState} from 'react';

export function useQuery<Data>(query: () => Promise<Data>) {
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
