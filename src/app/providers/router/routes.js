import SignIn from "../../../pages/authorization/SignIn/SignIn";
import SignUp from "../../../pages/authorization/SignUp/SignUp";
import ResetPassword from "../../../pages/authorization/ResetPassword/ResetPassword";

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
    Component: ResetPassword,
  },
];
