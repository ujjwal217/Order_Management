import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OrdersTable from './OrdersTable'; // Assuming OrdersTable component exists
import { Order } from '../types'; // Adjust path based on your project structure

interface OrderListModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[]; // Ensure Order type is correctly imported or defined
}

const OrderListModal: React.FC<OrderListModalProps> = ({ isOpen, onClose, orders }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="order-list-modal"
      aria-describedby="order-list-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', p: 4, minWidth: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Filtered Orders</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <OrdersTable orders={orders} rowsPerPage={10} /> {/* Replace with actual OrdersTable */}
      </Box>
    </Modal>
  );
};

export default OrderListModal;
