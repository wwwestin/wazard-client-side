import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/my-trips">Where I'm Going</Link>
            </li>
        </nav>
    )
}

export default NavBar;