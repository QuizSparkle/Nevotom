import React from 'react'
import { RiShieldStarFill } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

type props = {
  name: string
  img: string
  description: string
  price: number
  reward: boolean
}

const HomeProduct = (props: props) => {
  const navigation = useNavigate()
  return (
    <div
      onClick={() => navigation('/product-detail')}
      className="relative flex h-[250px] w-[200px] max-w-[210px] cursor-default flex-col 
      items-center justify-between overflow-hidden rounded-md bg-white/70
      p-2 transition-all ease-linear hover:shadow-md xl:w-[280px]"
    >
      <Link to="/rewards">
        <RiShieldStarFill
          className={`cursor-pointer text-3xl font-bold
       text-yellow-700 hover:text-yellow-500 ${
         props.reward ? 'visible' : 'invisible'
       } absolute left-2 top-1`}
        />
      </Link>
      <div className="flex w-full justify-center bg-black/30 ">
        <img
          src={props.img}
          className="h-[140px] w-[140px] rounded-md"
          alt={props.name}
        />
      </div>
      <div className="flex h-max w-full flex-col items-start gap-1 px-1">
        <div className="flex w-full items-center justify-between">
          <strong className="text-left text-[1rem] text-gray-800">
            {props.name.slice(0, 15)}
          </strong>
          <h2 className="flex items-center text-lg font-semibold text-gray-900">
            <BiDollar />
            {props.price}
          </h2>
        </div>
        <div className="h-max w-full overflow-hidden">
          <p className="w-full text-center text-sm text-gray-600">
            {props.description.slice(0, 30)}
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex w-full items-start justify-between">
        <button
          className="py- 
        rounded-md bg-green-600 hover:text-gray-700 px-2 text-[0.9rem] font-semibold text-gray-200 "
        >
          Buy
        </button>
        <button
          className="py- 
        rounded-md bg-red-600 px-2 hover:text-gray-700 text-[0.9rem] font-semibold text-gray-200 "
        >
          Post
        </button>
      </div>
    </div>
  )
}

export default HomeProduct
