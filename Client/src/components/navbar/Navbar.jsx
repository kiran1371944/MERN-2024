import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <header>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        CodeBucks
                        {/* <i className="fa fa-code"></i> */}
                    </NavLink>

                    <nav>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/services"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/logout"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    Logout
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/signup"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}>
                                    SignUp
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
