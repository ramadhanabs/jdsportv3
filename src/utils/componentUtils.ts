/* eslint-disable no-bitwise */
import { DeviceType } from "@/helpers/getDeviceType";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type ComponentLocator =
  | "@slider-desktop"
  | "@slider-mobile"
  | "@accordion"
  | "@button"
  | "@alert"
  | "@modal"
  | "@expandableText"
  | "@categorySlider"
  | "@countdown"
  | "@iframe"
  | "@link"
  | "@copy";

/**
 * This is used for mapping blocks className into react components
 * @param locator
 * @returns locator
 */
export const getComponentLocatorId = (locator: ComponentLocator): ComponentLocator => {
  return locator;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadMobileApp = (deviceType: DeviceType, deepLink = true) => {
  if (deviceType === "ios") {
    window.location.replace("eraspace.midtrans://");

    setTimeout(() => {
      window.location.replace("https://apps.apple.com/id/app/eraspace/id1534301787");
    }, 2000);
    return;
  }

  const androidAppUrl = "https://play.google.com/store/apps/details?id=com.eraspace.app";
  if (!deepLink) {
    window.location.replace(androidAppUrl);
    return;
  }

  window.location.replace(
    "intent://eraspace.com/home/#Intent;scheme=erajaya;package=com.eraspace.app;end"
  );
};

export const makeUrlKey = (name: string) => {
  const str = name;
  const str2 = str.replace(" & ", "-");
  const uriunique = str2.replace(" ", "-");

  return uriunique.toLowerCase();
};

export const parseHTML = (content: string, config?: { useParser?: boolean }) => ({
  __html: config?.useParser ? content.replaceAll("&lt;", "<").replaceAll("&gt;", ">") : content,
});

export const isLightColor = (color: string) => {
  const c = color.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma > 51;
};

export const generateBannerList = (data: string) => {
  const regex = /<img.*?src='(.*?)'/g;
  const array = [...data.matchAll(regex)];

  const link = array.map(item => item[1]);
  const object = {
    bannerImages: [...link],
  };

  return JSON.stringify(object);
};

export const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#DEDEDE" offset="20%" />
      <stop stop-color="#AAAAAA" offset="50%" />
      <stop stop-color="#DEDEDE" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#DEDEDE" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const generateCategoryURL = (menu: string, menuId: number, listCategory: string[] = []) => {
  const mergedMenu = `${makeUrlKey(menu)}-${menuId}`;
  const cloneListCategory = [...listCategory];
  cloneListCategory.push(mergedMenu);

  const stringifiedListCategory = cloneListCategory.map(item => item.toLowerCase()).join("/");
  return `/category/${stringifiedListCategory}`;
};
