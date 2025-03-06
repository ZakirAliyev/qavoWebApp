import MainPage from "../pages/MainPage.jsx";
import Home from "../pages/Home/index.jsx";
import ContactPage from "../pages/ContactPage/index.jsx";
import Sponsor from "../pages/Sponsor/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '/sponsor',
                element: <Sponsor/>
            },
        ]
    }
]