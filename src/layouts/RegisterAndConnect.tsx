import React, { useState, useEffect } from 'react'
import { useEthers, useCall } from '@usedapp/core'
// import { Button, makeStyles } from '@material-ui/core'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useRegisterUser } from '../components/Hooks/useRegisterUser'
import { getContractAddress } from '../components/helpers/ContractAddress'
import Marketplace from '../chain-info/out/Marketplace.sol/Marketplace.json'

// const useStyles = makeStyles((theme) => ({
//   div: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   address: {
//     textTransform: 'initial',
//   },
//   connection: {
//     color: '#fff',
//     backgroundColor: '#aa2bff',
//   },
// }))

export const RegisterAndConnect = () => {
  const { account, activateBrowserWallet, deactivate, chainId } = useEthers()
  const { Register, RegisterState } = useRegisterUser()

  const isConnected = !!account
  const isMining = RegisterState.status === 'Mining'

  const chain_Id = chainId ? chainId : 0

  const contractAddress = getContractAddress(
    chain_Id.toString(),
    'marketplace_Address'
  )

  const contractABI = Marketplace.abi
  const marketplaceInterface = new utils.Interface(contractABI)
  const contract = new Contract(contractAddress, marketplaceInterface)

  const { value, error } =
    useCall(
      contractAddress && {
        contract: contract,
        method: 'isRegistered',
        args: [account],
      }
    ) ?? {}

  const [hasRegistered, setHasRegistered] = useState(false)
  const [currentChainId, setCurrentChainId] = useState(chainId)

  useEffect(() => {
    const registerUser = async () => {
      if (account && !hasRegistered) {
        try {
          await Register()
          setHasRegistered(true)
        } catch (error) {
          console.error('Registration failed:', error)
        }
      }
    }

    registerUser()
  }, [account])

  useEffect(() => {
    if (chainId !== currentChainId) {
      setHasRegistered(false)
      setCurrentChainId(chainId)
    }
  }, [chainId])

  const handleConnect = () => {

    if (!isConnected) {
      activateBrowserWallet()
    }
  }

  return (
    <div>
      {isConnected ? (
        <>
          <span className="mr-2 text-gray-300">
            {`${account?.slice(0, 6)}...${account?.slice(-4)}`}
          </span>
          <button
            onClick={deactivate}
            className="rounded-sm border border-black
             bg-[#622386] px-3 py-2 text-white transition-all ease-in-out 
             hover:scale-x-95"
          >
            Disconnect
          </button>
        </>
      ) : (
        <div className={''}>
          <button
            color="primary"
            onClick={handleConnect}
            className="rounded-sm border border-black
             bg-[#862381] px-3 py-2 text-white transition-all ease-in-out 
             hover:scale-x-95"
            disabled={isMining}
          >
            {isMining ? 'Registering...' : 'Register & Connect'}
          </button>
        </div>
      )}
    </div>
  )
}
