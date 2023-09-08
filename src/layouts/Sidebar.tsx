import React from 'react';
import useimage from '../assets/img/news-2.jpg'

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      {/* Recent Activity */}
      <div className="card info-card revenue-card">
        <div className="card-body">
          <h5 className="card-title">Balance:</h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="fas fa-dollar-sign"></i> {/* FontAwesome icon */}
            </div>
            <div className="ps-3">
              <h6>$3,264</h6>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="fas fa-dollar-sign"></i> {/* FontAwesome icon */}
            </div>
            <div className="ps-3">
              <h6>$3,264</h6>
            </div>
          </div>
        </div>
      </div>
      {/* End Recent Activity */}

      {/* News & Updates Traffic */}
      <div className="card">
        <div className="card-body pb-0">
          <h5 className="card-title">Buyers &amp; Sellers</h5>
          <div className="news">
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Nihil blanditiis</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Quidem autem</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Id quia</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Laborum cor</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Et dolores</a></h4>
              <button id="followbtn">Follow</button>
            </div>
          </div>
          {/* End sidebar recent posts */}
        </div>
      </div>
      {/* End News & Updates */}
    </div>
  );
};

export default Sidebar;
