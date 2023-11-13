import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ErrorMessage } from "@/types/commonTypes";
import { getCategories } from "./api";
import { GetCategoriesResponse } from "./types";

type QueryOptions = UseQueryOptions<GetCategoriesResponse, ErrorMessage>;

export const useCategories = (options?: QueryOptions) => {
  return useQuery<GetCategoriesResponse, ErrorMessage>(
    ["products", "categories"],
    () => getCategories(),
    { ...options }
  );
};
