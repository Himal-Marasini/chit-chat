import { useEffect, useState } from "react";

const useFetch = (api: string) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
    } catch (error) {
    } finally {
    }
  }, [api]);
};

export default useFetch;
