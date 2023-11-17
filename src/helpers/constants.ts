/* eslint-disable no-useless-escape */
export const IMAGE_PLACEHOLDER_PATH = "/illustration/placeholder.svg";

export const DEVICE_ID = "__deviceId";
export const CUSTOMER_KEY = "__customerKey";
export const DOWNLOAD_APP = "__downloadApp";
export const LAST_SEARCH = "__lastSearch";
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
export const VIEW_CLEAR = "__viewClear";
export const INITIAL_TIME_NPI = "__initialTime";
export const IS_SHOW_TIMER = "__isShowTimer";
export const IS_LOGIN = "__isLogin";

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

// DATA COMPLETION POINT USAGE OPTION TOGGLE
export const DATA_COMPLETION_WITH_POINT = false;
