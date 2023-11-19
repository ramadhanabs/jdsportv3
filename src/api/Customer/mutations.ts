import { APIResponse } from "@/types/commonTypes";
import { useMutation } from "@tanstack/react-query";
import { postLoginCustomer } from "./api";
import { PostCustomerLoginResponse, PostLoginCustomerParams } from "./types";

export const useLogin = () => {
  return useMutation<PostCustomerLoginResponse, APIResponse<null>, PostLoginCustomerParams>(
    (params: PostLoginCustomerParams) => postLoginCustomer(params)
  );
};
