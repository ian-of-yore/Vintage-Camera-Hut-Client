import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import LogIn from "../../Pages/Authentication/LogIn/LogIn";
import Register from "../../Pages/Authentication/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import MyOrders from "../../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import MyWishlist from "../../Pages/Dashboard/Buyers/MyWishlist/MyWishlist";
import Payment from "../../Pages/Dashboard/Buyers/Payment/Payment";
import AddProduct from "../../Pages/Dashboard/Sellers/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/Sellers/MyProducts/MyProducts";
import AdvertisedProductDetails from "../../Pages/HomePage/AdvertisedProducts/AdvertisedProductDetails";
import OrderProduct from "../../Pages/HomePage/AdvertisedProducts/OrderProduct";
import CategoryProducts from "../../Pages/HomePage/Categories/CategoryProducts";
import Home from "../../Pages/HomePage/Home/Home";
import Products from "../../Pages/Products/Products";
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/category/:id',
                element: <CategoryProducts></CategoryProducts>,
                loader: async ({ params }) => fetch(`https://rangefinder-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/orderProduct/:id',
                element: <PrivateRoute><BuyerRoute><OrderProduct></OrderProduct></BuyerRoute></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://rangefinder-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/payment/:productId',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: async ({ params }) => fetch(`https://rangefinder-server.vercel.app/products/${params.productId}`)
            },
            {
                path: '/product/:id',
                element: <AdvertisedProductDetails></AdvertisedProductDetails>,
                loader: async ({ params }) => fetch(`https://rangefinder-server.vercel.app/products/${params.id}`)
            }
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
                path: '/dashboard/my-wishlist',
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
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