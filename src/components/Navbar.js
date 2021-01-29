import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Posts</Link>
                <Link to="/">Gallery</Link>
            </div>
        </nav>
    );
}

export default Navbar;