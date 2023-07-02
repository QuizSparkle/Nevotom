import React, { useState, useEffect } from 'react'
import { useEthers } from '@usedapp/core'
import { Button, makeStyles } from '@material-ui/core'
import { useRegisterUser } from '../Hooks/useRegisterUser'

const useStyles = makeStyles((theme) => ({
  div: {
    display: 'flex',
    alignItems: 'center',
  },
  address: {
    textTransform: 'initial',
  },
  connection: {
    color: '#fff',
    backgroundColor: '#8789FE',
  },
}))

export const RegisterAndConnect = () => {
  const classes = useStyles()
  const { account, activateBrowserWallet, deactivate, chainId } = useEthers()
  const { Register, RegisterState } = useRegisterUser()

  const isConnected = !!account
  const isMining = RegisterState.status === 'Mining'

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
          <Button
            variant="contained"
            onClick={deactivate}
            className={classes.connection}
          >
            Disconnect
          </Button>
        </>
      ) : (
        <div className={classes.div}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleConnect}
            className={classes.connection}
            disabled={isMining}
          >
            {isMining ? 'Registering...' : 'Register & Connect'}
          </Button>
        </div>
      )}
    </div>
  )
}
