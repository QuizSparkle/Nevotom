import React from 'react'
import { HiViewGrid } from 'react-icons/hi'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { MdViewDay } from 'react-icons/md'
import p1 from '../../assets/products/blackoil.png'
import p2 from '../../assets/products/grayoil.png'
import p3 from '../../assets/products/pipe.png'
import p4 from '../../assets/products/redoil.png'
import p5 from '../../assets/products/tire1.png'
import p6 from '../../assets/products/tire2.png'
import HomeProduct from '../home/HomeProduct'
import DeliveryRibbon from '../layouts/DeliveryRibbon'
import tire from '../../assets/products/tire1.png'
import { Link } from 'react-router-dom'

const products = [
  {
    img: tire,
    name: 'MIRAGE MR-AT172 285/65',
    description:
      'The MIRAGE MR-AT172 285/65 R17 is a tyre developed with advanced tread pattern',
    price: 500,
    reward: true,
  },
  {
    img: p2,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: false,
  },
  {
    img: p3,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: p1,

    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: false,
  },
  {
    img: p4,

    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: p5,
    name: 'Product4',
    description: 'Part Number: 8-38-383-393, shape:Ai ',
    price: 3000,
    reward: false,
  },
  {
    img: p6,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai ',
    price: 3000,
    reward: true,
  },
  {
    img: p1,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: p3,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: p2,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: false,
  },
  {
    img: p5,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: p1,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: p6,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: false,
  },
]

const AllProducts = () => {
  return (
    <div className="py-6">
      <h1 className="my-14 text-center text-4xl font-bold">Shop</h1>
      <div className="flex flex-col gap-10">
        {/* inner nav */}
        <div className="bg-[#D4D4D4] p-4 px-6">
          <div className="flex items-center justify-between">
            {/* left */}
            <div className="flex items-center space-x-3">
              <div
                className="flex items-center space-x-2 border-r-2
               border-gray-400 pr-2"
              >
                <p className="flex items-center space-x-2 ">
                  <HiOutlineAdjustmentsHorizontal />
                  <span> Filter</span>
                </p>
                <HiViewGrid />
                <MdViewDay />
              </div>
              <p>Showing 1-20 of 40 results</p>
            </div>
            {/* right */}
            <div className="flex space-x-3">
              {/* show */}
              <div className="flex items-center space-x-2">
                <h4>Show</h4>
                <input
                  type="text"
                  placeholder="16"
                  className="w-[40px] p-2 text-gray-400"
                />
              </div>
              {/* sort */}

              <div className="flex items-center space-x-2">
                <h4>Sort By</h4>
                <input
                  type="text"
                  placeholder="Default"
                  className="p-2 text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
        {/* products display */}
        <main className="mx-auto grid w-[1300px] grid-cols-4 gap-4">
          {products.map((product) => (
            <Link to="/product-detail">
              <HomeProduct
                img={product.img}
                description={product.description}
                price={product.price}
                name={product.name}
                reward={product.reward}
              />
            </Link>
          ))}
        </main>
        <DeliveryRibbon />
      </div>
    </div>
  )
}

export default AllProducts
