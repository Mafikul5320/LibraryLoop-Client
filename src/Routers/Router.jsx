import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomeLayout from "../layout/HomeLayout";
import AddBook from "../Pages/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateBook from "../Pages/UpdateBook";
import PrivateRouter from "../components/PrivateRouter";
import NotFound from "../Pages/NotFound";
import BookDetailsPage from "../Pages/BookDetailsPage";
import AllBookPage from "../Pages/AllBookPage";
import CategoryBookDataLoad from "../Pages/CategoryBookDataLoad";
import UpdateBookPage from "../Pages/UpdateBookPage";

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
                // loader: ({ params }) => fetch(`https://assignment-11-server-zeta-orcin.vercel.app/books/${params.id}`),
                element: <PrivateRouter>
                    <CategoryBookDataLoad></CategoryBookDataLoad>
                </PrivateRouter>
            },
            {
                path: '/view-details/:id',
                // loader: ({ params }) => fetch(`https://assignment-11-server-zeta-orcin.vercel.app/books/${params.id}`),
                element: <PrivateRouter>
                    <BookDetailsPage></BookDetailsPage>
                </PrivateRouter>
            },
            {
                path: "/add-book",
                element: <PrivateRouter>
                    <AddBook></AddBook>
                </PrivateRouter>
            },
            {
                path: "/all-Book",
                // loader: () => fetch(`https://assignment-11-server-zeta-orcin.vercel.app/books`),
                element: <PrivateRouter>
                    <AllBookPage></AllBookPage>
                </PrivateRouter>
            },
            {
                path: "/Borrowed-Books/:email",
                // loader: ({ params }) => fetch(`https://assignment-11-server-zeta-orcin.vercel.app/Borrow/${params.email}`),
                element: <PrivateRouter>
                    <BorrowedBooks></BorrowedBooks>
                </PrivateRouter>
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
                loader: ({ params }) => fetch(`https://assignment-11-server-zeta-orcin.vercel.app/books/${params.id}`),
                element: <PrivateRouter>
                    <UpdateBookPage></UpdateBookPage>
                </PrivateRouter>
            },

        ],

    },
    {
        path: "*",
        Component: NotFound
    },
])