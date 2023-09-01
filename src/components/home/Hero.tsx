import React from 'react'
import hero from './manfloating.png'
// import nftLogo from '../../assets/nftize-logo.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col px-8 ">
      <div
        className="flex w-full max-w-[1600px] items-center
         justify-center sm:flex-row sm:space-x-36"
      >
        <div className="flex-full flex w-full flex-col items-start space-y-4">
          {/* <h1 className="text-3xl font-semibold text-white">NFTizeMarket</h1> */}
          <p className="w-full text-left xl:text-[2.6rem] text-[1.8rem] font-semibold text-gray-200">
            NFT application that brings together{' '}
            <span className="text-highlight">affiliate marketers</span> and
            businesses
            {/* to sell products Incorporating NFT rewards and incentives
            to both buyers and sellers. */}
          </p>
          <Link
            to="/allproducts"
            className="rounded-md bg-highlight p-2 
          px-7 text-black transition-all hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
        <div className="bg-primary p-2">
          <img src={hero} alt="cartLogo" className="w-[600px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero
