import React, { useState } from 'react';
import { Box, Grid, CssBaseline, Button } from '@mui/material';
import OrdersTable from './components/OrdersTable';
import FilterSidebar from './components/FilterSidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OrderListModal from './components/OrderListModal'; // Assuming the modal component is imported
import { Order, FilterOptions } from './types';

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 'OD101', date: '21/03/2023', machine: 'Aahaar Stall 23', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 199, status: 'SUCCESS' },
         { id: 'OD102', date: '21/03/2023', machine: 'Aahaar Stall 37', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 99, status: 'FAILURE' },
         { id: 'OD103', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 298, status: 'PENDING' },
         { id: 'OD104', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 345, status: 'SENT' },
         { id: 'OD105', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 666, status: 'REFUND INITIATED' },
         { id: 'OD106', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 765, status: 'REFUND COMPLETED' },
         { id: 'OD107', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 328, status: 'SUCCESS' },
         { id: 'OD108', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 199, status: 'SUCCESS' },
         { id: 'OD109', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 199, status: 'SUCCESS' },
         { id: 'OD110', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 499, status: 'SUCCESS' },
         { id: 'OD101', date: '21/03/2023', machine: 'Aahaar Stall 23', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 199, status: 'SUCCESS' },
         { id: 'OD102', date: '21/03/2023', machine: 'Aahaar Stall 37', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 99, status: 'FAILURE' },
         { id: 'OD103', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 298, status: 'PENDING' },
         { id: 'OD104', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 345, status: 'SENT' },
         { id: 'OD105', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 666, status: 'REFUND INITIATED' },
         { id: 'OD106', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 765, status: 'REFUND COMPLETED' },
         { id: 'OD107', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 328, status: 'SUCCESS' },
         { id: 'OD108', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 199, status: 'SUCCESS' },
         { id: 'OD109', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 199, status: 'SUCCESS' },
         { id: 'OD110', date: '21/03/2023', machine: 'Aahaar Stall 88', customer: 'Simranjeet Kaur', contact: '9999999999', amount: 499, status: 'SUCCESS' },
         // Add more orders as needed
  ]);

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    dateFrom: '',
    dateTo: '',
    status: '',
    machines: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const applyFilters = () => {
    // Implement filtering logic here if needed
    setIsModalOpen(true); // Open modal on apply filters
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Dashboard />
        <Box sx={{ flexGrow: 1, ml: '5%', mt: 8, px: 2 }}>
          <Grid container spacing={2.5}>
            <Grid item xs={8}>
              <OrdersTable orders={orders} rowsPerPage={10} />

            </Grid>
            <Grid item xs={4}>
              <FilterSidebar filterOptions={filterOptions} onChange={setFilterOptions} onApplyFilters={applyFilters} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <OrderListModal isOpen={isModalOpen} onClose={handleCloseModal} orders={orders} />
    </>
  );
};

export default App;
