import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Brands from "../Components/Brands";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import CouponDetails from "../Components/CouponDetails";
import Profile from "../Pages/Profile";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/brands',
        element: <Brands />,
    },
    {
        path: '/brands/:_id',
        element: <CouponDetails />,
        loader: () => fetch('/coupon.json')
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    },
    {
        path: 'profile',
        element: <Profile />
    },
    {
        path: 'about',
        element: <About />
    }
])


export default router