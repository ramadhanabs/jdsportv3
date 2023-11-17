import { BASIC_TOKEN } from "@/helpers/constants";
import apiResolver from "../apiResolver";
import getCustomAxios from "../customAxios";
import { PostCustomerLoginResponse, PostLoginCustomerParams } from "./types";

const axiosCustomer = getCustomAxios({
  baseURL: `${process.env.NEXT_PUBLIC_CUSTOMERDB_HOST_API_KONG}/v2.1`,
  config: {
    isAuth: true,
    includeDeviceInfo: true,
    includeSource: true,
  },
});

const axiosV2 = getCustomAxios({
  baseURL: `${process.env.NEXT_PUBLIC_CUSTOMERDB_HOST_API}/v2`,
  config: {
    isAuth: true,
    includeDeviceInfo: true,
    includeSource: true,
  },
});

/* Get API */
export const getCustomerProfile = async () => {
  return apiResolver(() => axiosCustomer.get("/profile"));
};

/* Post API */
export const postLoginCustomer = async (
  param: PostLoginCustomerParams
): Promise<PostCustomerLoginResponse> => {
  return apiResolver(
    () =>
      axiosV2.post("/auth/login", param, {
        headers: {
          Authorization: `Basic ${BASIC_TOKEN}`,
        },
      }),
    { throwErrorObject: true }
  );
};
