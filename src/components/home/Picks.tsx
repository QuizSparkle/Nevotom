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
    <article>
      <div
        id="/toppic"
        className="w-full
    border-y border-white/30 px-10 py-4 pb-8"
      >
        <div className="flex flex-col gap-4">
          {/* top picks header */}
          <div className="flex flex-col items-start gap-3">
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
            className="custom-scrollbar mr-auto grid h-max
            grid-flow-row grid-cols-1 gap-2 py-6
            md:grid-cols-3 xl:grid-cols-4 md:justify-start
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
