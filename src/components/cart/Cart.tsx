import React from 'react'
import OrderedBlock from './OrderedBlock'
import DeliveryRibbon from '../layouts/DeliveryRibbon'

interface OrderProduct {
  name: string
  price: number
  quantity: number
  subtotal: number
  rewards: number
  status: string
  img: string
}

// Assuming you have a component called `Cart` with a prop `ordered`
interface CartProps {
  ordered: OrderProduct[]
  listed: OrderProduct[]
}

const Cart: React.FC<CartProps> = ({ ordered }) => {
  return (
    <div className="p-4 px-2">
      <main className="flex flex-col items-center gap-6">
        <h1 className="mt-10 text-center text-4xl font-bold">Cart</h1>
        <section className="mx-auto flex w-[1000px] items-start justify-between">
          {/* ordered products */}
          <div className="flex flex-col gap-4">
            <h2 className="text-left text-2xl font-semibold">
              Ordered Products
            </h2>
            {/* main */}
            <div className="flex flex-col items-start gap-3">
              <div
                className="flex items-center justify-end space-x-10
              rounded-md bg-yellow-100 py-1 pl-20 pr-6"
              >
                <strong>Product</strong>
                <strong>Price</strong>
                <strong>Quantity</strong>
                <strong>Subtotal</strong>
                <strong>Rewards</strong>
                <strong>Status</strong>
              </div>
              <div className="my-4 flex flex-col gap-6">
                {ordered.map((p, i) => (
                  <OrderedBlock
                    key={p.quantity}
                    name={p.name}
                    img={p.img}
                    price={p.price}
                    quantity={p.quantity}
                    status={p.status}
                    subtotal={p.subtotal}
                    rewards={p.rewards}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* cart details */}
          <article className="flex flex-col gap-2 bg-yellow-100 px-16 py-2">
            <h2 className="text-xl font-semibold">Cart Totals</h2>
            <div className="flex w-[180px] flex-col gap-3">
              <div className="flex justify-between">
                <h2>Subtotal</h2>
                <h3 className="text-gray-500">$8000</h3>
              </div>
              <div className="flex justify-between">
                <h2>Total</h2>
                <h3 className="text-orange-400">$9000</h3>
              </div>
              <div className="flex justify-between">
                <h2>Rewards</h2>
                <h3 className="text-orange-400">9000 TOM</h3>
              </div>
            </div>
            <button
              className="mt-4 rounded-md border 
            border-black p-1 px-4"
            >
              Check Out
            </button>
          </article>
        </section>
      </main>
      <DeliveryRibbon />
    </div>
  )
}

export default Cart
