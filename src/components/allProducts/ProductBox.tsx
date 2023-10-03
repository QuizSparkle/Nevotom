import { createContext, useState } from 'react'
import { RiShieldStarFill } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { cardProductsState } from '../../atoms/CartProducts'
import { useRecoilState } from 'recoil'
import { useNotify } from '../helpers/ContextState'

type props = {
  id: any
  name: string
  img: string
  description: string
  price: number
  reward: boolean
}

const ProductBox = (props: props) => {
  const [cardProduct, setCardProduct] = useRecoilState(cardProductsState)
  const { setNotify } = useNotify()

  const addToCart = () => {
    const cProduct = {
      name: props.name,
      img: props.img,
      description: props.description,
      price: props.price,
      reward: props.reward,
    }
    setCardProduct((prevProducts) => [...prevProducts, cProduct])

    // ! for notification
    setNotify(true)

    setTimeout(() => {
      setNotify(false)
    }, 3000)
  }

  const navigation = useNavigate()

  return (
    <div
      // onClick={() => navigation('/product-detail')}
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
        <Link
          to={`/product-detail/${props.id}`} // Pass item_id as a parameter
        >
          <img
            src={props.img}
            className="h-[140px] w-[140px] rounded-md"
            alt={props.name}
          />
        </Link>
      </div>
      <div className="flex h-max w-full flex-col items-start gap-1 px-1">
        <div className="flex w-full">
          <Link
            to={`/product-detail/${props.id}`} // Pass item_id as a parameter
            className="flex w-full items-center justify-between hover:text-blue-600"
          >
            <strong className="text-left text-[1rem] text-gray-800 hover:text-inherit">
              {props.name.slice(0, 15)}
            </strong>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 hover:text-inherit">
              <BiDollar />
              {props.price}
            </h2>
          </Link>
        </div>
        {/* Description */}
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
        rounded-md bg-green-600 px-2 text-[0.9rem] font-semibold text-gray-200 hover:text-gray-700 "
        >
          Buy
        </button>
        <button
          onClick={addToCart}
          className="py- 
        rounded-md bg-red-600 px-2 text-[0.9rem] font-semibold text-gray-200 hover:text-gray-700 "
        >
          Add To Card
        </button>
      </div>
    </div>
  )
}

export default ProductBox
