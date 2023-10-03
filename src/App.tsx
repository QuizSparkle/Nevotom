import React, { useEffect, FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import tire from './assets/products/tire1.png'
import ProductDetails from './components/productDetails/Old-ProductDetails'
import CartPopup from './components/productDetails/CartPopup'
import Footer from './layouts/Footer'
import AllProducts from './components/allProducts/AllProducts'
import Sell from './components/sellProduct/sell'
import Cart from './components/cart/Cart'
import Notification from './components/notification/Notification'
import Checkout from './components/checkout/Checkout'
import Checkhistory from './components/checkout/Checkhistory'
import Postdetails from './components/post/Postdetails'
import { BuyTomForm } from './components/functionalities/BuyTomAndDisplayBalance'
import Postlist from './components/post/Postlist'
import Headnav from './layouts/Headnav'
import Sidenav from './layouts/Sidenav'
import Marketers from './components/Marketers'
import Profile from './components/profile/Profile'
import Wallet from './components/wallet/Wallet'
import Reward from './components/rewards/Reward'
import Favourites from './components/allProducts/Favourites'
import Products from './components/allProducts/Products'
import Notfound_page from './components/Notfound_page'
// sampleOrderedProducts

// Css files
import './assets/vendor/simple-datatables/style.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/quill/quill.bubble.css'
import './assets/vendor/quill/quill.snow.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import 'react-notifications/lib/notifications.css' //react-notifications
import { UserProvider } from './components/helpers/Notification'

const orderProducts = [
  {
    img: tire,
    name: 'MIRAGE MR-AT172 285/65',
    quantity: 1,
    price: 500,
    subtotal: 60262,
    rewards: 2,
    status: 'Processing',
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 2,
    subtotal: 60262,
    rewards: 2,
    status: 'Processing',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 1,
    subtotal: 30131,
    rewards: 1,
    status: 'Dispatched',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 4,
    subtotal: 120524,
    rewards: 4,
    status: 'Paid',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 2,
    subtotal: 60262,
    rewards: 2,
    status: 'Processing',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 1,
    subtotal: 30131,
    rewards: 1,
    status: 'Dispatched',
    img: tire,
  },
]

const App: FC = () => {

  useEffect(() => {
    fetch('https://18.236.73.110:8000/api/endpoint') // Replace `endpoint` with the actual API endpoint in your Django app
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log('data: ', data)
      })
      .catch((error) => {
        // Handle errors
        console.error(error)
      })
  }, [])
  return (
    <div className="">
      <UserProvider>
        <Router>
          <Headnav />
          <Sidenav />
          <main id="main" className="main">
            <section className="section dashboard">
              <div className="row">
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/postlist" element={<Postlist />} />
                  <Route path="/checkhistory" element={<Checkhistory />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route path="/postdetails" element={<Postdetails />} />
                  <Route path="/reward" element={<Reward />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route
                    path="/checkout"
                    element={
                      <Checkout
                      // productName="product1"
                      // productPrice={40}
                      // subtotal={20}
                      // total={60}
                      />
                    }
                  />
                  <Route
                    path="/product-detail/:item_id"
                    element={<ProductDetails />}
                  />
                  <Route path="/allproducts" element={<AllProducts />} />
                  <Route path="/sell" element={<Sell />} />
                  <Route path="/buytom" element={<BuyTomForm />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/marketers" element={<Marketers />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/cartmodal"
                    element={
                      <CartPopup
                        handleClose={() => false}
                        // handleClose="sdfsdf"
                        isShow={true}
                        // goodsCount={12}
                      />
                    }
                  />
                  <Route Component={Notfound_page} />
                </Routes>
              </div>
            </section>
          </main>
          <Footer />
        </Router>
    
      </UserProvider>
    </div>
  )
}

export default App
