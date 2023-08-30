import React from 'react'
import hero from './manfloating.png'
// import nftLogo from '../../assets/nftize-logo.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-black/60">
      <div
        className="flex h-[450px] w-full max-w-[1600px] flex-col-reverse items-center justify-center 
      gap-10  sm:h-[480px] 
    sm:flex-row sm:space-x-36"
      >
        <div className="flex flex-col items-start space-y-8">
          <h1 className="text-6xl text-white">NFTizeMarket</h1>
          <p className="text-left text-2xl text-gray-200">
            NFT application that brings \ together{' '}
            <span className="text-highlight">affiliate marketers</span> and
            businesses to sell products Incorporating NFT rewards and incentives
            to both buyers and sellers.
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
