import { getSuggestion } from "./api";
import { GetSuggestionParams, GetSuggestionResponse } from "./types";
import { ErrorMessage } from "@/types/commonTypes";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

type QueryOptions = UseQueryOptions<GetSuggestionParams, ErrorMessage>;

interface UseSuggestionParams {
  query: string;
  options?: QueryOptions;
}

export const useSuggestion = ({ query }: UseSuggestionParams) => {
  return useQuery<GetSuggestionResponse, ErrorMessage>(
    ["suggestion-search", query],
    () => getSuggestion(query),
    { enabled: query.length > 0, staleTime: 1000 * 60 * 5 }
  );
};
