import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useCancelOrder } from '../Hooks/useCancelOrder'; // Import the custom hooks
import {useConfirmDelivery} from '../Hooks/useConfirmDelivery';
import { BigNumber } from 'ethers';

interface CancelOrderButtonProps {
  order_id: BigNumber;
}

const CancelOrderButton: FC<CancelOrderButtonProps> = ({ order_id }) => {
  console.log(order_id)
  const { Cancel, CancelState } = useCancelOrder(order_id);

  const handleCancelOrder = () => {
    Cancel(); // Trigger the cancel order function
  };

  return (
    <Button onClick={handleCancelOrder} disabled={CancelState.status === 'Mining'}>
      Cancel
    </Button>
  );
};

interface ConfirmDeliveryButtonProps {
  order_id: BigNumber;
}

const ConfirmDeliveryButton: FC<ConfirmDeliveryButtonProps> = ({ order_id }) => {
  const { Confirm, ConfirmState } = useConfirmDelivery(order_id);

  const handleConfirmDelivery = () => {
    Confirm(); // Trigger the confirm delivery function
  };

  return (
    <Button onClick={handleConfirmDelivery} disabled={ConfirmState.status === 'Mining'}>
      Confirm Delivery
    </Button>
  );
};

export { CancelOrderButton, ConfirmDeliveryButton };
