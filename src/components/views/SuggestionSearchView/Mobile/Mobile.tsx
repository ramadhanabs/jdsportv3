import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { useSuggestion } from "@/api/Unbxd";
import useDebounce from "@/hooks/useDebounce";
import useDisclosure from "@/hooks/useDisclosure";
import SuggestionResult from "@/components/views/SuggestionSearchView/SuggestionResult";

const Mobile = () => {
  const [spellCheck, setSpellCheck] = useState("");
  const [querySearch, setQuerySearch] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure(false);

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

  const modalSearchRendered = () => (
    <>
      <div className="absolute flex flex-col bg-white border w-full h-[100vh] p-3 top-0 left-0 z-40">
        <form className="relative flex flex-row items-center gap-3 z-40 border-b-2 pb-4">
          <button type="button" className="w-10" onClick={onClose} aria-label="back">
            <IoIosArrowRoundBack size="100%" />
          </button>
          <div className="relative w-full">
            <input
              type="text"
              name="search"
              className="p-3 w-full text-xs border focus:outline-none text-[#1a1a1a] rounded-r-none rounded-l-sm placeholder:text-[#1a1a1a] placeholder:text-xs placeholder-[#1a1a1a] placeholder-opacity-75"
              placeholder="Cari produk, kategori atau merek"
              onChange={onChangeSearchHandler}
            />
            {!!querySearch.length && (
              <button
                type="button"
                className="absolute p-2 right-2 top-2/4 -translate-y-2/4 z-50 hover:text-red-400"
                onClick={() => console.log("")}
                aria-label="close"
              >
                <TfiClose />
              </button>
            )}
          </div>
        </form>
        <SuggestionResult
          isLoading={isFetching}
          querySearch={inputDebounce}
          data={resultSuggestion}
          spellCheck={spellCheck}
        />
      </div>
    </>
  );

  return (
    <>
      <button className="p-2" onClick={onOpen}>
        <FiSearch className="w-[22px] h-[22px]" />
      </button>
      {isOpen && modalSearchRendered()}
    </>
  );
};

export default Mobile;
