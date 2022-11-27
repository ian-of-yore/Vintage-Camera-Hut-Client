import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import LogIn from "../../Pages/Authentication/LogIn/LogIn";
import Register from "../../Pages/Authentication/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import MyOrders from "../../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Buyers/Payment/Payment";
import AddProduct from "../../Pages/Dashboard/Sellers/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/Sellers/MyProducts/MyProducts";
import CategoryProducts from "../../Pages/HomePage/Categories/CategoryProducts";
import Home from "../../Pages/HomePage/Home/Home";
import PageNotFound from "../../Pages/Shared/PageNotFound/PageNotFound";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/payment/:productId',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/products/${params.productId}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])