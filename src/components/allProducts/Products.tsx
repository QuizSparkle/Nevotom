import React from 'react';
import AllProducts from './AllProducts';

const Products = () => {
  return (
    <div>
      <div className="pagetitle">
        <h1>Product</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Product</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <div className="col-lg-12">
        <div className="row">
          {/* Recent Sales */}
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Listed <span>| Today</span></h5>
                <h3>Products</h3>
                <AllProducts />
              </div>
            </div>
          </div>
          {/* End Recent Sales */}
        </div>
      </div>
    </div>
  );
};

export default Products;
