export const PATHS = {
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  reset_password: "/reset-password",
  home: "/",
  pdp: "/product",
  plp: "/category",
  search: "/search",
  cart: "/cart",
  checkout: "/checkout/shipping",
  profile: "/profile",
  profile_edit: "/profile/edit",
  order: "/profile/order",
  favorit: "/profile/favorit",
  address: "/profile/address-book",
  newsletter: "/profile/newsletter",
  payment_success: "/checkout/success",
  payment_failure: "/checkout/failed",
  track_order: "/track-order",
  lokasi_toko: "/page/lokasi-toko",
  tentang_kami: "/page/tentang-kami",
  hubungi_kami: "/page/hubungi-kami",
  faq_registrasi: "/page/faq-registrasi",
  faq_belanja: "/page/faq-belanja",
  faq_pembayaran: "/page/faq-pembayaran",
  faq_pengiriman: "/page/faq-pengiriman",
  faq_pengembalian_dana: "/page/faq-pengembalian-dana",
  privasi: "/page/privasi",
};

export const ROUTE_GUARD = [
  PATHS.profile,
  PATHS.cart,
  PATHS.checkout,
  PATHS.profile,
  PATHS.profile_edit,
  PATHS.order,
  PATHS.favorit,
  PATHS.address,
  PATHS.newsletter,
  PATHS.payment_success,
  PATHS.payment_failure,
];

type Routes = keyof typeof PATHS;
type QueryParams = {
  [key: string]: string;
};

export const route = (route: Routes, subPath = "", query?: QueryParams) => {
  const queryParams = query ? `?${new URLSearchParams(query).toString()}` : "";

  return `${PATHS[route]}${subPath}${queryParams}`;
};
