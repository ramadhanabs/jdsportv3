export interface ErrorCheckoutMessage {
  message: string;
  available: boolean;
  sku: string;
}

export interface APIResponse<T> {
  app_name?: string;
  app_version?: string;
  data: T;
  error_message: string | null;
  status: number;
  message?: string;
  errors_checkout?: ErrorCheckoutMessage[];
}

export interface CategoryResponseType {
  data: CategoryDataType;
  error_message: string | null;
  status: number;
}

export interface ErrorMessage {
  message?: string;
}

export interface CategoryDataType {
  children_data: Array<any>;
  description: string;
  icon_menu: string;
  icon_onmobile_homepage: string;
  id: number;
  image: string;
  include_in_menu: boolean;
  is_active: boolean;
  level: number;
  name: string;
  parent_id: number;
  position: number;
  product_count: number;
  show_onmobile_homepage: boolean;
}
export interface PaginationParams {
  page?: number;
  limit?: number;
  size?: number;
}
export interface BreadcrumbProps {
  label: string;
  href: string;
}

export interface DeviceDetectProps {
  isMobile: boolean;
}
