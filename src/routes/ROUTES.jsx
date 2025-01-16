import MainPage from "../pages/MainPage.jsx";
import Home from "../pages/Home/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
        ]
    }
]