import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import { NavLinks } from "./NavLinks";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo" />
            <NavLinks />
        </nav>
    );
}

export default Navbar;