import React from "react";
import {PiShieldStarLight} from "react-icons/pi";
import {BiDollar} from "react-icons/bi";
import { Link } from "react-router-dom";

type props = {
  name: string;
  img: string;
  description: string;
  price: number;
  reward: boolean;
};

const HomeProduct = (props: props) => {
  return (
    <div
      className="relative flex h-[260px] min-w-[270px] cursor-default flex-col items-center
     justify-between p-2 transition-all ease-linear hover:shadow-md border-gray-100 border-l"
    >
      <Link to="/rewards">
      <PiShieldStarLight 
       className={`text-yellow-700 hover:text-yellow-500 cursor-pointer
       font-bold text-3xl ${props.reward ? 'visible' : 'invisible' } absolute top-1 left-2`} />
      </Link>
      <img src={props.img} className="w-[140px] h-[140px]" alt={props.name} />
      <div className="flex flex-col items-start gap-1">
        <strong className="text-xl text-gray-900">{props.name}</strong>
        <p className="text-left text-sm text-gray-600">{props.description}</p>
        <h2 className="text-lg text-black flex items-center">
          <BiDollar />
           {props.price}</h2>
      </div>
    </div>
  );
};

export default HomeProduct;
