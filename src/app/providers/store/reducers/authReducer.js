import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
} from "../actions/authActions";

const initialState = {
  user: null,
  signIn_error_message: null,
  signUp_error_message: null,
  token: localStorage.getItem("token"),
  userIsLogged: localStorage.getItem("token") ? true : false,
  passwordIsChanged: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      localStorage.setItem("token", action.token);
      return {
        ...state,
        user: {
          ...{
            email: action.user.email,
            uid: action.uid,
          },
        },
        signIn_error_message: null,
        token: localStorage.getItem("token"),
        userIsLogged: localStorage.getItem("token") ? true : false,
      };
    }

    case SIGN_IN_FAILURE: {
      return {
        ...state,
        signIn_error_message: action.error.message,
        userIsLogged: false,
      };
    }

    case SIGN_UP_SUCCESS: {
      localStorage.setItem("token", action.token);
      return {
        ...state,
        user: {
          ...{
            email: action.user.email,
            uid: action.uid,
          },
        },
        signUp_error_message: null,
        token: localStorage.getItem("token"),
        userIsLogged: localStorage.getItem("token") ? true : false,
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
        signUp_error_message: action.error.message,
      };
    }

    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        passwordIsChanged: false,
      };
    }

    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        passwordIsChanged: true,
      };
    }

    default:
      return state;
  }
}
