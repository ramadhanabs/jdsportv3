/* eslint-disable no-useless-escape */
export const IMAGE_PLACEHOLDER_PATH = "/illustration/placeholder.svg";

export const DEVICE_ID = "__deviceId";
export const CUSTOMER_KEY = "__customerKey";
export const DOWNLOAD_APP = "__downloadApp";
export const LAST_SEARCH = "__lastSearch";
export const LAST_SEARCH_BANDINGKAN = "__lastSearchBandingkan";
export const THEME = "__theme";
export const GET_MORE_POINT = "__getMorePoint";
export const IDENTIFIER = "__identifier";
export const EMAIL = "__email";
export const IS_AUTH_SUCCESS = "__isAuthSuccess";
export const LOGGED_DATE = "__loggedDate";
export const LOGGED_IDS = "__loggedIds";
export const UNVERIFIED = "__unverified";
export const SOURCE = process.env.NEXT_PUBLIC_SOURCE;
export const STATUS_NOT_REVIEWED = 0;
export const STATUS_REVIEWED = 1;
export const LAST_COMPLETED_ITEM_ID_REVIEW = "__lastCompletedItemIdReview";
export const VIEW_CLEAR = "__viewClear";
export const INITIAL_TIME_NPI = "__initialTime";
export const IS_SHOW_TIMER = "__isShowTimer";
export const IS_LOGIN = "__isLogin";

type RoutePaths =
  | "login"
  | "register"
  | "forgot_password"
  | "reset_password"
  | "verification"
  | "home_eraspace"
  | "home_erafone"
  | "home_urban"
  | "catalog_eraspace"
  | "catalog_erafone"
  | "catalog_urban"
  | "pdp_eraspace"
  | "pdp_erafone"
  | "pdp_urban"
  | "cart"
  | "/beli-langsung"
  | "shipping"
  | "shipping_cnp"
  | "shipping_digital"
  | "shipping_checkout"
  | "myeraspace"
  | "akun"
  | "detail_transaksi"
  | "favorit"
  | "dashboard"
  | "gamification"
  | "search"
  | "kategori"
  | "payment_success"
  | "payment_failure"
  | "invoice"
  | "lacak_pesanan"
  | "bandingkan"
  | "verification"
  | "ulasan"
  | "notification";

type MappedRoutePaths = { [key in RoutePaths]: string };
export const PATHS: MappedRoutePaths = {
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  reset_password: "/reset-password",
  verification: "/verifikasi",
  home_eraspace: "/",
  home_erafone: "/erafone",
  home_urban: "/urbanrepublic",
  pdp_eraspace: "/eraspace/produk/",
  catalog_eraspace: "/eraspace/katalog/",
  pdp_erafone: "/erafone/produk/",
  catalog_erafone: "/erafone/katalog/",
  pdp_urban: "/urbanrepublic/produk/",
  catalog_urban: "/urbanrepublic/katalog/",
  cart: "/cart",
  "/beli-langsung": "/beli-langsung",
  shipping: "/cart/shipment",
  shipping_checkout: "/cart/shipment-checkout",
  shipping_cnp: "/pickup-store/shipment",
  shipping_digital: "/digital/shipment",
  myeraspace: "/myeraspace",
  akun: "/akun",
  dashboard: "/akun/dashboard",
  detail_transaksi: "/akun/transaksi/",
  favorit: "/akun/favorit",
  gamification: "/gamification",
  search: "/search",
  kategori: "/kategori",
  payment_success: "/payment/",
  payment_failure: "/payment/failure/",
  invoice: "/akun/transaksi/invoice/",
  lacak_pesanan: "/lacak-pesanan",
  bandingkan: "/bandingkan",
  ulasan: "/akun/ulasan",
  notification: "/notification",
};

// UI Layer
export const BASE_LAYER = "z-0";
export const FIRST_LAYER = "z-10";
export const SECOND_LAYER = "z-20";
export const THIRD_LAYER = "z-30";
export const FOURTH_LAYER = "z-40";
export const TOP_LAYER = "z-[99]";
// Validations
export const FORM_FIELD_REQUIRED = "Wajib Diisi";
export const FORM_FIELD_MINIMUM_LENGTH = (fieldName: string, length: number) =>
  `${fieldName} harus terdiri dari minimal ${length} karakter`;
export const FORM_FIELD_MAXIMUM_LENGTH = (fieldName: string, length: number) =>
  `${fieldName} memiliki maksimum ${length} karakter`;

