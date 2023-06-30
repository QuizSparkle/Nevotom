import { useState, useEffect } from "react";
import { useEthers, useContractFunction, useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";
import Marketplace from "../../chain-info/out/Marketplace.sol/Marketplace.json";
import ERC20 from "../../chain-info/out/ERC20.sol/ERC20.json";

export const useListItem = (
  name: string,
  imageLink: string,
  description: string,
  price: Number,
  quantity: Number
) => {
  const { chainId, account, library } = useEthers();

  const contractAddress = "0xA9729e8D472345B02eB1C61DD86f692A6EA84fF8";
  const contractABI = Marketplace.abi;
  const marketplaceInterface = new utils.Interface(contractABI);

  const contract = new Contract(contractAddress, marketplaceInterface);

  const linkAddress = "0xfafedb041c0dd4fa2dc0d87a6b0979ee6fa7af5f";
  const erc20ABI = ERC20.abi;
  const erc20Interface = new utils.Interface(erc20ABI);
  const erc20Contract = new Contract(linkAddress, erc20Interface);

  const { send: approveErc20Send, state: approveErc20AndListItem } =
    useContractFunction(erc20Contract, "approve", {
      transactionName: "Approve ERC20 transfer",
    });

  const { value, error } =
    useCall(
      contractAddress && {
        contract: contract,
        method: "calculatePostingFee",
        args: [price, quantity],
      }
    ) ?? {};

  const approveAndListItem = () => {
    // setAmountToBuy(value);
    return approveErc20Send(contractAddress, value);
  };

  const { send: listItemSend, state: listItemState } = useContractFunction(
    contract,
    "listItem",
    { transactionName: "List Item" }
  );

  //   const [amountToBuy, setAmountToBuy] = useState("0");

  useEffect(() => {
    console.log(approveErc20AndListItem);
    if (approveErc20AndListItem.status === "Success") {
      console.log("ok");
      listItemSend(name, imageLink, description, price, quantity);
    }
  }, [approveErc20AndListItem, price]);

  const [state, setState] = useState(approveErc20AndListItem);

  const transactionHash = "";

  useEffect(() => {
    if (approveErc20AndListItem.status === "Success") {
      setState(listItemState);
    } else {
      setState(approveErc20AndListItem);
    }
  }, [approveErc20AndListItem, listItemState]);

  useEffect(() => {
    if (listItemState.status === "Mining" && listItemState.transaction) {
      const transactionHash = listItemState.transaction.hash;
      if (transactionHash) {
        console.log("Transaction Hash:", transactionHash);
      }
    }
  }, [listItemState]);

  return { approveAndListItem, state, chainId, transactionHash };
};
