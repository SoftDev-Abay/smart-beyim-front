import createStore from "react-auth-kit/createStore";
import { signInFunctionParams } from "react-auth-kit";

import createRefresh, {
  RefreshTokenCallbackResponse,
} from "react-auth-kit/createRefresh";

import { FieldValues } from "react-hook-form";

import { AxiosResponse } from "axios";
import axiosInstance from "../api/axios";

export interface IUserDataAuth {
  email: string;
  username: string;
  id: string;
}

export const isAllowedToSignIn = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestResult: AxiosResponse<any, any>,
  formData: FieldValues,
  signIn: (signInConfig: signInFunctionParams<IUserDataAuth>) => boolean,
) =>
  signIn({
    auth: {
      token: requestResult.data.access,
      type: "Bearer",
    },
    refresh: requestResult.data.refresh,
    userState: {
      email: formData.username,
      id: "id1", // TODO: switch to real id when backenders add it
      username: formData.username,
    },
  });

const refresh = createRefresh<IUserDataAuth>({
  interval: 10,
  refreshApiCallback: async (param) => {
    try {
      const response = await axiosInstance.post("/api/token/refresh", param, {
        headers: { Authorization: `Bearer ${param.authToken}` },
      });
      return {
        isSuccess: true,
        newAuthToken: response.data.token,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60,
      } as RefreshTokenCallbackResponse<IUserDataAuth>;
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
      } as RefreshTokenCallbackResponse<IUserDataAuth>;
    }
  },
});

const store = createStore<IUserDataAuth>({
  authName: "auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false, //change to true when https
  refresh: refresh,
});
export default store;
