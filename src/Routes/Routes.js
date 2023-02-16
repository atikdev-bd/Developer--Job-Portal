import { createBrowserRouter } from "react-router-dom";
import ErrorElements from "../components/Pages/Shared/ErrorElements/ErrorElements";


import Main from "../Layout/Main";

export const router = createBrowserRouter([
     
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElements></ErrorElements>,
        children : [
            {
                path: '/home',

                element: <home></home>
                
                
                
            }
        ]
    }

])