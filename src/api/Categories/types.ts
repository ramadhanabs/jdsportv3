import { APIResponse } from "@/types/commonTypes";

export type GetCategoriesResponse = APIResponse<{
  children_data: RecursiveDataCategories[];
  error_message: string | null;
  status: number;
}>;

export type RecursiveDataCategories = {
  id: number;
  image: string;
  name: string;
  position: number;
  show_onmobile_homepage: boolean;
  icon_onmobile_homepage: string;
  icon_menu: string;
  children_data: Array<RecursiveDataCategories>;
};
