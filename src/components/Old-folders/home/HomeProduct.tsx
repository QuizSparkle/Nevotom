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
      className="relative flex h-[250px] w-[200px] cursor-default flex-col 
      items-center justify-between rounded-md bg-white/70 max-w-[210px]
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
      <div className="flex flex-col items-start gap-1">
        <div className="flex w-full items-center justify-between">
          <strong className="text-left text-[1rem] text-gray-800">
            {props.name}
          </strong>
          <h2 className="flex items-center text-lg font-semibold text-gray-900">
            <BiDollar />
            {props.price}
          </h2>
        </div>
        <p className="w-full text-left text-sm text-gray-600">
          {props.description.slice(0, 30)}
        </p>
        {/* <button
          className="py- 
        rounded-md bg-highlight px-5 text-gray-200 "
        >
          BUY
        </button> */}
      </div>
    </div>
  )
}

export default HomeProduct
