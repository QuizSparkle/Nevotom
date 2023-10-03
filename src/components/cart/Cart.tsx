import React from 'react'
import { cardProductsState } from '../../atoms/CartProducts'
import { useRecoilValue } from 'recoil'

const Cart = () => {
  const cartProducts = useRecoilValue(cardProductsState)

  return (
    <>
      <div className="pagetitle">
        <h1>Product</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Cart</a>
            </li>
            <li className="breadcrumb-item active">Ordered Product</li>
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
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  Recent Sales <span>| Today</span>
                </h5>

                <table className="custom-table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts && cartProducts.length > 0 ? (
                      cartProducts.map((c, i) => (
                        <>
                          <tr>
                            <th scope="row">
                              <a href="/">{i}</a>
                            </th>
                            <td className="font-semibold text-white">
                              {c.name}
                            </td>
                            <td>
                              <a href="/" className="text-gray-300">
                                {c.description}
                              </a>
                            </td>
                            <td>$ {c.price}</td>
                            <td>
                              <span className="badge bg-success ">
                                {!c.reward && 'in progress'}
                              </span>
                            </td>
                          </tr>
                        </>
                      ))
                    ) : (
                      <div className='w-full mt-3'>
                        <h1 className="text-center mx-auto text-[1.4rem] text-white">
                          Your Cart is Empty
                        </h1>
                      </div>
                    )}

                    {/* <tr>
                      <th scope="row">
                        <a href="#">3</a>
                      </th>
                      <td>Ashleigh Langosh</td>
                      <td>
                        <a href="#" className="text-primary">
                          At recusandae consectetur
                        </a>
                      </td>
                      <td>$147</td>
                      <td>
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">4</a>
                      </th>
                      <td>Angus Grady</td>
                      <td>
                        <a href="#" className="text-primar">
                          Ut voluptatem id earum et
                        </a>
                      </td>
                      <td>$67</td>
                      <td>
                        <span className="badge bg-danger">Rejected</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">5</a>
                      </th>
                      <td>Raheem Lehner</td>
                      <td>
                        <a href="#" className="text-primary">
                          Sunt similique distinctio
                        </a>
                      </td>
                      <td>$165</td>
                      <td>
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End Recent Sales */}
        </div>
      </div>
    </>
  )
}

export default Cart
