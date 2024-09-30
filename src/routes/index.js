

import LayoutDefault from "../layout/LayoutDefault";
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
                path: "/cart",
                
            },
            {
                path: "*",
                element: <Error404 />
            },
        ]
    }
]