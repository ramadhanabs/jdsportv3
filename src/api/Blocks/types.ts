import { APIResponse } from "@/types/commonTypes";

export interface HomeBanner {
  deeplink: string;
  file: string;
  link: string;
}

export type BlockContent = {
  active: boolean;
  content: string | null;
  home_banners: HomeBanner[] | null;
  id: number;
  title: string;
};

export type GetBlocksResponse = APIResponse<{
  items: BlockContent | null;
}>;
