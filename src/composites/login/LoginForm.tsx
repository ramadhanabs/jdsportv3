import React from "react";
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import { FaGoogle } from "react-icons/fa";
import { FormInputText } from "@/components/elements/FormInput";
import { useForm } from "react-hook-form";
import { FORM_FIELD_REQUIRED } from "@/helpers/constants";
import Link from "next/link";
import { useLogin } from "@/api/Customer";

type FormValues = {
  identifier: string;
  password: string;
};

const LoginForm = () => {
  const loginMutation = useLogin();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = (form: FormValues) => {
    const params = {...form, type: "password"}
    
    loginMutation.mutate(params, {
      onSuccess: (response) => {
      },
      onError: () => {}
    })
  };

  return (
    <div className="w-full bg-white flex flex-col gap-3 box-shadow-login-form pb-2">
      <div className="py-4 px-3 border-b border-gray-200">
        <Text className="font-semibold">PELANGGAN SUDAH TERDAFTAR </Text>
      </div>
      <div className="py-4 px-3 flex flex-col gap-4">
        <Button className="w-full text-xs" variant="outline">
          Continue as Guest
        </Button>
        <Button
          className="w-full text-xs text-white bg-[#dd4b39] hover:text-black"
          variant="unstyled"
        >
          <FaGoogle className="w-4 h-4" />
          <Text>MASUK DENGAN GOOGLE</Text>
        </Button>
      </div>

      <div className="border-b border-gray-200 relative">
        <div className="absolute w-full top-[-16px] flex justify-center">
          <Text className="p-2 bg-white text-sm font-semibold mx-auto">ATAU</Text>
        </div>
      </div>

      <div className="py-4 px-3 flex flex-col gap-6">
        <Text className="text-xs">
          Jika anda memiliki akun, masuk dengan email atau nomor handphone anda.
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" id="form-login">
          <div className="flex flex-col gap-1">
            <FormInputText
              type="text"
              label="NO HANDPHONE ATAU EMAIL"
              placeholder="Masukkan no handphone atau emailmu"
              {...register("identifier", {
                required: {
                  value: true,
                  message: FORM_FIELD_REQUIRED,
                },
              })}
            />
            {errors.identifier && (
              <p className="text-red-600 text-[10px]">{errors.identifier.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <FormInputText
              type="password"
              label="PASSWORD"
              placeholder="Kata Sandi"
              {...register("password", {
                required: {
                  value: true,
                  message: FORM_FIELD_REQUIRED,
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-[10px]">{errors.password.message}</p>
            )}
          </div>
        </form>
      </div>

      <div className="border-t border-gray-200 py-4 px-3 flex flex-col gap-4">
        <Button form="form-login" type="submit" className="w-full">
          Masuk
        </Button>

        <div className="text-center">
          <Text className="text-xs">Belum Punya Akun? </Text>
          <Link className="text-xs font-semibold text-gray-700" href="/register">
            Daftar Disini
          </Link>
        </div>

        <Link className="text-xs font-semibold text-center" href="/forgot-password">
          LUPA PASSWORD?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
