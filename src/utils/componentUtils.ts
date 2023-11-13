/* eslint-disable no-bitwise */
import { DeviceType } from "@helpers/getDeviceType";

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
