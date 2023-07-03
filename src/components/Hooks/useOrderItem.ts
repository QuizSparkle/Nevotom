import { useState, useEffect } from 'react'
import { useEthers, useContractFunction, useCall } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import Marketplace from '../../chain-info/out/Marketplace.sol/Marketplace.json'
import Escrow from '../../chain-info/out/Escrow.sol/Escrow.json'
import ERC20 from '../../chain-info/out/ERC20.sol/ERC20.json'
import { ethers } from 'ethers'

export const useOrderItem = (itemId: number, quantity: number) => {
  const { chainId, account, library } = useEthers()

  const contractAddress = '0xA9729e8D472345B02eB1C61DD86f692A6EA84fF8'
  const contractABI = Marketplace.abi
  const marketplaceInterface = new utils.Interface(contractABI)

  const contract = new Contract(contractAddress, marketplaceInterface)

  const linkAddress = '0xfafedb041c0dd4fa2dc0d87a6b0979ee6fa7af5f'
  const erc20ABI = ERC20.abi
  const erc20Interface = new utils.Interface(erc20ABI)
  const erc20Contract = new Contract(linkAddress, erc20Interface)

  const escrowAddress = '0xd97fd145689ce4bfbad40c1af2473b5a338a329f'
  const escrowABI = Escrow.abi
  const escrowInterface = new utils.Interface(escrowABI)
  const escrowContract = new Contract(escrowAddress, escrowInterface)

  const { send: approveErc20Send, state: approveErc20AndOrderItem } =
    useContractFunction(erc20Contract, 'approve', {
      transactionName: 'Approve ERC20 transfer',
    })

  const { value, error } =
    useCall(
      contractAddress && {
        contract: contract,
        method: 'getItem',
        args: [itemId],
      }
    ) ?? {}

  const approveAndOrderItem = () => {
    // setAmountToBuy(value);
    return approveErc20Send(
      escrowAddress,
      utils.parseEther(
        (Number(ethers.utils.formatEther(value[3])) * quantity).toString()
      )
    )
  }

  const { send: OrderItemSend, state: OrderItemState } = useContractFunction(
    contract,
    'orderItem',
    { transactionName: 'Order Item' }
  )

  //   const [amountToBuy, setAmountToBuy] = useState("0");

  useEffect(() => {
    console.log(approveErc20AndOrderItem)
    if (approveErc20AndOrderItem.status === 'Success') {
      console.log('ok')
      OrderItemSend(itemId, quantity)
    }
  }, [approveErc20AndOrderItem])

  const [state, setState] = useState(approveErc20AndOrderItem)

  const [transactionHash, settransactionHash] = useState('0x')

  // const transactionHash = ''

  useEffect(() => {
    if (approveErc20AndOrderItem.status === 'Success') {
      setState(OrderItemState)
    } else {
      setState(approveErc20AndOrderItem)
    }
  }, [approveErc20AndOrderItem, OrderItemState])

  useEffect(() => {
    if (OrderItemState.status === 'Mining' && OrderItemState.transaction) {
      settransactionHash(OrderItemState.transaction.hash)
      if (transactionHash) {
        console.log('Transaction Hash:', transactionHash)
      }
    }
  }, [OrderItemState])

  return { approveAndOrderItem, state, chainId, transactionHash }
}
