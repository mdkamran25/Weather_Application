import { useState, useEffect } from "react";
import axios from 'axios';

function useFetch<T>(url:string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<T | null>(null);
  
  
  useEffect(()=>{
    const fetchData = async (url:string) => {
      await axios.get(url)
      .then((res)=>{
        return setData(res.data), setError(null) ;
      })
      .catch((err) => {
        setError(err)
      })
    }

    fetchData(url);    
  }, [url])

  return { data, error }

  };

export default useFetch;