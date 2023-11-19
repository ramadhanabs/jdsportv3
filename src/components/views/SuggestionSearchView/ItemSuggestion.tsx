import Image from "next/image";
import React from "react";

type Suggestion = {
  uniqueId: string;
  autosuggest: string;
};

interface ItemSuggestionProps {
  title?: string;
  urlIcon?: string;
  suggestions: Suggestion[];
  className?: string;
  clickHandler: (suggestion: string) => void;
}

const ItemSuggestion = (props: ItemSuggestionProps) => {
  const { title = "", urlIcon = "", suggestions, className = "", clickHandler } = props;

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      {title && (
        <div className="flex flex-row gap-2 px-5 items-center">
          <Image src={urlIcon} alt="" width={24} height={24} />
          <p className="font-medium text-xs">{title}</p>
        </div>
      )}
      <ul className="flex flex-col">
        {suggestions?.map(item => (
          <li
            key={item.uniqueId}
            className="text-xs py-2 px-5 hover:bg-gray-200 cursor-pointer"
            onClick={() => clickHandler(item.autosuggest)}
            role="presentation"
          >
            {item.autosuggest}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemSuggestion;
