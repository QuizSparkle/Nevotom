import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductBox from './ProductBox'

interface Product {
  id_item: number
  imageLink: string
  name: string
  description: string
  price: number
  reward: boolean
}

const CategoryProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          'http://127.0.0.1:8000/api/items/'
        )
        setProducts(response.data)
      } catch (error) {
        console.log('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])
  return (
    <main className="bg-whit/40 flex flex-col space-y-3 px-1">
      {/* Categories !!! */}
      {/* electronics */}
      <section className="flex flex-col space-y-1 p-2">
        <h2 className="text-[1.5rem] font-semibold text-white">Electronics</h2>
        <div
          className="scrollbar-w-[20px] scrollbar-rounded-[30px] scrollbar-hide md:scrollbar-default
          flex space-x-2 overflow-auto overflow-x-scroll whitespace-nowrap
        pb-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-corner-slate-50"
        >
          {products.map((product, index) => (
            <Link
              to={`/product-detail/${product.id_item}`} // Pass item_id as a parameter
              key={index}
            >
              <ProductBox
                key={index}
                img={`http://127.0.0.1:8000/${product.imageLink}`}
                description={product.description}
                price={parseFloat((product.price / 10 ** 18).toFixed(2))}
                name={product.name}
                reward={product.reward}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* nfts/digital assets */}
      <section className="flex flex-col space-y-1 p-2">
        <h2 className="text-[1.5rem] font-semibold text-white">Nft assets</h2>
        <div
          className="scrollbar-w-[20px] scrollbar-rounded-[30px] scrollbar-hide md:scrollbar-default
          flex space-x-2 overflow-auto overflow-x-scroll whitespace-nowrap
        pb-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-corner-slate-50"
        >
          {products.map((product, index) => (
            <Link
              to={`/product-detail/${product.id_item}`} // Pass item_id as a parameter
              key={index}
            >
              <ProductBox
                key={index}
                img={`http://127.0.0.1:8000/${product.imageLink}`}
                description={product.description}
                price={parseFloat((product.price / 10 ** 18).toFixed(2))}
                name={product.name}
                reward={product.reward}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* Clothing & Apparel */}
      <section className="flex flex-col space-y-1 p-2">
        <h2 className="text-[1.5rem] font-semibold text-white">
          Clothing & Apparel
        </h2>
        <div
          className="scrollbar-w-[20px] scrollbar-rounded-[30px] scrollbar-hide md:scrollbar-default
          flex space-x-2 overflow-auto overflow-x-scroll whitespace-nowrap
        pb-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-corner-slate-50"
        >
          {products.map((product, index) => (
            <Link
              to={`/product-detail/${product.id_item}`} // Pass item_id as a parameter
              key={index}
            >
              <ProductBox
                key={index}
                img={`http://127.0.0.1:8000/${product.imageLink}`}
                description={product.description}
                price={parseFloat((product.price / 10 ** 18).toFixed(2))}
                name={product.name}
                reward={product.reward}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* Footwear & Shoes */}
      <section className="flex flex-col space-y-1 p-2">
        <h2 className="text-[1.5rem] font-semibold text-white">
          Footwear & Shoes
        </h2>
        <div
          className="scrollbar-w-[20px] scrollbar-rounded-[30px] scrollbar-hide md:scrollbar-default
          flex space-x-2 overflow-auto overflow-x-scroll whitespace-nowrap
        pb-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-corner-slate-50"
        >
          {products.map((product, index) => (
            <Link
              to={`/product-detail/${product.id_item}`} // Pass item_id as a parameter
              key={index}
            >
              <ProductBox
                key={index}
                img={`http://127.0.0.1:8000/${product.imageLink}`}
                description={product.description}
                price={parseFloat((product.price / 10 ** 18).toFixed(2))}
                name={product.name}
                reward={product.reward}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* Games & Toys */}
      <section className="flex flex-col space-y-1 p-2">
        <h2 className="text-[1.5rem] font-semibold text-white">Games & Toys</h2>
        <div
          className="scrollbar-w-[20px] scrollbar-rounded-[30px] scrollbar-hide md:scrollbar-default
          flex space-x-2 overflow-auto overflow-x-scroll whitespace-nowrap
        pb-2 scrollbar-thin scrollbar-thumb-white/40 scrollbar-corner-slate-50"
        >
          {products.map((product, index) => (
            <Link
              to={`/product-detail/${product.id_item}`} // Pass item_id as a parameter
              key={index}
            >
              <ProductBox
                key={index}
                img={`http://127.0.0.1:8000/${product.imageLink}`}
                description={product.description}
                price={parseFloat((product.price / 10 ** 18).toFixed(2))}
                name={product.name}
                reward={product.reward}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CategoryProducts
