import { useState, useEffect } from "react";
import { useEthers, useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import Marketplace from "../../chain-info/out/Marketplace.sol/Marketplace.json";
import ERC20 from "../../chain-info/out/ERC20.sol/ERC20.json";

export const useRegisterUser = () => {
  const { chainId, account, library } = useEthers();

  const contractAddress = "0xA9729e8D472345B02eB1C61DD86f692A6EA84fF8";
  const contractABI = Marketplace.abi;
  const marketplaceInterface = new utils.Interface(contractABI);

  const contract = new Contract(contractAddress, marketplaceInterface);

  const linkAddress = "0xfafedb041c0dd4fa2dc0d87a6b0979ee6fa7af5f"; 
  const erc20ABI = ERC20.abi;
  const erc20Interface = new utils.Interface(erc20ABI);
  const erc20Contract = new Contract(linkAddress, erc20Interface);

  const { send: RegisterSend, state: RegisterState } = useContractFunction(
    contract,
    "registerUser",
    {
      transactionName: "Register user",
    }
  );
  const Register = () => {
    return RegisterSend(account);
  };

  const transactionHash = "";

  useEffect(() => {
    if (RegisterState.status === "Mining" && RegisterState.transaction) {
      const transactionHash = RegisterState.transaction.hash;
      if (transactionHash) {
        console.log("Transaction Hash:", transactionHash);
      }
    }
  }, [RegisterState]);
  

  return { Register, RegisterState, chainId, transactionHash };
};
