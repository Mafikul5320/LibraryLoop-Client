import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomeLayout from "../layout/HomeLayout";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: HomeLayout
            }
        ]
    }
])