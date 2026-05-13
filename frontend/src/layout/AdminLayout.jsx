import { Outlet,useLocation } from "react-router-dom";
import { AdminNavigation } from "../component/Navigation";

// import Footer from "./Footer";

export default function AdminLayout() {
    const location = useLocation();
    return (
        <>
            <AdminNavigation />
            <Outlet key={location.pathname}/>
           
        </>
    )
}