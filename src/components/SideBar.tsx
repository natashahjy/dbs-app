import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from './Dashboard';
import ViewClaim from './ViewClaim';
import CreateClaimForm from '../eman/CreateClaimForm'
const drawerWidth = 240;
//Pass in the page as props;
export default function SideBarNav({page}) {

  let linkarr = ['Home','View Claim', 'Create Claim', 'Edit Claim']
  
  const linkhelper = (nav) => {
    console.log(nav)
    if(nav =="Home"){return "/"}
    if(nav =="View Claim"){return "/viewclaim"}
    if(nav =="Create Claim"){return "/CreateClaimForm"}
    if(nav =="Edit Claim"){return "/"}
    else return "/"
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>

          {linkarr.map((key, index) => (
            <ListItem key={key} disablePadding>
              <ListItemButton href = {linkhelper(key)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={key} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
          {page}       
      </Box>
    </Box>
  );
}