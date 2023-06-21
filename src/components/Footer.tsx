import logoImg from "../assets/imgs/logo.png";
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                {/* Footer Header */}
                <div className="footer-header">
                </div>
                {/* Footer Content */}
                <div className="footer-box">
                    <div className="footer-logo">
                        <img
                            src={logoImg}
                            alt="logo-img"
                        ></img>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-item">
                            Links
                        </div>
                        <div className="footer-column-item">
                            Home
                        </div>
                        <div className="footer-column-item">
                            Shop
                        </div>
                        <div className="footer-column-item">
                            About
                        </div>
                        <div className="footer-column-item">
                            Become a seller
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-item">
                            Help
                        </div>
                        <div className="footer-column-item">
                            Payment Options
                        </div>
                        <div className="footer-column-item">
                            Returns
                        </div>
                        <div className="footer-column-item">
                            Privacy Policis
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-column-item">
                            Nesletter
                        </div>
                        <div className="footer-email">
                            <input type="text" placeholder="Enter Your Email Address"></input>
                            <div className="footer-email-subscribe">
                                SUBSCRIBE
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                </div>
            </div>
        </div>
    );
};

export default Footer;