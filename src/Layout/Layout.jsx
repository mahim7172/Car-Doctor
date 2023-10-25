import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber.jsx";

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;