import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState<any[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
