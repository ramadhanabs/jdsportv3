import { ErrorMessage } from "@/types/commonTypes";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getBlocks } from "./api";
import { GetBlocksResponse } from "./types";

export type UseBlocksQueryOptions = UseQueryOptions<GetBlocksResponse, ErrorMessage>;
export const useBlocks = (
  identifier: string,
  isBanner?: boolean,
  options?: UseBlocksQueryOptions
) => {
  return useQuery<GetBlocksResponse, ErrorMessage>(
    ["products", "blocks", { identifier, isBanner }],
    () => getBlocks(identifier, isBanner),
    {
      ...options,
      enabled: !!identifier && (options?.enabled ?? true),
    }
  );
};
