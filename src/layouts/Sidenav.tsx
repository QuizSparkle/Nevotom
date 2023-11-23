import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTh,
  faFile,
  faShoppingCart,
  faCreditCard,
  faStore,
  faHeart,
  faGift,
  faWallet,
  faUser,
  faEnvelope,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { useRecoilValue } from 'recoil'
import { sidebarState } from '../atoms/SidebarState'


const Sidenav: React.FC = () => {
  const sidebarStateValue = useRecoilValue(sidebarState)
  return (
    <aside
      id="sidebar"
      className={`sidebar ${sidebarStateValue && 'ml-[300px]'}`}
    >
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Marketplace</li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/">
            <FontAwesomeIcon icon={faTh} />
            <span> Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/postlist">
            <FontAwesomeIcon icon={faFile} />
            <span>Posts</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/checkhistory">
            <FontAwesomeIcon icon={faCreditCard} />
            <span>Checkout</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/sell">
            <FontAwesomeIcon icon={faStore} />
            <span>Sell</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/marketers">
            <FontAwesomeIcon icon={faUser} />
            <span>Marketers</span>
          </Link>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/favourites">
            <FontAwesomeIcon icon={faHeart} />
            <span>Favourite</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/reward">
            <FontAwesomeIcon icon={faGift} />
            <span>Rewards</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/wallet">
            <FontAwesomeIcon icon={faWallet} />
            <span>Wallet</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/profile">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </Link>
        </li>
        {/* End Profile Page Nav */}

        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </Link>
        </li>
        {/* End Contact Page Nav */}
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/faq">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>F.A.Q</span>
          </Link>
        </li>
        {/* End F.A.Q Page Nav */}
      </ul>
    </aside>
    // End Sidebar
  )
}

export default Sidenav
