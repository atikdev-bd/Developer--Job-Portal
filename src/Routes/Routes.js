import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Home/Login/Login";
import Register from "../components/Pages/Home/Register/Register";
import ErrorElements from "../components/Pages/Shared/ErrorElements/ErrorElements";

import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: "/home",

        element: <Home></Home>,
      },
      {
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "/login",

        element: <Login></Login>,
      },
      {
        path: "/register",

        element: <Register></Register>,
      },
    ],
  },
]);
