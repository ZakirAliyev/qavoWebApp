import MainPage from "../pages/MainPage.jsx";
import Home from "../pages/Home/index.jsx";
import ContactPage from "../pages/ContactPage/index.jsx";

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
        ]
    }
]