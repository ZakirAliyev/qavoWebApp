import {Outlet} from "react-router";
import ScrollToTop from "../components/ScrollToTop/index.jsx";

function MainPage() {
    return (
        <>
            <ScrollToTop/>
            <Outlet/>
        </>
    );
}

export default MainPage;