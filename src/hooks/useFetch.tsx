import { useState, useEffect } from "react";
import { UseFetchProps } from "../interfaces/interfaces";
import Request from "../models/Request";

const useFetch = ({ url }: UseFetchProps) => {
  const [data, setData] = useState<Request[]>([]);
  const [singleData, setSingleData] = useState<Request>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortConn = new AbortController();

    fetch(url, { signal: abortConn.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error(
            `Status: ${response.status} - Could not fetch data from resource.`
          );
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setSingleData(jsonData);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => abortConn.abort();
  }, [url]);
  return { data, error, isLoading, singleData };
};

export default useFetch;
