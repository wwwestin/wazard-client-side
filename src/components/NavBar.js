import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/my-trips">My Trips</Link>
            </li> 
        </nav> 
    )
}

export default NavBar;

