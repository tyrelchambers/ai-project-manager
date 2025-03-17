import { useMemo } from "react";
import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "@/constants";

export function useApiClient(): AxiosInstance {
  const apiClient = useMemo(() => {
    const client = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    client.interceptors.request.use(async (config) => {
      const token = window.localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.withCredentials = true;
      return config;
    });

    return client;
  }, []);

  return apiClient;
}
