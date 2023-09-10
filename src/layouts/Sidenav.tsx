import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faFile, faShoppingCart, faCreditCard, faStore, faHeart, faGift, faWallet, faUser, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Sidenav: React.FC = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Marketplace</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <FontAwesomeIcon icon={faTh} />
            <span>Products</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/postlist">
            <FontAwesomeIcon icon={faFile} />
            <span>Posts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/checkhistory">
            <FontAwesomeIcon icon={faCreditCard} />
            <span>Checkout</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/sell">
            <FontAwesomeIcon icon={faStore} />
            <span>Sell</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/sell">
            <FontAwesomeIcon icon={faUser} />
            <span>Marketers</span>
          </a>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="wallet.html">
            <FontAwesomeIcon icon={faHeart} />
            <span>Favourite</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/rewards">
            <FontAwesomeIcon icon={faGift} />
            <span>Rewards</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="wallet.html">
            <FontAwesomeIcon icon={faWallet} />
            <span>Wallet</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </a>
        </li>
        {/* End Profile Page Nav */}

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </a>
        </li>
        {/* End Contact Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-faq.html">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>F.A.Q</span>
          </a>
        </li>
        {/* End F.A.Q Page Nav */}
      </ul>
    </aside>
    // End Sidebar
  );
};

export default Sidenav;
