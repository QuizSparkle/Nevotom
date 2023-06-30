import React from 'react'
import nft from '../../assets/Coin-No-BG.png'
import ftm from '../../assets/ftm.png'

const Rewards = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-4xl font-semibold">Rewards</h1>

      {/* NFT price details */}
      <article className="flex flex-col gap-2">
        {/* ftm */}
        <div className="flex space-x-3">
          <span className="flex items-center space-x-1 text-[1.1rem]">
            <img src={nft} alt="nft" className="w-[35px]" />
            <p>0.0034</p>
          </span>
          <p>-------------------------------------------</p>
          <span className="flex items-center space-x-1 text-[1.1rem]">
            <img src={ftm} alt="nft" className="w-[35px]" />
            <p>0.0034</p>
          </span>
        </div>
      </article>
    </div>
  )
}

export default Rewards
