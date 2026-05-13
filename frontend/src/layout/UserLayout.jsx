import { Outlet } from "react-router-dom";
import { Navigation } from "../component/Navigation";
import { useLocation } from "react-router-dom";

// import Footer from "./Footer";
import PageIntro from "../component/PageIntro";

export default function UserLayout() {
    const location = useLocation();
    return (
        <>
            {/* <PageIntro /> */}
            <Navigation />
            <Outlet key={location.pathname}/>
            
        </>
    )
}