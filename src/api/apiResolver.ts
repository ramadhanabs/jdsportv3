/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { createErrorResponse } from "./customAxios";

interface ResolverOptions {
  throwErrorObject?: boolean;
}

const apiResolver = async (
  fetcher: () => Promise<AxiosResponse<any>>,
  options?: ResolverOptions
) => {
  try {
    const res = await fetcher();
    return res.data;
  } catch (err) {
    const errRes = createErrorResponse(err);
    if (options?.throwErrorObject) throw errRes;
    // eslint-disable-next-line no-throw-literal
    throw { message: errRes.error_message };
  }
};

export default apiResolver;
