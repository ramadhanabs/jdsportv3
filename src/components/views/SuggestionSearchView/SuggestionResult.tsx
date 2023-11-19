import React from "react";
import { useStoreState } from "@/store";
import { GetSuggestionResponse, Products } from "@/api/Unbxd";
import ItemSuggestion from "@/components/views/SuggestionSearchView/ItemSuggestion";

interface SuggestionResultProps {
  querySearch: string;
  isLoading: boolean;
  data: Products[];
  spellCheck: string;
}

const SuggestionResult = ({ querySearch, isLoading, data, spellCheck }: SuggestionResultProps) => {
  const deviceIsMobile = useStoreState(state => state.deviceIsMobile);

  const KEYWORD_SUGGESTION = data.filter(item => item.doctype === "KEYWORD_SUGGESTION");
  const TOPSEARCH_PRODUCT = data.filter(item => item.doctype === "TOP_SEARCH_QUERIES");
  const POPULAR_PRODUCT = data.filter(item => item.doctype === "POPULAR_PRODUCTS");
  const PROMOTE_PRODUCT = data.filter(item => item.doctype === "PROMOTED_SUGGESTION");
  const INFIELD_SUGGESTION = data.filter(item => item.doctype === "IN_FIELD");

  const attributes = INFIELD_SUGGESTION.map(item =>
    Object.keys(item).filter(key => key.includes("_in"))
  );
  const inFieldSuggestionFiltered = INFIELD_SUGGESTION.map((item, index) => ({
    item,
    fields: attributes[index]
      .map(attribute => {
        const valueAttribute: string[] = item[attribute] as string[];
        return { attribute, field: valueAttribute[0] };
      })
      .flat(1)
      .slice(0, 3),
  }));

  const contentFocusStateRendered = () => (
    <div className="w-full py-4">
      <p className="font-bold text-xs pb-2 px-5">Pencarian Terakhir</p>
      <ul className="flex flex-col">
        <li className="text-xs py-2 px-5 hover:bg-gray-200 cursor-pointer">Adidas</li>
        <li className="text-xs py-2 px-5 hover:bg-gray-200 cursor-pointer">Nike</li>
        <li className="text-xs py-2 px-5 hover:bg-gray-200 cursor-pointer">Puma</li>
      </ul>
    </div>
  );

  const contentInputStateRendered = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full pt-4 overflow-y-scroll lg:overflow-y-auto pb-12 lg:pb-0 scrollbar-hide">
      <div className="w-full flex flex-col gap-3 pb-5">
        {spellCheck && (
          <p
            className="w-full text-xs hover:bg-gray-200 py-2 px-5 cursor-pointer"
            onClick={() => console.log({ spellCheck })}
            role="presentation"
          >
            <b className="italic">Did You Mean:</b> {spellCheck}?
          </p>
        )}
        {KEYWORD_SUGGESTION.length > 0 && (
          <ItemSuggestion
            suggestions={KEYWORD_SUGGESTION}
            className="border-b pb-2"
            clickHandler={() => console.log("Hello world")}
          />
        )}
        <div className="flex flex-col gap-5">
          {inFieldSuggestionFiltered.map(inField => (
            <div className="flex flex-col gap-1" key={inField?.item?.uniqueId}>
              <p className="text-xs px-5">{inField?.item?.autosuggest}</p>
              <ul className="flex flex-col">
                {inField?.fields.map(item => (
                  <li
                    key={item.attribute}
                    className="text-xs py-2 px-5 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      console.log(
                        inField?.item?.autosuggest,
                        `${item.attribute.replace(/_in/g, "")}:"${item?.field}"`
                      )
                    }
                    role="presentation"
                  >
                    in <b>{item.field}</b>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-stretch gap-3">
        {TOPSEARCH_PRODUCT.length > 0 && (
          <ItemSuggestion
            title="Paling Dicari"
            urlIcon="/icon/topsearch-icon.svg"
            suggestions={TOPSEARCH_PRODUCT}
            clickHandler={() => console.log("1")}
            className="pb-2"
          />
        )}
        {POPULAR_PRODUCT.length > 0 && (
          <ItemSuggestion
            title="Sedang Popular"
            urlIcon="/icon/popular-icon.svg"
            suggestions={POPULAR_PRODUCT}
            clickHandler={() => console.log("1")}
            className="pb-2"
          />
        )}
        {PROMOTE_PRODUCT.length > 0 && (
          <ItemSuggestion
            title="Cek Juga Yang Ini"
            urlIcon="/icon/promoted-icon.svg"
            suggestions={PROMOTE_PRODUCT}
            clickHandler={() => console.log("1")}
            className="bg-[#FFED06] bg-opacity-20 py-3 h-full"
          />
        )}
      </div>
    </div>
  );

  const showContentInputState =
    querySearch.length > 0 && !isLoading && (data.length > 0 || spellCheck);
  const showContentFocusState = querySearch.length === 0;

  if (deviceIsMobile)
    return (
      <>
        {showContentFocusState && contentFocusStateRendered()}
        {showContentInputState && contentInputStateRendered()}
        {isLoading && <p className="text-xs py-3 px-5">Loading...</p>}
      </>
    );

  return (
    <>
      {showContentInputState && (
        <div className="absolute top-14 left-0 z-40 bg-white border w-[150%]">
          {contentInputStateRendered()}
        </div>
      )}
      {showContentFocusState && (
        <div className="absolute top-14 left-0 z-40 bg-white border w-full">
          {contentFocusStateRendered()}
        </div>
      )}
      {isLoading && (
        <div className="absolute top-14 left-0 z-40 bg-white border w-full py-3 px-5">
          <p className="text-xs">Loading...</p>
        </div>
      )}
    </>
  );
};

export default React.memo(SuggestionResult);
