import React from 'react';
import { FilterOptions } from '../types';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Button } from '@mui/material';

interface FilterSidebarProps {
  filterOptions: FilterOptions;
  onChange: React.Dispatch<React.SetStateAction<FilterOptions>>;
  onApplyFilters: () => void; // Renamed prop
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filterOptions, onChange, onApplyFilters }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    onChange((prevOptions) => ({
      ...prevOptions,
      [name!]: value,
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(); // Trigger apply filters action in parent component (App.tsx)
  };

  return (
    <Box sx={{ p: 2, boxShadow: 3, borderRadius: 1 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          name="dateFrom"
          label="Date From"
          type="date"
          value={filterOptions.dateFrom}
          onChange={handleInputChange}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          name="dateTo"
          label="Date To"
          type="date"
          value={filterOptions.dateTo}
          onChange={handleInputChange}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={filterOptions.status}
          onChange={handleSelectChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="SUCCESS">SUCCESS</MenuItem>
          <MenuItem value="PENDING">PENDING</MenuItem>
          <MenuItem value="FAILED">FAILED</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          name="machines"
          label="Machines"
          value={filterOptions.machines}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button variant="contained" color="primary" fullWidth onClick={handleApplyFilters}>
        Select Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;
