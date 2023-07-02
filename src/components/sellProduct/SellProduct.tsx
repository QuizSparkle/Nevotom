import React, { useState, useEffect } from "react";
import { Input, Button, CircularProgress, Snackbar } from "@material-ui/core";
import coinbg from "../../assets/Coin-bg.png";
import { useListItem } from "../Hooks/useListItem"; 
import { useNotifications } from "@usedapp/core";
import Alert from "@material-ui/lab/Alert";
import { formatUnits } from "@ethersproject/units";
import { ethers, utils } from "ethers";

const SellProduct = () => {
  // useState for form input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  

  // Use the custom hook
  const formattedTokenBalance = price ? utils.parseEther(price.toString()) : 0;
  const { approveAndListItem, state, chainId, transactionHash } = useListItem(
    name,
    "",
    description,
    formattedTokenBalance,
    quantity
  );

  const { notifications } = useNotifications();

  const handleSubmit = () => {  
    approveAndListItem();
  };

  const isMining = state.status === "Mining"

    const [showErc20ApprovalSuccess, setShowErc20ApprovalSuccess] = useState(false)
    const [showListItemSuccess, setListItemSuccess] = useState(false)
    const handleCloseSnack = () => {
        setShowErc20ApprovalSuccess(false)
        setListItemSuccess(false)
    }

  useEffect(() => {
    if (notifications.filter(
        (notification) =>
            notification.type === "transactionSucceed" &&
            notification.transactionName === "Approve ERC20 transfer").length > 0
    ) {
        setShowErc20ApprovalSuccess(true)
        setListItemSuccess(false)
    }
    if (notifications.filter(
        (notification) =>
            notification.type === "transactionSucceed" &&
            notification.transactionName === "List Item").length > 0
    ) {
        setShowErc20ApprovalSuccess(false)
        setListItemSuccess(true)
    }
}, [notifications, showErc20ApprovalSuccess, showListItemSuccess])

  return (
    <div>
      <h1 className="my-10 text-center text-4xl">SELL</h1>
      <div className="mx-auto flex justify-between py-6 md:w-[700px]">
        {/* left */}
        <div className="flex flex-col gap-4">
          <label htmlFor="name" style={{ fontWeight: 'bold', color: 'black' }}>Item Name</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description" style={{ fontWeight: 'bold', color: 'black' }}>Description</label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="price" style={{ fontWeight: 'bold', color: 'black' }}>Price</label>
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <label htmlFor="quantity" style={{ fontWeight: 'bold', color: 'black' }}>Quantity</label>
          <Input
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          {/* product Images */}
          <div className="my-4 flex flex-col gap-3">
            <h4 className="text-left font-semibold">Product Images</h4>
            <input
              type="file"
              alt="selectImage"
              className="rounded-md bg-gray-300 p-3 px-4"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-[250px] rounded-md border border-black bg-white p-2 transition-colors hover:bg-primary hover:text-white"
            color="primary"
            variant="contained"
            disabled={isMining}
          >
            {isMining ? <CircularProgress size={26} /> : "SELL"}
          </Button>
        </div>
        {/* right */}
        <div>
          <img
            src={coinbg}
            className="w-[300px] rounded-full"
            alt="logo"
          />
        </div>
      </div>

      {/* Snackbar for success notification */}
      <Snackbar
        open={showErc20ApprovalSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
        ERC-20 token transfer Approved! Now approve the 2nd transaction.
        </Alert>
      </Snackbar>

      <Snackbar
        open={showListItemSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          Item listed successfully!
        </Alert>
      </Snackbar>
      
    </div>
  );
};

export default SellProduct;
