import React from "react";

type props = {
  name: string;
  img: string;
  description: string;
  price: number;
};

const HomeProduct = (props: props) => {
  return (
    <div
      className="flex h-[260px] cursor-default flex-col
     items-center justify-between p-2 hover:scale-105 hover:shadow-md md:w-[200px]"
    >
      <img src={props.img} className="w-[140px]" alt={props.name} />
      <div className="flex flex-col items-start gap-1">
        <strong className="text-md text-gray-700">{props.name}</strong>
        <p className="text-left text-sm text-gray-600">{props.description}</p>
        <h2 className="text-lg text-black">$ {props.price}</h2>
      </div>
    </div>
  );
};

export default HomeProduct;
