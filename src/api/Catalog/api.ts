import apiResolver from "../apiResolver";
import customAxios from "../customAxios";

const axios = customAxios({ baseURL: `${process.env.NEXT_PUBLIC_HOST_API_KONG}/api/v1` });

export const getCatalog = (limit: number, categoryId: number) => {
  return apiResolver(() => axios.get(`/products?limit=${limit}&category_id=${categoryId}`));
};
