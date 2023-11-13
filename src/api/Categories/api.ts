import apiResolver from "../apiResolver";
import customAxios from "../customAxios";

const axios = customAxios({ baseURL: `${process.env.NEXT_PUBLIC_HOST_API}/api/v1` });

export const getCategories = async () => {
  return apiResolver(() => axios.get(`/categories/`));
};
