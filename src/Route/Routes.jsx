import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/HomePage/Home";
import AllFoods from "../Components/AllFoods/AllFoods";
import Gallery from "../Components/Gallery/Gallery";
import MyProfile from "../Components/MyProfile/MyProfile";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ViewDetails from "../Components/Details/ViewDetails";
import ErrorComponents from "../Components/ErrorComponent/ErrorComponents";
import FoodPurchase from "../Components/FoodPurchase/FoodPurchase";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorComponents></ErrorComponents>,
      children: [
        {
            path:"/home",
            element: <Home></Home>
        },
        {
            path:"/allfoods",
            element:<AllFoods></AllFoods>
        },
        {
            path: "/gallery",
            element: <Gallery></Gallery>
        },
        {
            path: "/myprofile",
            element :<MyProfile></MyProfile>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
             path :"/register",
             element: <Register></Register>
        },
        {
            path:"/details/:id",
            element: <ViewDetails></ViewDetails>,
            loader: ({ params }) => fetch(`http://localhost:5001/all-foods/${params.id}`)    
        },
        {
            path:"/purchase/:id",
            element: <FoodPurchase></FoodPurchase>,
            loader: ({ params }) => fetch(`http://localhost:5001/all-foods/${params.id}`)  
        },
        {

        }

      ]
    },
  ]);