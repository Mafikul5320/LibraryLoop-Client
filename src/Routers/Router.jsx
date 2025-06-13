import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomeLayout from "../layout/HomeLayout";
import CategoryBookPage from "../Pages/CategoryBookPage";
import BookDetails from "../Pages/BookDetails";
import AddBook from "../Pages/AddBook";
import AllBook from "../Pages/AllBook";
import BorrowedBooks from "../Pages/BorrowedBooks";

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
            },
            {
                path: "/add-book",
                Component: AddBook
            },
            {
                path: "/all-Book",
                Component : AllBook
            },
            {
                path: "/Borrowed-Books",
                Component: BorrowedBooks
            }
        ]
    }
])