import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import AllBooks from "../Pages/Books/AllBooks";
import BookDetails from "../Pages/Books/BookDetails";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Pages/Auth/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import About from "../Pages/About";
import PrivateRoute from "./PrivateRoute";
import Librarian from "../Pages/Auth/Librarian";
import SendBook from "../Pages/SendBook";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBooks from "../Pages/Dashboard/MyBooks";
import Payment from "../Pages/Dashboard/Payment";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/PaymentCancelled";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/latest-books"),
        Component: Home,
      },
      {
        path: "/all-books",
        loader: () => fetch("http://localhost:3000/books"),
        Component: AllBooks,
      },
      {
        path: "/books/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`),
        Component: BookDetails,
      },
      {
        path: '/send-book',
        Component: SendBook,
      },
      {
        path: '/order-book',
        element: <PrivateRoute><Librarian></Librarian></PrivateRoute>,
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },

    ]
  },
  {
    path: '/my-dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'my-books',
        Component: MyBooks,
      },
      {
        path: 'payment/:paymentId',
        Component: Payment,
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess,
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled,
      }
    ]
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: "/*",
    Component: ErrorPage,
  }
]);

export default router;