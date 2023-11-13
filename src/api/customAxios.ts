/* eslint-disable no-param-reassign */
import { CUSTOMER_KEY, DEVICE_ID, SOURCE } from "@/helpers/constants";
import { APIResponse } from "@/types/commonTypes";
import { replaceAll } from "@/utils/stringUtils";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";

type ConfigOptions = {
  isAuth?: boolean;
  includeXSource?: boolean;
  includeSource?: boolean;
  includeDeviceInfo?: boolean;
  includePlatform?: boolean;
  includeSmsSource?: boolean;
};

type AxiosConfigParams = {
  baseURL: string;
  config?: ConfigOptions;
};

type HeaderProperties = { [key: string]: string };

export const createErrorResponse = (err: any) => {
  const message =
    err?.error ||
    err?.response?.data?.error_message ||
    err?.response?.data.message ||
    err?.message ||
    "Error Exception API";

  const checkoutMessage = err?.response?.data?.errors_checkout || [];

  return {
    data: err?.response?.data?.data || null,
    error_message: message,
    errors_checkout: checkoutMessage,
    status: err?.response?.data?.status || err?.response?.status || 500,
    errorCode: err?.response?.data?.errorCode || "",
  };
};

const requestHandler = async (request: AxiosRequestConfig, config?: ConfigOptions) => {
  if (request.headers === undefined) {
    request.headers = {};
  }

  if (config?.isAuth) {
    const token = localStorage.getItem(CUSTOMER_KEY);
    if (token) {
      request.headers.Authorization = `Bearer ${replaceAll(token, '"', "")}`;
    }
  }

  if (config?.includeDeviceInfo) {
    let deviceId = localStorage.getItem(DEVICE_ID);
    if (!deviceId) deviceId = uuidv4();

    request.headers["device-id"] = `${replaceAll(deviceId, '"', "")}`;
  }

  if (config?.includePlatform) {
    request.headers.Platform = "web";
  }

  return request;
};

const responseHandler = (response: AxiosResponse<APIResponse<null>>) => {
  const stockUnavailableMessage =
    "Beberapa pesanan Anda mungkin berubah. Hal ini terjadi karena penyesuaian stok.";

  const arrErrorCheckout =
    (Array.isArray(response.data.errors_checkout) && response.data.errors_checkout) || [];

  let errorCheckoutMessage = "";
  if (arrErrorCheckout.length) {
    errorCheckoutMessage =
      arrErrorCheckout.length === 1 ? arrErrorCheckout[0].message : stockUnavailableMessage;
  }

  const errorMessage =
    response.data?.error_message ||
    response.data?.message ||
    errorCheckoutMessage ||
    "Error Exception API";

  if (
    (Object.keys(response.data).includes("status") &&
      `${response.data.status.toString()}`.startsWith("2") === false) ||
    `${response.status.toString()}`.startsWith("2") === false
  ) {
    // eslint-disable-next-line no-throw-literal
    throw {
      error: errorMessage,
      response,
    };
  }

  if (!Object.keys(response.data).includes("status")) {
    return { ...response, data: { ...response.data, status: response.status } };
  }

  return response;
};

const errorHandler = (error: AxiosError) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
};

const getCustomAxios = ({ baseURL, config }: AxiosConfigParams) => {
  const headers = {
    "Content-type": "application/json",
  } as HeaderProperties;

  if (config?.includeSource) {
    headers.Source = SOURCE || "";
  }
  if (config?.includeXSource) {
    headers["x-source"] = SOURCE || "";
  }
  if (config?.includeSmsSource) {
    headers["Sms-Client"] = "eraspace";
  }

  const customAxios = axios.create({
    baseURL,
    headers,
  });

  customAxios.interceptors.response.use(responseHandler, errorHandler);

  customAxios.interceptors.request.use(request => requestHandler(request, config), errorHandler);

  return customAxios;
};

export function getCustomAxiosList(baseURLs: string[], config?: ConfigOptions) {
  return baseURLs.map(url => getCustomAxios({ baseURL: url, config }));
}

export default getCustomAxios;
