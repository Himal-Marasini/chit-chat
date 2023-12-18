import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";

interface Config {
  api: string;
  method: Method;
  payload?: Object;
}

const useFetch = ({ api, method, payload }: Config) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchData() {
    setLoading(true);

    try {
      let response: AxiosRequestConfig;

      if (method === "GET") {
        response = await axios.get(api);
      } else if (method === "POST") {
        if (!payload) {
          throw new Error(`Payload is required for ${method} requests`);
        }
        response = await axios.post(api, payload);
      } else if (method === "PATCH") {
        if (!payload) {
          throw new Error(`Payload is required for ${method} requests`);
        }
        response = await axios.patch(api, payload);
      } else if (method === "PUT") {
        if (!payload) {
          throw new Error(`Payload is required for ${method} requests`);
        }
        response = await axios.put(api, payload);
      } else {
        throw new Error("Invalid HTTP method");
      }

      setData(response.data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [api, method, payload]);
  // };
  return { data, loading, error };
};

export default useFetch;
