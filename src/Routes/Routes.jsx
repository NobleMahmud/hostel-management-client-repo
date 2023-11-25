import {
    createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import SignUp2 from "../pages/SignUp/SignUp2";
import LogIn2 from "../pages/LogIn/LogIn2";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <LogIn2></LogIn2>,
        },
        {
          path: "/signup",
          element: <SignUp2></SignUp2>
        },
      ],
    },
  ]);