import React, { useState } from 'react';
import { Order } from '../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import OrderRow from './OrderRow';

interface OrdersTableProps {
  orders: Order[];
  rowsPerPage: number;
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, rowsPerPage }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPageState, setRowsPerPageState] = useState(rowsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPageState(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 240px)' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: '4px 8px', width: '5%' }}>S.No.</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '15%' }}>Date</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '10%' }}>Order ID</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '20%' }}>Machine Name</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '20%' }}>Customer Name</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '10%' }}>Contact Number</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '10%' }}>Total Amount</TableCell>
              <TableCell sx={{ padding: '4px 8px', width: '10%' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.slice(page * rowsPerPageState, page * rowsPerPageState + rowsPerPageState).map((order, index) => (
              <OrderRow key={order.id} order={order} index={page * rowsPerPageState + index + 1} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPageState}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default OrdersTable;
