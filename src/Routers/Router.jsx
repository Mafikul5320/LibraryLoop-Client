import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomeLayout from "../layout/HomeLayout";
import CategoryBookPage from "../Pages/CategoryBookPage";
import BookDetails from "../Pages/BookDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: HomeLayout
            },
            {
                path: '/categories/Book',
                Component: CategoryBookPage
            },
            {
                path: '/view-details',
                Component: BookDetails 
            }
        ]
    }
])