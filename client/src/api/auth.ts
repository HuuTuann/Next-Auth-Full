import axios from "@/api/axios";

const login = async (email: string, password: string) => {
  return axios.post("/auth/login", { email, password });
};

const register = async (email: string, password: string, name: string) => {
  return axios.post("/auth/register", { email, password, name });
};

const getUser = async () => {
  return axios.get("/users");
};

export { login, register, getUser };
