import { useWeb3Modal } from "@web3modal/react";
import React from "react";
import { FaWallet } from "react-icons/fa";

const ConnectBtn = () => {
  const { open, close } = useWeb3Modal();
  return (
    <button
      onClick={() => open()}
      className="flex items-center rounded-md 
          bg-primary p-2 px-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span>
        <FaWallet className="mr-2 text-xl text-white" />
      </span>{" "}
      Connect Wallet
    </button>
  );
};

export default ConnectBtn;
