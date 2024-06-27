import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { Order } from '../types';

interface OrderRowProps {
  order: Order;
  index: number;
}

const OrderRow: React.FC<OrderRowProps> = ({ order, index }) => {
  return (
    <TableRow sx={{ height: '24px' }}>
      <TableCell sx={{ padding: '4px 8px', width: '5%' }}>{index}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '15%' }}>{order.date}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '10%' }}>{order.id}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '20%' }}>{order.machine}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '20%' }}>{order.customer}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '10%' }}>{order.contact}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '10%' }}>{order.amount}</TableCell>
      <TableCell sx={{ padding: '4px 8px', width: '10%' }}>{order.status}</TableCell>
    </TableRow>
  );
};

export default OrderRow;
