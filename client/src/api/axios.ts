import axios from "axios";

import { envConfig } from "@/config";

const instance = axios.create({
  baseURL: envConfig.NEXT_PUBLIC_API_ENDPOINT,
});

instance.interceptors.request.use((config) => {
  const token = document.cookie.split("=")[1];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
