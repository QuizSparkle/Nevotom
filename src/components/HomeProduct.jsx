import React from "react";

const HomeProduct = ({ name, img, description, price }) => {
  return (
    <div
      className="flex h-[260px] cursor-default flex-col
     items-center justify-between p-2 hover:scale-105 hover:shadow-md md:w-[200px]"
    >
      <img src={img} className="w-[140px]" alt={name} />
      <div className="flex flex-col items-start gap-1">
        <strong className="text-md text-gray-700">{name}</strong>
        <p className="text-left text-sm text-gray-600">{description}</p>
        <h2 className="text-lg text-black">$ {price}</h2>
      </div>
    </div>
  );
};

export default HomeProduct;
