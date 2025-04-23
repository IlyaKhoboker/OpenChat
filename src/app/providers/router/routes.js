import SignIn from "../../../pages/authorization/SignIn/SignIn";
import SignUp from "../../../pages/authorization/SignUp/SignUp";
import ResetPassword from "../../../pages/authorization/ResetPassword/ResetPassword";
import ForgotPassword from "../../../pages/authorization/ForgotPassword/ForgotPassword";

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
