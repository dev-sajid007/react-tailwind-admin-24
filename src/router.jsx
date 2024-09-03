import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import SignIn from "./pages/backend/Authentication/SignIn";
import SignUp from "./pages/backend/Authentication/SignUp";
import Dashboard from "./pages/backend/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
        ]

    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/sign-in',
                element:<SignIn/>
            },
            {
                path:'/sign-up',
                element:<SignUp/>
            },
        ]

    }
]);
export default router;