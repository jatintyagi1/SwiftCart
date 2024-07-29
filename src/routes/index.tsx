import { Suspense, lazy } from "react";
import {
    createHashRouter,
} from "react-router-dom";

const Home = lazy(() => import('../customer/pages/home'));
const CustomerSignup = lazy(() => import('../customer/components/coreComponents/signup/signup'));
const UserLogin = lazy(() => import('../customer/components/coreComponents/signin/login'));
const SellerHome = lazy(() => import('../seller/pages/home'));
const Grocery = lazy(() => import('../customer/pages/groceryhome'))


export const router = createHashRouter([
    {
        path: "/",
        element: <Suspense> <Home/> </Suspense>,
    },
    {
        path: "/sign-up",
        element: <Suspense> <CustomerSignup/> </Suspense>,
    },
    {
        path: "/user-login",
        element: <Suspense> <UserLogin/> </Suspense>
    },
    {
        path:'/seller',
        element: <Suspense><SellerHome/></Suspense>
    },
    {
        path:'/grocery',
        element:<Suspense> <Grocery/> </Suspense>
    }
]);