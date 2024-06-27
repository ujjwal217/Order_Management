import React from 'react';
import { AppBar, Toolbar, InputBase, Box, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
  return (
    <AppBar  sx={{ backgroundColor: 'white', boxShadow: 2,height:'12%',width:'95.4%' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2 }}>
            <Typography variant="h6" sx={{ color: 'black' }}>
              All Orders
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'blue' }}>
              All orders
            </Typography>
          </Box>
        </Box>

        <Box>
        <SearchIcon sx={{ color: 'black' }} />
                  <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{ ml: 1, flex: 1, color: 'black' }}
                    />
          <IconButton color="inherit">
            <NotificationsIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
