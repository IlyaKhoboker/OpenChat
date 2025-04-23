import SignIn from "../../../pages/authorization/SignIn/SignIn";
import SignUp from "../../../pages/authorization/SignUp/SignUp";
import ResetPassword from "../../../pages/authorization/ResetPassword/ResetPassword";
import ForgotPassword from "../../../pages/authorization/ForgotPassword/ForgotPassword";
import Main from "../../../pages/main/Main";

export const publicRoutes = [
  {
    path: "/signIn",
    Component: SignIn,
  },

  {
    path: "/signUp",
    Component: SignUp,
  },

  {
    path: "/forgotPassword",
    Component: ForgotPassword,
  },

  {
    path: "/resetPassword",
    Component: ResetPassword,
  },
];

export const privateRoutes = [
  {
    path: "/main",
    Component: Main,
  },
];
