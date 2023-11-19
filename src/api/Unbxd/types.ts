export interface APIResponse<T> {
  searchMetaData: {
    status: number;
    queryTime: number;
    queryParams: {
      "topQueries.count": string;
      "log.response": string;
      "original.q": string;
      "module.exclude": string;
      "popularProducts.count": string;
      "alternate.op": string;
      "req.rm.asterix": string;
      "q.op": string;
      variants: string;
      version: string;
      enableTaxonomy: string;
      "popularProducts.filter": string;
      q: string;
      "promotion.version": string;
      spellcheck: string;
      "req.rm.promotionEngine": string;
      "keywordSuggestions.count": string;
      "inFields.count": string;
      "user.behaviour": string;
      "promotedSuggestion.count": string;
      enablePopularity: string;
      promotion: string;
    };
  };
  response: {
    numberOfProducts: string;
    start: string;
    products: T;
  };
  didYouMean?: {
    frequency: string;
    suggestion: string;
  }[];
}

export type Doctype =
  | "POPULAR_PRODUCTS"
  | "TOP_SEARCH_QUERIES"
  | "PROMOTED_SUGGESTION"
  | "IN_FIELD"
  | "KEYWORD_SUGGESTION";

export type Products = {
  autosuggest: string;
  doctype: Doctype;
  unbxdAutosuggestScore: number;
  uniqueId: string;
  title: string;
  productUrl: string;
  imageUrl: string[];
  frequency_unbxd_double: number;
  price: number;
  [key: string]: string | number | string[];
};

export type GetSuggestionResponse = APIResponse<Products[]>;

export interface GetSuggestionParams {
  query: string;
}
