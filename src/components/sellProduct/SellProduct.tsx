import React, { useState, useEffect } from "react";
import InputField from "../helpers/InputField"
import coinbg from "../../assets/Coin-bg.png";
import { useListItem } from "../Hooks/useListItem"; // adjust the import path accordingly
import { useNotifications } from "@usedapp/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { formatUnits } from "@ethersproject/units"

const SellProduct = () => {
  // useState for form input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  

  // Use the custom hook
  const formattedTokenBalance: number = price ? parseFloat(formatUnits(price, 18)) : 0
  const { approveAndListItem, state, chainId, transactionHash } = useListItem(
    name,
    "", // You need to set the imageLink here or have a state for it
    description,
    formattedTokenBalance,
    quantity
  );

  // Using useNotifications hook
  const { notifications } = useNotifications();

  // State for showing Snackbar notifications
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    approveAndListItem(); // Calls the function from useListItem hook
  };

  // Effect to show snackbar notifications
  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "List Item"
      ).length > 0
    ) {
      setShowSuccess(true);
    }
  }, [notifications]);

  // Function to close Snackbar notifications
  const handleCloseSnack = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      <h1 className="my-10 text-center text-4xl">SELL</h1>
      <div className="mx-auto flex justify-between py-6 md:w-[700px]">
        {/* left */}
        <div className="flex flex-col gap-4">
          <InputField dropDown={false} field="Item name" />
          <InputField dropDown={false} field="Description" />
          <InputField dropDown={false} field="Price" />
          <InputField dropDown={false} field="Quantity" />
          <InputField dropDown={false} field="Posting Fee" />
          {/* product Images */}
          <div className="my-4 flex flex-col gap-3">
            <h4 className="text-left font-semibold">Product Images</h4>
            <input
              type="file"
              alt="selectImage"
              className="rounded-md bg-gray-300 p-3 px-4"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-[250px] rounded-md border border-black bg-white p-2 transition-colors hover:bg-primary hover:text-white"
          >
            Sell
          </button>
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
        open={showSuccess}
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
