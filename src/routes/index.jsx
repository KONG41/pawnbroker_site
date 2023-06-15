import React from "react";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Shop from "../pages/Shop"
import Stores from "../pages/Stores"
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
    }

]
export default routes;