import React from "react";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Shop from "../pages/Shop"
import Stores from "../pages/Stores"
import ProductDetail from "../pages/details/ProductDetail";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/stores',
        element: <Stores />
    },
    {
        path: '/product_detail',
        element: <ProductDetail />
    },
    {
        path: '/contactUs',
        element: <Contact/>
    },
    {
        path: '/faqs',
        element: <Faqs/>
    }

]
export default routes;