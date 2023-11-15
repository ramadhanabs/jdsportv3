/* eslint-disable @next/next/no-img-element */
import { ContainerDesktop } from "@/components/elements/Container";
import { FORM_FIELD_REQUIRED } from "@/helpers/constants";
import React from "react";
import { useForm } from "react-hook-form";
import { BsInstagram, BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";

interface FooterProps {
  isMobile?: boolean;
}

const Newsletter = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: "onChange",
  });

  const onSubmit = () => {};

  return (
    <div className="bg-[#f2f2f2] py-8 mt-10">
      <ContainerDesktop className="px-8 flex flex-col gap-5 justify-center text-center">
        <p className="text-2xl font-semibold">Baru bergabung dengan JD?</p>
        <p className="text-lg">Dapatkan rekomendasi produk kami dan miliki produk favoritmu.</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#E0E0E0] px-3 py-2 flex items-center justify-between w-[50%] mx-auto"
        >
          <input
            type="text"
            className="outline-none focus:outline-none bg-transparent w-[90%] p-1"
            placeholder="Masukkan Email Anda"
            {...register("email", {
              required: { value: true, message: FORM_FIELD_REQUIRED },
            })}
          />
          <button type="submit">
            <BsArrowRight className="w-6 h-6"></BsArrowRight>
          </button>
        </form>
      </ContainerDesktop>
    </div>
  );
};

const Footer = ({ isMobile }: FooterProps) => {
  return (
    <div className="py-20">
      <ContainerDesktop className="px-8">
        <div className="grid grid-cols-2 gap-6">
          <img src="/images/new-eraspace.webp" className="w-full h-full" alt="Banner Eraspace" />
          <img src="/images/new-store.webp" className="w-full h-full" alt="Banner Store" />
        </div>
      </ContainerDesktop>

      <div className="bg-[#2e2e2e] h-20">
        <ContainerDesktop className="px-8 flex items-center gap-4">
          <p className="text-white">Join the conversation</p>

          <div className="flex justify-center items-center py-6 gap-4 text-white">
            <button>
              <FaFacebook className="w-7 h-7"></FaFacebook>
            </button>
            <button>
              <BsInstagram className="w-7 h-7"></BsInstagram>
            </button>
            <button>
              <FaTwitter className="w-7 h-7"></FaTwitter>
            </button>
            <button>
              <FaTiktok className="w-7 h-7"></FaTiktok>
            </button>
          </div>
        </ContainerDesktop>
      </div>

      <Newsletter />
    </div>
  );
};

export default Footer;
