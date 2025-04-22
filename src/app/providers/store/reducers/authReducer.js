import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "../actions/authActions";

const initialState = {
  user: null,
  signIn_error_message: null,
  signUp_error_message: null,
  token: localStorage.getItem("token"),
  userIsLogged: localStorage.getItem("token") ? true : false,
  passwordIsChanged: null,
};

export default function signInReducer(state = initialState, action) {
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

    default:
      return state;
  }
}
