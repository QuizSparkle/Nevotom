import { useEthers } from '@usedapp/core'
import { Button, makeStyles } from '@material-ui/core'
import { ConnectionRequiredMsg } from '../ConnectionRequiredMsg'
import React from 'react'
import { StayPrimaryLandscape } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  //   container: {
  //     padding: theme.spacing(2),
  //     display: 'flex',
  //     justifyContent: 'flex-end',
  //     gap: theme.spacing(1),
  //   },
  div: {
    display: 'flex',
    alignItems: 'center',
  },
  address: {
    // marginRight: '10px',
    textTransform: 'initial',
  },
  connexion: {
    color: '#fff',
    backgroundColor: '#8789FE',
    // marginRight: '72px',
  },
}))

export const ConnectBtn = () => {
  const classes = useStyles()
  const { account, activateBrowserWallet, deactivate } = useEthers()

  const isConnected = account !== undefined

  return (
    <div>
      <div>
        {isConnected ? (
          <>
            <span className="mr-2 text-gray-300">
              {`${account?.slice(0, 6)}...${account?.slice(-4)}`}
            </span>
            <Button
              variant="contained"
              onClick={deactivate}
              className={classes.connexion}
            >
              Disconnect
            </Button>
          </>
        ) : (
          <>
            <div className={classes.div}>
              {/* <ConnectionRequiredMsg /> */}
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  console.log('Trying to connect...')
                  activateBrowserWallet()
                }}
                className={classes.connexion}
              >
                Connect
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
