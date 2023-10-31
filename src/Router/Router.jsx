import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Res/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookservice from "../Pages/Bookservice/Bookservice";
import Booking from "../Pages/Booking/Booking";
import Privetrouter from "../Components/Privetrouter/Privetrouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/singup",
                element: <Register></Register>
            },
            {
                path: "/bookservice/:id",
                element: <Privetrouter><Bookservice></Bookservice></Privetrouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/booking",
                element: <Privetrouter><Booking></Booking></Privetrouter>
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
]);


export default router;