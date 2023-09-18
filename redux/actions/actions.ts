import { userCredentials } from "../../types/types";

export const LOGIN_USER_ACTION = "LOGIN_USER_ACTION";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const loginUserAction = (credentials: userCredentials) => {
  type: LOGIN_USER_ACTION;
  payload: {
    credentials.email, credentials.password;
  }
};

export const loginUserSuccessAction = () => {
  type: LOGIN_USER_SUCCESS;
};

export const loginUserFailedAction = () => {
  type: LOGIN_USER_FAILED;
};
