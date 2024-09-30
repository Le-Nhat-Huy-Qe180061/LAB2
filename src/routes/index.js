

import LayoutDefault from "../layout/LayoutDefault";
import Cart from "../pages/cart";
import Error404 from "../pages/Error404";
import Home from "../pages/home";

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "*",
                element: <Error404 />
            },
        ]
    },
    {
        path: '/cart',
        element: <Cart />
    }
]