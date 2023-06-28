import React from "react";
import InputField from "../checkout/InputField";
import coinbg from "../../assets/Coin-bg.png";

const SellProduct = () => {
  return (
    <div>
      <h1 className="my-10 text-center text-4xl">SELL</h1>
      <div className="mx-auto flex justify-between py-6 md:w-[700px]">
        {/* left */}
        <div className="flex flex-col gap-4">
          <InputField dropDown={false} field="Item name" />
          <InputField dropDown={false} field="Description" />
          <InputField dropDown={false} field="Price" />
          <InputField dropDown={false} field="Quantity" />
          <InputField dropDown={false} field="Posting Fee" />
          {/* product Images */}
          <div className="my-4 flex flex-col gap-3">
            <h4 className="text-left font-semibold">Product Images</h4>
            <input
              type="file"
              alt="selectImage"
              className="rounded-md bg-gray-300 p-3 px-4"
            />
          </div>
          <button
            className="w-[250px] rounded-md border border-black
           bg-white p-2 transition-colors hover:bg-primary hover:text-white"
          >
            Sell
          </button>
        </div>
        {/* right */}
        <div>
          <img
            src={coinbg}
            className="w-[300px] 
              rounded-full"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
