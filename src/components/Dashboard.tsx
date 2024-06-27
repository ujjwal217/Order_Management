import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ width: '4.5%', height: '100%', backgroundColor: 'white', position: 'fixed', left: 0, top: 0, boxShadow: 3 }}>
      <List>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Dashboard;
