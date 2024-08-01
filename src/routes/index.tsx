import { Suspense, lazy } from "react";
import {
    createHashRouter,
} from "react-router-dom";

const Home = lazy(() => import('../pages/home'));
const CustomerSignup = lazy(() => import('../components/coreComponents/signup/signup'));
const UserLogin = lazy(() => import('../components/coreComponents/signin/login'));
const Grocery = lazy(() => import('../pages/groceryHome'))


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
        path:'/grocery',
        element:<Suspense> <Grocery/> </Suspense>
    }
]);