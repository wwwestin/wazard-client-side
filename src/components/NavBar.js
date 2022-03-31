import React from "react";
import { Link } from "react-router-dom"
import './NavBar.css';

function NavBar() {
    return (

        <nav className="header">

            <ul className= "navigation">

            <li className= "parent">

                <Link 
                className="link" to="/">Home</Link>
            </li>

            <li className= "parent">

                <Link 
                className="link"
                to="/my-trips">My Trips</Link>
            </li> 
            </ul>
        </nav> 
    )
}

export default NavBar;

