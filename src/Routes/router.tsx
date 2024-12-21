import AboutMe from "@/components/About";
import ContactPage from "@/components/Contact";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ErrorPage from "@/ErrorPage";
import RootLayout from "@/Layout/RootLayout";
import Home from "@/pages/Home";
import Portfolios from "@/pages/Portfolios";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
       Component: RootLayout ,
       errorElement: <ErrorPage /> ,
       children: [
        {
            path: "/",
            Component: () => <Home />
        },
        {
            path:"/services",
            Component: () => <Services />  , 
        },
        {
            path: "/portfolio",
            Component: () => <Portfolios />
        },
        {
            path:"/testimonial",
            Component: () => <Testimonial />  ,
        },
        {
            path: "/about",
            Component: () => <AboutMe />
        },
        // Add more routes here as needed, for example:
        {
            path: "/contact",
            Component: () => <ContactPage />
        }
       ]
    }
])

export default router;