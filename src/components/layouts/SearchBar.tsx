import React from 'react'

const SearchBar = () => {
  return (
    <>
      {/* search bar */}
      <div
        className="mt-8 mx-1 hidden w-full flex-1 rounded-md 
          border border-gray-800 md:inline-block px-7"
      >
        <input
          type="search"
          placeholder="searchNFT"
          className="w-full rounded-md bg-white/10 px-4 py-3
        text-white outline-none placeholder:text-gray-300"
        />
      </div>
    </>
  )
}

export default SearchBar
