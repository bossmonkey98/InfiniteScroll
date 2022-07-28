import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useFetch = (page) => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
      const res = await axios.get(url);
      setData((prev) => [...prev, ...res.data]);
      setLoading(() => false);
    } catch (err) {
      console.log(err);
    }
  }, [page]);
  useEffect(() => {
    getData();
  }, [getData]);
  return { loading, Data };
};
