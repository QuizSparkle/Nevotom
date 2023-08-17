import React from 'react'
import HomeProduct from './HomeProduct'
import tire from '../../assets/products/tire1.png'

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
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: false,
  },
  {
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: false,
  },
  {
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
  {
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai ',
    price: 3000,
    reward: true,
  },
  {
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai ',
    price: 3000,
    reward: true,
  },
  {
    img: tire,
    name: 'Brake System',
    description: 'Part Number: 8-38-383-393, shape:Ai',
    price: 3000,
    reward: true,
  },
]

const Picks = () => {
  return (
    <article className='bg-black/60 flex justify-center items-center'>
    <div id="/toppic" className="w-full max-w-[1600px]
    border-y border-white/30  px-10 py-16 pb-24">
      <div className="flex flex-col gap-16">
        {/* top picks header */}
        <div className="flex items-start flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-100">
            Top Picks For You
          </h1>
          {/* <p className="text-sm text-gray-200">
            Find a bright ideal to suit your taste with our great selection of
            products
          </p> */}
        </div>
        {/* products */}
        <div
          className="custom-scrollbar mx-auto flex h-max w-full max-w-[1400px] flex-col 
        justify-center gap-4 space-x-1 overflow-x-auto overflow-y-auto
         py-10 md:flex-row md:justify-start
         "
        >
          {products.map((product) => (
            <HomeProduct
              key={product.price}
              img={product.img}
              description={product.description}
              price={product.price}
              name={product.name}
              reward={product.reward}
            />
          ))}
        </div>
      </div>
    </div>
    </article>
  )
}

export default Picks
