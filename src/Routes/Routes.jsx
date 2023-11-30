import {
    createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import SignUp2 from "../pages/SignUp/SignUp2";
import LogIn2 from "../pages/LogIn/LogIn2";
import Meals from "../pages/Meals/Meals";
import Upcoming from "../pages/Upcoming/Upcoming";
import MealDetails from "../pages/MealDetails/MealDetails";
import MealCard from "../pages/MealCard/MealCard";
import useAxiosPublic from "../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();
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
        {
          path: "/meals",
          element: <Meals></Meals>
        },
        {
          path: "/meals/:id",
          element: <MealDetails></MealDetails>,
          loader: ({params})=>{
            console.log(params.id);
            return axiosPublic.get(`/meals/${params.id}`)
          }
        },
        {
          path: "/upcoming",
          element: <Upcoming></Upcoming>
        },
      ],
    },
  ]);