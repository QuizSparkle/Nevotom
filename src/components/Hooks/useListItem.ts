import { useState, useEffect } from 'react'
import { useEthers, useContractFunction, useCall } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import Marketplace from '../../chain-info/out/Marketplace.sol/Marketplace.json'
import Tom from '../../chain-info/out/Tom.sol/TOM.json'
import { BigNumber } from 'ethers'

export const useListItem = (
  name: string,
  imageLink: string,
  description: string,
  price: BigNumber | 0,
  quantity: Number
) => {
  const { chainId, account, library } = useEthers()

  const contractAddress = '0xA9729e8D472345B02eB1C61DD86f692A6EA84fF8'
  const contractABI = Marketplace.abi
  const marketplaceInterface = new utils.Interface(contractABI)

  const contract = new Contract(contractAddress, marketplaceInterface)

  const TOMAddress = '0xf4301508f1ad133486a96af29b401bd0bae2fff6'
  const TOMABI = Tom.abi
  const TOMInterface = new utils.Interface(TOMABI)
  const TOMContract = new Contract(TOMAddress, TOMInterface)

  const { send: approveErc20Send, state: approveErc20AndListItem } =
    useContractFunction(TOMContract, 'approve', {
      transactionName: 'Approve ERC20 transfer',
    })

  const { value, error } =
    useCall(
      contractAddress && {
        contract: contract,
        method: 'calculatePostingFee',
        args: [price, quantity],
      }
    ) ?? {}

  const approveAndListItem = () => {
    // setAmountToBuy(value);
    return approveErc20Send(contractAddress, value[0])
  }

  const { send: listItemSend, state: listItemState } = useContractFunction(
    contract,
    'listItem',
    { transactionName: 'List Item' }
  )

  //   const [amountToBuy, setAmountToBuy] = useState("0");

  useEffect(() => {
    console.log(approveErc20AndListItem)
    if (approveErc20AndListItem.status === 'Success') {
      console.log('ok')
      listItemSend(name, imageLink, description, price, quantity)
    }
  }, [approveErc20AndListItem])

  const [state, setState] = useState(approveErc20AndListItem)

  const [transactionHash, settransactionHash] = useState('0x')

  // const transactionHash = ''

  useEffect(() => {
    if (approveErc20AndListItem.status === 'Success') {
      setState(listItemState)
    } else {
      setState(approveErc20AndListItem)
    }
  }, [approveErc20AndListItem, listItemState])

  useEffect(() => {
    if (listItemState.status === 'Mining' && listItemState.transaction) {
      settransactionHash(listItemState.transaction.hash)
      if (transactionHash) {
        console.log('Transaction Hash:', transactionHash)
      }
    }
  }, [listItemState])

  return { approveAndListItem, state, chainId, transactionHash, value }
}
