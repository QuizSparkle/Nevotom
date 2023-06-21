import React from "react";
import logoImg from "../assets/imgs/logo.png";
import contactIcon from "../assets/imgs/contact.svg";
import searchIcon from "../assets/imgs/search.svg";
import shopingCardIcon from "../assets/imgs/shoping-card.svg"
import heartIcon from "../assets/imgs/heart.svg"
import './NavBar.scss';

function Navbar() {
    return (
        <div className="menu">
            {/* Logo */}
            <div className="menu-logo">
                <img
                    src={logoImg}
                    alt="logo-img" />
            </div>
            {/* Menu Buttons */}
            <div className="menu-container">
                <div className="menu-btn-container">
                    <div className="menu-btn">
                        Home
                    </div>
                    <div className="menu-btn">
                        Shop
                    </div>
                    <div className="menu-btn">
                        About
                    </div>
                    <div className="menu-btn">
                        Log In
                    </div>
                    <div className="menu-btn">
                        Sign In
                    </div>
                </div>
                {/* Icons */}
                <div className="menu-right">
                    <div className="icon-container">
                        <div className="icon">
                            <img
                                src={contactIcon}
                                alt="contact-icon" />
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon">
                            <img
                                src={searchIcon}
                                alt="search-icon" />
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon">
                            <img
                                src={heartIcon}
                                alt="heart-icon" />
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon">
                            <img
                                src={shopingCardIcon}
                                alt="shopping-card-icon" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;
