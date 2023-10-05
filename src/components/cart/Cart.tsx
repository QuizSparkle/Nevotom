import React, { useEffect, useState } from 'react'
import { cardProductsState } from '../../atoms/CartProducts'
import { useRecoilValue } from 'recoil'
import { useLocation, useNavigate } from 'react-router'
import {
  CancelOrderButton,
  ConfirmDeliveryButton,
} from '../functionalities/OrderButtons'
import { utils, BigNumber } from 'ethers'
import {
  useEthers,
  useTokenBalance,
  useNotifications,
  useCall,
} from '@usedapp/core'
import { Button, CircularProgress, Snackbar } from '@material-ui/core'
import Marketplace from '../../chain-info/out/Marketplace.sol/Marketplace.json'
import { Contract } from '@ethersproject/contracts'
import { useOrderItem } from '../Hooks/useOrderItem'
import { ethers } from 'ethers'
import axios from 'axios'
import { getContractAddress } from '../../components/helpers/ContractAddress'
import Alert from '@material-ui/lab/Alert'

interface OrderProduct {
  name: string
  price: number
  quantity: number
  rewards: number
  status: string
  img: string
  order_id: string
}

const Cart = () => {
  const cartProducts = useRecoilValue(cardProductsState)
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const item_id = queryParams.get('item_id')
  const quantity = queryParams.get('quantity')

  const parsed_item_id = item_id ? parseInt(item_id) : 0
  const parsed_quantity = quantity ? parseInt(quantity) : 0
  const { notifications } = useNotifications()
  const { account } = useEthers()

  const { approveAndOrderItem, state, chainId, transactionHash } = useOrderItem(
    parsed_item_id,
    parsed_quantity
  )

  const handleCheckout = () => {
    approveAndOrderItem()
  }

  const chain_Id = chainId ? chainId : 0

  const contractAddress = getContractAddress(
    chain_Id.toString(),
    'marketplace_Address'
  )
  const contractABI = Marketplace.abi
  const marketplaceInterface = new utils.Interface(contractABI)

  const contract = new Contract(contractAddress, marketplaceInterface)

  const useValue = (): number | undefined => {
    const { value, error } =
      useCall(
        contractAddress && {
          contract: contract,
          method: 'getItem',
          args: [parsed_item_id],
        }
      ) ?? {}

    return value ? Number(ethers.utils.formatEther(value[3])) : undefined
  }

  const value = useValue()
  const formattedValue = value ? value : 0

  const isMining = state.status === 'Mining'
  // const hasZeroBalance = formattedTokenBalance === 0
  // const hasZeroAmountSelected = parseFloat(amount.toString()) === 0

  const [showErc20ApprovalSuccess, setShowErc20ApprovalSuccess] =
    useState(false)
  const [showOrderItemSuccess, setOrderItemSuccess] = useState(false)
  const handleCloseSnack = () => {
    setShowErc20ApprovalSuccess(false)
    setOrderItemSuccess(false)
  }

  const [apiCallTriggered, setApiCallTriggered] = useState(false)

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === 'transactionSucceed' &&
          notification.transactionName === 'Order Item'
      ).length > 0 &&
      apiCallTriggered
    ) {
      setApiCallTriggered(false)
      // Second transaction "List Item" is in "Mining" status
      // Create a FormData object to send the form data
      const formData = new FormData()
      formData.append('contract_name', 'Escrow')
      formData.append('chain_id', chain_Id.toString())
      formData.append('transaction_hash', transactionHash.toString())
      formData.append('event_name', 'OrderSent')

      console.log(
        'Escrow',
        chain_Id.toString(),
        transactionHash.toString(),
        'OrderSent'
      )

      // Make the API request to create the item
      axios
        .post('http://127.0.0.1:8000/api/orders/create/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Handle the response
          if (response.status === 201 || response.status === 200) {
            // Item created successfully
            console.log('Order created successfully')
          } else {
            // Handle error
            console.log('Failed to create Order')
          }
        })
        .catch((error) => {
          // Handle error
          console.log('Error creating item', error)
        })
    }
  }, [notifications])

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === 'transactionSucceed' &&
          notification.transactionName === 'Approve ERC20 transfer'
      ).length > 0
    ) {
      setShowErc20ApprovalSuccess(true)
      setOrderItemSuccess(false)
    }
    if (
      notifications.filter(
        (notification) =>
          notification.type === 'transactionSucceed' &&
          notification.transactionName === 'Order Item'
      ).length > 0
    ) {
      setShowErc20ApprovalSuccess(false)
      setOrderItemSuccess(true)
    }
  }, [notifications, showErc20ApprovalSuccess, showOrderItemSuccess])

  const [orders, setOrders] = useState<OrderProduct[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      console.log('we here')
      try {
        const response = await axios.get<OrderProduct[]>(
          'http://127.0.0.1:8000/api/orders/user/'
        )
        console.log(response)
        setOrders(response.data)
      } catch (error) {
        console.log('Error fetching products:', error)
      }
    }

    fetchOrders()
  }, [])
  return (
    <>
      <div className="pagetitle">
        <h1>Cart</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <p className="cursor-pointer" onClick={() => navigate('/')}>
                Home
              </p>
            </li>
            <li className="breadcrumb-item active">Cart</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <div className="col-lg-12">
        <div className="row">
          {/* Recent Sales */}
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  Recent Sales <span>| Today</span>
                </h5>

                <table className="custom-table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Product</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Rewards</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts && cartProducts.length > 0 ? (
                      cartProducts.map((c, i) => (
                        <>
                          <tr>
                            <th scope="row">
                              <a href="/">{i}</a>
                            </th>
                            <td className="font-semibold text-white xl:text-[1.2rem]">
                              {c.name}
                            </td>
                            <td>
                              <a
                                href="/"
                                className="text-gray-300 xl:text-[1.1rem]"
                              >
                                {c.description}
                              </a>
                            </td>
                            <td>$ {c.price}</td>
                            <td>1</td>
                            <td>$ {c.reward}</td>
                            <td>
                              <span className="badge bg-success ">
                                {!c.reward && 'in progress'}
                              </span>
                            </td>
                            {/* <div>
                              <CancelOrderButton
                                order_id={BigNumber.from(c.id)}
                              />
                              <ConfirmDeliveryButton
                                order_id={BigNumber.from(c.id)}
                              />
                            </div> */}
                          </tr>
                        </>
                      ))
                    ) : (
                      <div className="mt-3 w-full">
                        <h1 className="mx-auto text-center text-[1.4rem] text-white">
                          Your Cart is Empty
                        </h1>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>

              {cartProducts.length > 0 && (
                <article className="bg-black/20 border-t border-gray-700 flex flex-col gap-2 px-6 py-10">
                  <h2 className="text-2xl font-semibold text-orange-400">
                    Cart Total
                  </h2>
                  <div className="flex text-[1.1rem] w-[180px] flex-col gap-3">
                    <div className="flex justify-between">
                      <h2 className='text-[1.4rem]'>Total</h2>
                      <h3 className="text-orange-400 flex text-[1.2rem]">${value}</h3>
                    </div>
                    <div className="flex justify-between">
                      <h2 className='text-[1.4rem]'>Rewards</h2>
                      <h3 className="text-orange-400 flex  text-[1.2rem]">
                        {formattedValue * 0.7} TOM
                      </h3>
                    </div>
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        handleCheckout()
                        setApiCallTriggered(true)
                      }}
                      className="mt-4 rounded-md border border-black p-1 px-4"
                      color="primary"
                      variant="contained"
                      disabled={isMining}
                    >
                      {isMining ? <CircularProgress size={26} /> : 'Checkout'}
                    </Button>
                  </div>

                  <Snackbar
                    open={showErc20ApprovalSuccess}
                    autoHideDuration={5000}
                    onClose={handleCloseSnack}
                  >
                    <Alert onClose={handleCloseSnack} severity="success">
                      ERC-20 token transfer Approved! Now approve the 2nd
                      transaction.
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    open={showOrderItemSuccess}
                    autoHideDuration={5000}
                    onClose={handleCloseSnack}
                  >
                    <Alert onClose={handleCloseSnack} severity="success">
                      Item Ordered!
                    </Alert>
                  </Snackbar>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;