import { createURLParams } from "@/utils/stringUtils";
import apiResolver from "../apiResolver";
import customAxios from "../customAxios";

const axios = customAxios({ baseURL: `${process.env.NEXT_PUBLIC_HOST_API}/api/v1` });

export const getBlocks = async (identifier: string, isBanner?: boolean) => {
  const urlParams = createURLParams({ identifier, is_homebanner: isBanner ? "1" : "0" });

  return apiResolver(() => axios.get(`/blocks/${urlParams}`));
};
