import { APIResponse } from "@/types/commonTypes";

interface ResponseInfo {
  appName: string;
  build: string;
  id: string;
  message: string;
  version: string;
}

export interface PostLoginCustomerParams {
  identifier: string;
  password: string;
  type: string;
}

export interface PostCustomerLoginResponse extends ResponseInfo {
  data: {
    token: string;
    expired: number;
  } | null;
}

export type GetCustomerProfileResponse = APIResponse<Customer | null>;

interface AboutYou {
  status: string;
  job: string;
  hobby: string;
  lifestyleBudget: string;
  celebrate: string;
}

interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
}

interface CompletionStatus {
  privacyData: boolean;
  socialMedia: boolean;
  aboutYou: boolean;
  address: boolean;
}

export interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  identityNumber: string;
  memberExpiredDate: string;
  memberGroupId: string;
  gender: string;
  isSubscribeNewsletter: boolean;
  unverifiedEmail: string;
  verifiedPhoneNumber: string;
  isPhoneNumberVerified: boolean;
  isEmailVerified: boolean;
  customerGroup: string | null;
  attributes: Attributes;
  oldPassword?: string;
  newPassword?: string;
}

interface Attributes {
  aboutYou: AboutYou;
  socialMedia: SocialMedia;
  completionStatus: CompletionStatus;
}
