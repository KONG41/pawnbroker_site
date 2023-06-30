import React from "react";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Shop from "../pages/Shop"
import Stores from "../pages/Stores"
import ProductDetail from "../pages/details/ProductDetail";
import PromoteDetail from "../pages/details/PromoteDetail";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import Info from "../pages/Info";
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
        path: '/product_detail/:id/:cate/:search',
        element: <ProductDetail />
    },
    {
        path: '/contactUs',
        element: <Contact/>
    },
    {
        path: '/faqs',
        element: <Faqs/>
    },
    {
        path: '/promote_detail/:page',
        element: <PromoteDetail/>
    },
    {
        path: '/info/:page',
        element: <Info/>
    }

]
export default routes;