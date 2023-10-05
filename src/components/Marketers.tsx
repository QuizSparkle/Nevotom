import React from 'react'
import useimage from '../assets/img/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencilAlt, faDollarSign, faNewspaper, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Topselling from './allProducts/Topselling'
import Sidebar from '../layouts/Sidebar'

const Marketers: React.FC = () => {
  return (
    <>
      <div className="pagetitle">
        <h1>Post</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Marketers</a>
            </li>
            <li className="breadcrumb-item active">Connect</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}

      <div className="col-lg-12">
        <div className="row">
          {/* Reports */}
          
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">Buyers</h5>
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Nihil bland</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Quidem autem</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Id quia</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Laborum cor</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Et dolores</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                  </div>
                  {/* End sidebar recent posts */}
                </div>
              </div>
              {/* End News & Updates */}
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">Sellers</h5>
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">sone tvdx</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">husus autem</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Idan usbw</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">besos corn</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">nacy colen</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                  </div>
                  {/* End sidebar recent posts */}
                </div>
              </div>
              {/* End News & Updates */}
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">Promoters</h5>
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">nab wendy</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">samm yoods</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">winfor grouf</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Sparo jnsxs</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                    <hr />
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">Bannel tabe</a>
                      </h4>
                      <button id="followbtn">Follow</button>
                    </div>
                  </div>
                  {/* End sidebar recent posts */}
                </div>
              </div>
              {/* End News & Updates */}
           
          </div>
          {/* End Reports */}

          <Topselling />
        </div>
      </div>
    </>
  )
}

export default Marketers
