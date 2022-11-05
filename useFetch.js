import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {

  const [state, setState] = useState({ data: null, isLoading: true, hasError: null });

  const getQuote = async () => {
    setState({ ...state, isLoading:true });

    const response = await fetch(url);
    const data = await response.json();
    
    setState({ data, isLoading: false, hasError: null });
  }

  useEffect(() => {
    getQuote();
  }, [url]);

  return state;
}