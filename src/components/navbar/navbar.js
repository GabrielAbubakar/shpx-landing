import React from "react";
import './navbar.scss';
import Search from "../../assets/search-icon.svg"
import Tray from "../../assets/tray-icon.svg"
import Hamburger from "../../assets/hamburger.svg"


const Navbar = () => {

    return (
        <nav className="navigation">

                <p>SHPX</p>
                <ul className="navigation_links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
                <div className="navigation_icons">
                    <span>
                        <img src={Search} alt="search-icon"  />
                    </span>
                    <span>
                        <img src={Tray} alt="tray-icon"  />
                    </span>
                </div>
                <div className="hamburger">
                    <img src={Hamburger} alt="hamburger-icon" />
                </div>
        </nav>
    )
}

export default Navbar;