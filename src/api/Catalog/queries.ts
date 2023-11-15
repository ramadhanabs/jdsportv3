import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getCatalog } from "./api";
import { ErrorMessage } from "@/types/commonTypes";
import { GetProductCatalogsResponse } from "./types";

type QueryOptions = UseQueryOptions<GetProductCatalogsResponse, ErrorMessage>;

interface UseProductCatalogsParams {
  limit: number;
  categoryId: number;
  options?: QueryOptions;
}

export const useProductCatalogs = ({ limit, categoryId, options }: UseProductCatalogsParams) => {
  return useQuery<GetProductCatalogsResponse, ErrorMessage>(
    ["product-catalogs", categoryId],
    () => getCatalog(limit, categoryId),
    {
      ...options,
    }
  );
};
