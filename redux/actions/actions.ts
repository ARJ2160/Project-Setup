import { userCredentials } from "../../types/types";

export const LOGIN_USER_ACTION = "LOGIN_USER_ACTION";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const loginUserAction = (credentials: userCredentials) => {
  return {
    type: LOGIN_USER_ACTION,
    payload: credentials,
  };
};

export const loginUserSuccessAction = () => {
  return { type: LOGIN_USER_SUCCESS };
};

export const loginUserFailedAction = () => {
  return { type: LOGIN_USER_FAILED };
};
