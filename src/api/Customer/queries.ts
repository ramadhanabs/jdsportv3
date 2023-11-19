import { CUSTOMER_KEY, EMAIL, IS_LOGIN } from "@/helpers/constants";
import { useStoreState } from "@/store";
import { ErrorMessage } from "@/types/commonTypes";
import { useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { getCustomerProfile, getErrorMessages } from "./api";
import { GetCustomerProfileResponse, GetErrorMessagesResponse, Language } from "./types";

export const USE_CUSTOMER_PROFILE_KEY = ["customers", "profile"];

export type UseCustomerProfileOptions = UseQueryOptions<GetCustomerProfileResponse, ErrorMessage>;
export const useCustomerProfile = (options?: UseCustomerProfileOptions) => {
  return useQuery<GetCustomerProfileResponse, ErrorMessage>(
    USE_CUSTOMER_PROFILE_KEY,
    () => getCustomerProfile(),
    {
      ...options,
      // handle user token expired
      onError: err => {
        if (err) {
          localStorage.removeItem(EMAIL);
          localStorage.removeItem(IS_LOGIN);
          localStorage.removeItem(CUSTOMER_KEY);
        }
      },
    }
  );
};

export const useRefetchCustomerProfile = () => {
  const queryClient = useQueryClient();

  return () => queryClient.invalidateQueries(USE_CUSTOMER_PROFILE_KEY, { exact: true });
};

export const useErrorMessages = (language: Language) => {
  return useQuery<GetErrorMessagesResponse, ErrorMessage>(
    ["error-messages", language],
    () => getErrorMessages(language),
    { staleTime: Infinity, cacheTime: Infinity }
  );
};
