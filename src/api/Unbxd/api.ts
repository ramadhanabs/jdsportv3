import apiResolver from "../apiResolver";
import customAxios from "../customAxios";

const axios = customAxios({
  baseURL: `${process.env.NEXT_PUBLIC_UNBXD_URL}/${process.env.NEXT_PUBLIC_UNBXD_TOKEN}/${process.env.NEXT_PUBLIC_UNBXD_KEY}/`,
});

export const getSuggestion = async (query: string) => {
  return apiResolver(() =>
    axios.get(
      `/autosuggest?q=${query}&version=v2&inFields.count=3&popularProducts.count=3&keywordSuggestions.count=3&topQueries.count=3&promotedSuggestion.count=3&spellcheck=true&variants=false`
    )
  );
};
