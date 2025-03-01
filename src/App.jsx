import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ROUTES} from "./routes/ROUTES.jsx";
import {HelmetProvider} from "react-helmet-async";

const routes = createBrowserRouter(ROUTES);

function App() {

    return (
        <HelmetProvider>
            <RouterProvider router={routes}/>
        </HelmetProvider>
    )
}

export default App
