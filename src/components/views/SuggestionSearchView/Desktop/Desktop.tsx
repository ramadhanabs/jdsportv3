import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { TfiClose } from "react-icons/tfi";
import { useSuggestion } from "@/api/Unbxd";
import useDebounce from "@/hooks/useDebounce";
import useDisclosure from "@/hooks/useDisclosure";
import { FormInputText } from "@/components/elements/FormInput";
import SuggestionResult from "@/components/views/SuggestionSearchView/SuggestionResult";

const Desktop = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [spellCheck, setSpellCheck] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  const inputDebounce = useDebounce(querySearch, 600);
  const { data, isFetching, isError } = useSuggestion({ query: inputDebounce });
  const resultSuggestion = useMemo(() => data?.response?.products || [], [data]);

  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
    setSpellCheck("");
  };

  useEffect(() => {
    if (data?.didYouMean) {
      setSpellCheck(data?.didYouMean[0].suggestion || "");
      setQuerySearch(data?.didYouMean[0].suggestion);
    }
  }, [data?.didYouMean]);

  return (
    <div className="relative z-40">
      <form className="flex items-center">
        <div className="relative">
          <FormInputText
            placeholder="Cari produk, kategori atau merek"
            className="w-[300px] py-3 px-4 rounded-l-sm text-xs"
            onChange={onChangeSearchHandler}
            onFocus={onOpen}
          />
        </div>
        <button className="bg-primary h-[42px] px-7 text-xs rounded-r-sm items-stretch">
          Search
        </button>
      </form>
      {isOpen && !isError && (
        <>
          {createPortal(
            <div
              className="fixed inset-0 w-full h-[100vh] bg-black/40 z-20"
              onClick={onClose}
              role="presentation"
            />,
            document.body
          )}
          <SuggestionResult
            isLoading={isFetching}
            querySearch={inputDebounce}
            data={resultSuggestion}
            spellCheck={spellCheck}
          />
        </>
      )}
    </div>
  );
};

export default Desktop;
