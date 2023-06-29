import React, { useState, useEffect } from "react";
import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core"
import { formatUnits } from "@ethersproject/units"
import { utils } from "ethers";
import {
  Button,
  CircularProgress,
  Snackbar,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useBuyTomTokens } from "../Hooks/useBuyTomTokens"; 

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: "-20px 0",
    marginLeft: "30px",
  },
}));

export const BuyTomForm = () => {
    // const formattedTokenBalance: number = tokenBalance ? parseFloat(formatUnits(tokenBalance, 18)) : 0
    const { notifications } = useNotifications()
    const classes = useStyles()

    const { account } = useEthers()
    const tomAddress = "0xf4301508f1ad133486a96af29b401bd0bae2fff6"
    const tokenBalance = useTokenBalance(tomAddress, account)
    const formattedTokenBalance: number = tokenBalance ? parseFloat(formatUnits(tokenBalance, 18)) : 0

    const [amount, setAmount] = useState<number | string | Array<number | string>>(0)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = event.target.value === "" ? "" : Number(event.target.value)
        setAmount(newAmount)
        console.log(newAmount)
    }

    const { approveAndBuyTom, state: approveAndStakeErc20State, transactionHash: Receipt } = useBuyTomTokens()
    const handleStakeSubmit = () => {
        const amountAsWei = utils.parseEther(amount.toString())
        return approveAndBuyTom(amountAsWei.toString())
    }

    const isMining = approveAndStakeErc20State.status === "Mining"
    // const hasZeroBalance = formattedTokenBalance === 0
    const hasZeroAmountSelected = parseFloat(amount.toString()) === 0

    const [showErc20ApprovalSuccess, setShowErc20ApprovalSuccess] = useState(false)
    const [showStakeTokenSuccess, setStakeTokenSuccess] = useState(false)
    const handleCloseSnack = () => {
        setShowErc20ApprovalSuccess(false)
        setStakeTokenSuccess(false)
    }


    /////**********************    Need to send the transaction hash to backend which should execute
                    //             the event catching and db integration */
                    
    // const sendTransactionHashToBackend = async (transactionHash) => {
    //     try {
    //       const response = await fetch('YOUR_DJANGO_BACKEND_URL', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({transactionHash}),
    //       });
    //       const data = await response.json();
    //       console.log(data);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    useEffect(() => {
        if (notifications.filter(
            (notification) =>
                notification.type === "transactionSucceed" &&
                notification.transactionName === "Approve ERC20 transfer").length > 0
        ) {
            setShowErc20ApprovalSuccess(true)
            setStakeTokenSuccess(false)
        }
        if (notifications.filter(
            (notification) =>
                notification.type === "transactionSucceed" &&
                notification.transactionName === "Stake Tokens").length > 0
        ) {
            setShowErc20ApprovalSuccess(false)
            setStakeTokenSuccess(true)
        }
    }, [notifications, showErc20ApprovalSuccess, showStakeTokenSuccess])

    return (
        <>
            <div className={classes.container}>
            <div>
                    TOM Balance: {formattedTokenBalance ? formattedTokenBalance.toString() : 'Loading...'}
                </div>
            <TextField
        className={classes.input}
        label="Amount to Buy"
        variant="outlined"
        type="number"
        value={amount}
        onChange={handleInputChange}
        disabled={isMining}
      />
                <Button
                    onClick={handleStakeSubmit}
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    size="large"
                    disabled={isMining || hasZeroAmountSelected }>
                    {isMining ? <CircularProgress size={26} /> : "Stake"}
                </Button>
            </div>
            <Snackbar
                open={showErc20ApprovalSuccess}
                autoHideDuration={5000}
                onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                    ERC-20 token transfer Approved! Now approve the 2nd transaction.
                </Alert>
            </Snackbar>
            <Snackbar
                open={showStakeTokenSuccess}
                autoHideDuration={5000}
                onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                    Tokens Staked!
                </Alert>
            </Snackbar>


        </>
    )
}