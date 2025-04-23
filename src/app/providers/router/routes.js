import SignIn from "../../../pages/authorization/SignIn/SignIn";
import SignUp from "../../../pages/authorization/SignUp/SignUp";

export const publicRoutes = [
  {
    path: "/signIn",
    Component: SignIn,
  },

  {
    path: "/signUp",
    Component: SignUp,
  },
];
