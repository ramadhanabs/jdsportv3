import { FormInputText } from "@/components/elements/FormInput";
import React from "react";

const HeaderSearchbar = () => {
  return (
    <div className="flex items-center">
      <FormInputText
        placeholder="Cari produk, kategori atau merek"
        className="w-[300px] py-3 px-4 rounded-l-sm text-xs"
      />
      <button className="bg-primary h-[42px] px-7 text-xs rounded-r-sm items-stretch">Search</button>
    </div>
  );
};

export default HeaderSearchbar;