export const validatePasswordField = (value: string) => {
  if (!/(?=.*\d)/.test(value)) return "Password harus terdiri dari 1 angka";
  if (!/(?=.*[!@#$%^&*])/.test(value)) return "Password harus terdiri dari 1 simbol";
  if (!/(?=.*[a-z])/.test(value)) return "Password harus terdiri dari 1 huruf kecil";
  if (!/(?=.*[A-Z])/.test(value)) return "Password harus terdiri dari 1 huruf kapital";
  return true;
};

export const PATTERN_ALPHANUMERIC = /^[a-z0-9]+$/i;
export const PATTERN_NUMBER = /^[0-9\b]+$/;
export const PATTERN_ALPHABET = /^[a-zA-Z_ ]+$/;

export const PATTERN_EMAIL_VALIDATION =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
export const PATTERN_PHONENUMBER_VALIDATION = /^(\+62|62|08)[1-9][0-9]{6,12}$/;
export const PATTERN_PHONENUMBER_VALIDATION_PROFILE = /^8[1-9][0-9]{6,12}$/;
export const PATTERN_ADDRESS = /^(?=.{15,})[a-zA-Z0-9.,/&-'():+=\s,'-]*$/;

// Maps
export const DEFAULT_COORDINATES = {
  lat: -6.175243049099881,
  lng: 106.82709914284196,
}; // Monas

// DATE
export const DEFAULT_DATE_FORMAT = "dd MMM, yyyy H:mm a";
export const TRANSACTION_DATE_FORMAT = "d MMM yyyy HH:mm:ss";
export const DEFAULT_DATE = "d MMM yyyy";
export const DEFAULT_DATE_API_VALUE = "0001-01-01T00:00:00Z";
export const ISO_DATE_FORMAT = "yyyy-MM-dd";

// KEY CODE
export const BACKSPACE = 8;
export const LEFT_ARROW = 37;
export const RIGHT_ARROW = 39;
export const DELETE = 46;
export const SPACEBAR = 32;

// BASIC AUTH
export const BASIC_TOKEN = "Y3VzdGJhc2ljOk9MV2llWlVvQlA=";

// product type configurable or simple
export const PRODUCT_TYPE_CONFIG = "configurable";
export const PRODUCT_TYPE_SIMPLE = "simple";

export const PRODUCT_SPECIFIC_URBAN_REPUBLIC = [
  "dji",
  "garmin",
  "it",
  "marshall",
  "loops",
  "gopro",
  "shokz",
];

// DATA COMPLETION POINT USAGE OPTION TOGGLE
export const DATA_COMPLETION_WITH_POINT = false;

export const LIST_SKU_NPI = [
  "TEST-001",
  "HAP-IP-15-CON",
  "9600000873",
  "9600000876",
  "9600000877",
  "9600000874",
  "9600000875",
  "9600000878",
  "9600000881",
  "9600000882",
  "9600000879",
  "9600000880",
  "9600000883",
  "9600000886",
  "9600000887",
  "9600000884",
  "9600000885",
  "HAP-IP-15PL-CON",
  "9600000888",
  "9600000891",
  "9600000892",
  "9600000889",
  "9600000890",
  "9600000893",
  "9600000896",
  "9600000897",
  "9600000894",
  "9600000895",
  "9600000898",
  "9600000901",
  "9600000902",
  "9600000899",
  "9600000900",
  "HAP-IP-15P-CON",
  "9600000903",
  "9600000906",
  "9600000905",
  "9600000904",
  "9600000915",
  "9600000918",
  "9600000917",
  "9600000916",
  "9600000907",
  "9600000910",
  "9600000909",
  "9600000908",
  "9600000911",
  "9600000914",
  "9600000913",
  "9600000912",
  "HAP-IP-15PM-CON",
  "9600000927",
  "9600000930",
  "9600000929",
  "9600000928",
  "9600000919",
  "9600000922",
  "9600000921",
  "9600000920",
  "9600000923",
  "9600000926",
  "9600000925",
  "9600000924",
  // new
  "9600000968",
  "9600000969",
  "9600000970",
  "9600000971",
  "9600000972",
  "9600000973",
  "9600000974",
  "9600000975",
  "9600000976",
  "9600000977",
  "9600000978",
  "9600000979",
  "9600000980",
  "9600000981",
  "9600000982",
  "9600000983",
  "9600000984",
  "9600000985",
  "9600000986",
  "9600000987",
  "9600000988",
  "9600000989",
  "9600000990",
  "9600000991",
  "9600000992",
  "9600000993",
  "9600000994",
  "9600000995",
  "9600000996",
  "9600000997",
  "9600000998",
  "9600000999",
  "9600001000",
  "9600001001",
  "9600001002",
  "9600001003",
  "9600001004",
  "9600001005",
  "9600001006",
  "9600001007",
  "9600001008",
  "9600001009",
  "9600001010",
  "9600001011",
  "9600001012",
  "9600001013",
  "9600001014",
  "9600001015",
  "9600001016",
  "9600001017",
  "9600001018",
  "9600001019",
  "9600001020",
  "9600001021",
  "9600001022",
  "9600001023",
  "9600001024",
  "9600001025",
];
export const LIST_IDENTIFIER_NPI = ["iphone-15-information"];
export const LIST_ID_CATEGORY_NPI = [6350, 6351];
export const NPI_DATE = new Date("2023-10-13T08:00:00+07:00");
export const COUNTDOWN_START = new Date("2023-10-19T23:45:00+07:00");
export const COUNTDOWN_END = new Date("2023-10-20T23:59:00+07:00");
