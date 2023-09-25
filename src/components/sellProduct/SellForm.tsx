import React, { useState, useEffect } from "react";
import { Input, Button, CircularProgress, Snackbar } from "@material-ui/core";
import sellImage from './3dimage.jpg'
import { useListItem } from "../Hooks/useListItem"; 
import { useNotifications } from "@usedapp/core";
import Alert from "@material-ui/lab/Alert";
import { formatUnits } from "@ethersproject/units";
import { ethers, utils } from "ethers";
import axios from "axios";

const SellForm = () => {
  // useState for form input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  
  

  // Use the custom hook
  const formattedTokenBalance = price ? utils.parseEther(price.toString()) : 0;
  const { approveAndListItem, state, chainId, transactionHash, value } = useListItem(
    name,
    "",
    description,
    formattedTokenBalance,
    quantity
  );

  const chain_Id = chainId ? chainId : 0 

  const { notifications } = useNotifications();

  const handleSubmit = () => {
    approveAndListItem();
  };

  const [apiCallTriggered, setApiCallTriggered] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);
  };

  useEffect(() => {
    if (notifications.filter(
      (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "List Item").length > 0 &&
          apiCallTriggered
  ) {
    setApiCallTriggered(false);
      // Second transaction "List Item" is in "Mining" status
      // Create a FormData object to send the form data
      const formData = new FormData();
      formData.append("contract_name", "Marketplace");
      formData.append("chain_id", chain_Id.toString());
      formData.append("transaction_hash", transactionHash.toString());
      formData.append("event_name", "ItemListed");
      formData.append("image", selectedImage || "");
      formData.append("postingFee", value[0].toString());

      console.log("Marketplace", chain_Id.toString(), transactionHash.toString(), "ItemListed")
  
      // Make the API request to create the item
      axios
        .post("http://127.0.0.1:8000/api/items/create/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // Handle the response
          if (response.status === 201 || response.status === 200) {
            // Item created successfully
            console.log("Item created successfully");
          } else {
            // Handle error
            console.log("Failed to create item");
          }
        })
        .catch((error) => {
          // Handle error
          console.log("Error creating item", error);
        });
    }
  }, [notifications]);
  
  

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
      {/* <h1 className="my-10 text-center text-4xl">SELL</h1> */}
      <div className="flex text-gray-100 justify-between py-6 px-2 w-full">
        {/* left */}
        <div className="flex flex-col text-gray-100 gap-4 flex-1">
          <label htmlFor="name" className='font-bold text-gray-100'>Item Name</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description" className='font-bold text-gray-100'>Description</label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="price" className='font-bold text-gray-100'>Price</label>
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <label htmlFor="quantity" className='font-bold text-gray-100'>Quantity</label>
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
              className="rounded-md bg-black/30 text-gray-300 p-3 px-4"
              onChange={handleImageChange}
            />
          </div>
          <Button
            onClick={() => {
              handleSubmit();
              setApiCallTriggered(true);
            }}
            className="w-[250px] rounded-md 
             bg-purple-800 p-2 transition-colors hover:bg-primary hover:text-white"
            color="primary"
            variant="contained"
            disabled={isMining}
          >
            {isMining ? <CircularProgress size={26} /> : "SELL"}
          </Button>
        </div>
        {/* right */}
        {/* <div className='flex justify-end w-full'>
          <img
            src={sellImage}
            className="w-[90%] rounded-md md:inline-flex hidden"
            alt="logo"
          />
        </div> */}
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

export default SellForm;
