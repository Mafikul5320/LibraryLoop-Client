import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomeLayout from "../layout/HomeLayout";
import CategoryBookPage from "../Pages/CategoryBookPage";
import BookDetails from "../Pages/BookDetails";
import AddBook from "../Pages/AddBook";
import AllBook from "../Pages/AllBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateBook from "../Pages/UpdateBook";

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
            path: '/categories/:id',
            loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`),
            Component: CategoryBookPage
        },
        {
            path: '/view-details/:id',
            loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`),
            Component: BookDetails
        },
        {
            path: "/add-book",
            Component: AddBook
        },
        {
            path: "/all-Book",
            loader: () => fetch(`http://localhost:3000/books`),
            Component: AllBook
        },
        {
            path: "/Borrowed-Books/:email",
            loader:({params})=>fetch(`http://localhost:3000/Borrow/${params.email}`),
            Component: BorrowedBooks
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: "/register",
            Component: Register
        },
        {
            path: "/update-book/:id",
            loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`),
            Component: UpdateBook
        }
    ]
}
])