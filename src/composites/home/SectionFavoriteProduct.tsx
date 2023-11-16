/* eslint-disable @next/next/no-img-element */
import { useBlocks } from "@/api/Blocks";
import { useProductCatalogs } from "@/api/Catalog/queries";
import React, { useMemo, useState } from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";
import Link from "next/link";
import { formatRupiah } from "@/utils/numberUtils";

const SectionFavoriteProduct = () => {
  const [activeTab, setActiveTab] = useState("1");
  const categoryId = useMemo(() => {
    switch (activeTab) {
      case "1":
        return process.env.NEXT_PUBLIC_ID_TOP_PICKS_HOMEPAGE_MEN ?? "";
      case "2":
        return process.env.NEXT_PUBLIC_ID_TOP_PICKS_HOMEPAGE_WOMEN ?? "";
      case "3":
        return process.env.NEXT_PUBLIC_ID_TOP_PICKS_HOMEPAGE_KIDS ?? "";
      default:
        return "";
    }
  }, [activeTab]);

  const { data: dataCatalog } = useProductCatalogs({ limit: 4, categoryId: parseInt(categoryId) });
  const { data: dataButtonOTP } = useBlocks("jd-our-top-picks");

  const generateId = (prefix: string) => {
    switch (activeTab) {
      case "1":
        return `${prefix}-men`;
      case "2":
        return `${prefix}-women`;
      case "3":
        return `${prefix}-kids`;
    }
  };

  const listCatalog = useMemo(() => {
    return dataCatalog?.data?.items ?? [];
  }, [dataCatalog]);

  const buttonOTP = useMemo(() => {
    return dataButtonOTP?.data.items?.content ?? "";
  }, [dataButtonOTP]);

  if (listCatalog.length === 0) return null;

  const buttonGroupRenderer = () => {
    // if (buttonOTP) return parse(buttonOTP);

    return (
      <>
        <div id="title-our-top-picks-homepage">
          <div className="font-bold text-[14px] sm:text-[20px] capitalize ">Our Top Picks</div>
        </div>

        <div className="flex flex-row gap-4" id="dataset-otp">
          <button
            type="button"
            data-setactive="1"
            data-colorHex="#4B5563 #F9FAFB"
            className={`dataset-otp-child dataset-otp-active p-2 text-[8px] sm:text-base border-2 border-gray-200 text-gray-500 w-auto`}
            style={{
              backgroundColor: "#4B5563",
              color: "#F9FAFB",
            }}
          >
            Shop Men’s
          </button>
          <button
            type="button"
            data-setactive="2"
            data-colorHex="#4B5563 #F9FAFB "
            className={`dataset-otp-child p-2 text-[8px] sm:text-base border-2 border-gray-200 text-gray-500 w-auto`}
          >
            Shop Women’s
          </button>
          <button
            type="button"
            data-setactive="3"
            data-colorHex="#4B5563 #F9FAFB "
            className={`dataset-otp-child p-2 text-[8px] sm:text-base border-2 border-gray-200 text-gray-500 w-auto`}
          >
            Shop Kid’s
          </button>
        </div>
      </>
    );
  };

  return (
    <ContainerDesktop className="px-8 pt-8">
      <div className="flex flex-col gap-1 lg:gap-5">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-[100px] items-center">
          {buttonGroupRenderer()}
        </div>

        <div id={generateId("our-top-picks-homepage")}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {listCatalog.map((product, index) => {
              return (
                <Link
                  href="#"
                  key={product.id}
                  id={`${generateId("product-our-top-picks-homepage")}-${index + 1}`}
                >
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <div className="w-auto relative overflow-hidden">
                      <img
                        className="w-full object-cover object-center"
                        alt={product.name}
                        src={
                          product.jd_product_id
                            ? `${process.env.NEXT_PUBLIC_AMPLIENCE_API}/i/jpl/${product.jd_product_id}_al?w=400&resmode=sharp&qlt=70&fmt=webp`
                            : product.thumbnail
                        }
                      />
                    </div>

                    <div className="flex flex-col gap-1 lg:gap-2">
                      <p className="text-xs lg:text-sm line-clamp-2">{product.name}</p>
                      <p className="text-xs lg:text-sm font-semibold">
                        {formatRupiah(product.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </ContainerDesktop>
  );
};

export default SectionFavoriteProduct;
