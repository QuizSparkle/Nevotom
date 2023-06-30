import { useState, useEffect } from "react";
import { useEthers, useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import Marketplace from "../../chain-info/out/Marketplace.sol/Marketplace.json";
import ERC20 from "../../chain-info/out/ERC20.sol/ERC20.json";

export const useBuyTomTokens = () => {
  const { chainId, account, library } = useEthers();

  const contractAddress = "0xA9729e8D472345B02eB1C61DD86f692A6EA84fF8";
  const contractABI = Marketplace.abi;
  const marketplaceInterface = new utils.Interface(contractABI);

  const contract = new Contract(contractAddress, marketplaceInterface);

  const linkAddress = "0xfafedb041c0dd4fa2dc0d87a6b0979ee6fa7af5f"; 
  const erc20ABI = ERC20.abi;
  const erc20Interface = new utils.Interface(erc20ABI);
  const erc20Contract = new Contract(linkAddress, erc20Interface);

  const { send: approveErc20Send, state: approveErc20AndBuyState } =
    useContractFunction(erc20Contract, "approve", {
      transactionName: "Approve ERC20 transfer",
    });

  const approveAndBuyTom = (amount: string) => {
    setAmountToBuy(amount);
    return approveErc20Send(contractAddress, amount);
  };

  const { send: buyTomSend, state: buyTomState } = useContractFunction(
    contract,
    "buyTOM",
    { transactionName: "Buy Tom tokens" }
  );

  const [amountToBuy, setAmountToBuy] = useState("0");

  useEffect(() => {
    console.log(approveErc20AndBuyState);
    if (approveErc20AndBuyState.status === "Success") {
      console.log("ok");
      buyTomSend(amountToBuy);
    }
  }, [approveErc20AndBuyState, amountToBuy]);

  const [state, setState] = useState(approveErc20AndBuyState);

  const transactionHash = "";

  useEffect(() => {
    if (approveErc20AndBuyState.status === "Success") {
      setState(buyTomState);
    } else {
      setState(approveErc20AndBuyState);
    }
  }, [approveErc20AndBuyState, buyTomState]);

  useEffect(() => {
    if (buyTomState.status === "Mining" && buyTomState.transaction) {
      const transactionHash = buyTomState.transaction.hash;
      if (transactionHash) {
        console.log("Transaction Hash:", transactionHash);
      }
    }
  }, [buyTomState]);

  return { approveAndBuyTom, state, chainId, transactionHash };
};
