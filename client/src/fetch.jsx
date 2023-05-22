import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async (url) => {
      const res = await axios.get(url);
      setData(res.data);
    };
    fetchData(url);
  }, [url]);
  return data;
};

export default useFetch;
