import {
    createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import SignUp2 from "../pages/SignUp/SignUp2";
// import LogIn2 from "../pages/LogIn/LogIn2";
import Meals from "../pages/Meals/Meals";
import Upcoming from "../pages/Upcoming/Upcoming";
import MealDetails from "../pages/MealDetails/MealDetails";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Packages from "../pages/Packages/Packages";
import LogIn from "../pages/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";

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
          element: <LogIn></LogIn>,
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
        {
          path: '/packages/:name',
          element: <PrivateRoute><Packages></Packages></PrivateRoute>
        }
      ],
    },
  ]);