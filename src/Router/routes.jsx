import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Brands from "../Components/Brands";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />
    },
    {
        path: '/brands',
        element: <Brands />
    }
])


export default router