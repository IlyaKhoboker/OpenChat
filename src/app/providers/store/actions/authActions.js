export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const GOOGLE_SIGN_IN = "GOOGLE_SIGN_IN";
export const GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const SIGN_OUT = "SIGN_OUT";

export const signInAction = (payload) => ({ type: SIGN_IN, payload });
export const googleSignInAction = () => ({ type: GOOGLE_SIGN_IN });
export const signUpAction = (payload) => ({ type: SIGN_UP, payload });
export const forgotPasswordAction = (payload) => ({ type: FORGOT_PASSWORD, payload });
export const resetPasswordAction = (payload) => ({ type: RESET_PASSWORD, payload });
export const signOutAction = () => ({ type: SIGN_OUT });
