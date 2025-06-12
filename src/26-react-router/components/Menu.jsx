import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="d-flex justify-content-center nav text-bg-dark fixed-top">
            <NavLink to="." className="nav-link active">Home</NavLink>
            <NavLink to="about" className="nav-link" >About</NavLink>
            <NavLink to="contacts" className="nav-link" >Contacts</NavLink>
            <NavLink to="courses" className="nav-link" >Courses</NavLink>
            <NavLink to="*" className="nav-link disabled d-none" >Not found</NavLink>
        </nav>
    );
};

export default Menu;