import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HiViewGrid } from 'react-icons/hi'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { MdViewDay } from 'react-icons/md'
import { formatUnits } from '@ethersproject/units'
import { Link } from 'react-router-dom'
import CategoryProducts from './CategoryProducts'
import { useNotify } from '../helpers/Notification'

interface Product {
  id_item: number
  imageLink: string
  name: string
  description: string
  price: number
  reward: boolean
}

// axios.defaults.baseURL = 'https://18.236.73.110:8000'; // Set your API base URL
// axios.defaults.withCredentials = true; // Enable sending cookies with requests

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { notify } = useNotify()
  console.log('notify !', notify)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://18.236.73.110:8000/api/items/'
        )
        setProducts(response.data)
      } catch (error) {
        console.log('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="py-2">
      {/* <h1 className="my-14 text-center text-4xl font-bold">Shop</h1> */}
      <div className="flex flex-col gap-10">
        {/* inner nav */}
        <div className="rounded-md bg-white/40 p-2 px-6">
          <div className="flex items-center justify-between text-[1rem]">
            {/* left */}
            <div className="flex items-center space-x-3">
              <div
                className="flex items-center space-x-2 border-r-2
               border-gray-400 pr-2"
              >
                <div className="flex items-center space-x-2 ">
                  <HiOutlineAdjustmentsHorizontal />
                  <span className="font-semibold">Filter</span>
                </div>
                <HiViewGrid />
                <MdViewDay />
              </div>
              <div>Showing 1-20 of 40 results</div>
            </div>
            {/* right */}
            <div className="flex items-center space-x-3 text-[1.2rem] font-medium">
              {/* show */}
              <div className="flex  items-center space-x-2">
                <span>Show</span>
                <input
                  type="text"
                  placeholder="16"
                  className="w-[40px] rounded-md bg-black/10 p-1 placeholder:text-gray-600"
                />
              </div>
              {/* sort */}
              <div className="flex items-center space-x-2 text-[1.2rem]">
                <span>Sort By</span>
                <input
                  type="text"
                  placeholder="default"
                  className="rounded-md bg-black/10 p-2 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
        {/* products display */}
        {/* {products.map((product, index) => ( */}
        <CategoryProducts />
        {/* ))} */}
        {/* <DeliveryRibbon /> */}
      </div>
    </div>
  )
}

export default AllProducts
