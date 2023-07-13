import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/dogs/whiskey">Whiskey</Link>
            <Link to="/dogs/duke">Duke</Link>
            <Link to="/dogs/perry">Perry</Link>
            <Link to="/dogs/tubby">Tubby</Link>
        </nav>
    );
}

export default Navbar;