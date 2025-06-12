import {Outlet} from "react-router-dom";
import Menu from "../components/Menu.jsx";

const MainLayout = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default MainLayout;