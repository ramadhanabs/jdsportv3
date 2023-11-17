import { useMutation } from "@tanstack/react-query";
import { postLoginCustomer } from "./api";
import { PostLoginCustomerParams } from "./types";

export const useLogin = () => {
    return useMutation((params: PostLoginCustomerParams) => postLoginCustomer(params))
}