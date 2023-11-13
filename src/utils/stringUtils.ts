export const textBuilder = (arr: Array<string | number | undefined | null>) => {
  return arr.filter(char => typeof char === "number" || typeof char === "string").join(" ");
};

export const capitalize = (str?: string) => {
  if (!str) return "";

  const arrStr = str.split(" ") as string[];

  const capitalizeArrWord = arrStr.map(e => {
    const capWord = e[0]?.toUpperCase();

    if (e.length > 1) return capWord + e.slice(1).toLowerCase();

    return capWord;
  });

  return capitalizeArrWord.join(" ");
};

export const createURLParams = (params: {
  [key: string]: string | string[] | number | undefined | null;
}) => {
  const keys = Object.keys(params);

  if (!keys.length) return "";

  const queryParams = new URLSearchParams();
  keys
    .filter(key => Boolean(`${params[key]}`))
    .forEach(key => {
      const param = params[key];
      if (typeof param !== "undefined" && param !== null) {
        queryParams.set(key, param.toString());
      }
    });

  return `?${queryParams.toString()}`;
};

export const replaceAll = (value: string, find: string, replace: string) => {
  if (!value) return "";

  const searchRegExp = new RegExp(find, "g");
  return value.replace(searchRegExp, replace);
};

export const maskingName = (nameValue: string) => {
  const name = nameValue?.replace(/\s/g, "");
  const firstCharacter = name?.slice(0, 1);
  const lastCharacter = name?.slice(name.length - 1, name.length);
  const sensorCharLength = name?.slice(1)?.length;
  let sensorChar = "";
  for (let i = 0; i < sensorCharLength - 1; i += 1) {
    sensorChar += "*";
  }
  return `${firstCharacter}${sensorChar}${lastCharacter}`;
};

export const isHTML = (str: string) => {
  return /<\/?[a-z][\s\S]*>/i.test(str);
};

export const maskIdentifier = (type: string | undefined, text: string) => {
  let maskedIdentifier = "";
  if (type === "phone") {
    const asterisks = "*".repeat(text.length - 7);

    maskedIdentifier = [text.slice(0, 5), asterisks, text.slice(-2)].join("");
  } else {
    const [username, domain] = text.split("@");
    const maskedUsername = username
      .split("")
      .map((item, index) => (index < 3 ? item : "*"))
      .join("");

    maskedIdentifier = `${maskedUsername}@${domain}`;
  }

  return maskedIdentifier;
};

export const stripHTMLTags = (value: string) => {
  return value.replace(/(<([^>]+)>)/gi, "");
};

export const slugToLowercase = (slug: string | string[] | undefined) => {
  if (!slug) return "";

  let convertedSlug: string | string[] = "";

  if (typeof slug === "string") {
    convertedSlug = slug.toLowerCase();
  } else {
    convertedSlug = slug;
  }

  return convertedSlug;
};
