import React, { useEffect } from "react";
import phoneImg from "../assets/imgs/phone.svg";
import mailBoxImg from "../assets/imgs/mail-box.svg";

import './Header.scss';
import { useLocation } from "react-router-dom";

const Header = () => {
    return (
        // <div>
        //     {
        <header className="nft-header">
            <div className="nft-header-box">
                <div className="nft-header-container">
                    {/* Phone */}
                    <div className="nft-header-phone">
                        <div className="contact-box">
                            <img
                                src={phoneImg}
                                alt="phone-img"
                            />
                        </div>
                        <div className="contact-box-text">
                            <div className="contact-box-title">Call us</div>
                            <div className="contact-box-value">+92 314 61 46 470</div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="nft-header-phone">
                        <div className="contact-box">
                            <img
                                src={mailBoxImg}
                                alt="mail-box-img"
                            />
                        </div>
                        <div className="contact-box-text">
                            <div className="contact-box-title">Send us mail</div>
                            <div className="contact-box-value">nftizemarket@gmail.com</div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="nft-header-search">
                        <input />
                    </div>
                </div>
            </div>
        </header>
        //     }
        // </div>
    );
};

export default Header;
