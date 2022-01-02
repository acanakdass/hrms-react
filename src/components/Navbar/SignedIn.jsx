// import React from 'react'
// import { Dropdown, Image, Menu } from 'semantic-ui-react'
// import * as Mui from '@mui/material'

// function SignedIn(props) {
//    return (
//       <>
//          <Image avatar spaced="right" src="https://lh3.googleusercontent.com/proxy/oURZbxst2BMj_MWgGOEf2wykHV-yg3fOG8vG9I7Rud2wvehG_s8hqpd9LYv35FdNG18EY2lzaDXjYfb_Zd0PdhKs57Gda58jy7DLWdSqlQ" />
//          <Mui.Avatar>AA</Mui.Avatar>
//          <Dropdown pointing="top left" >
//             <Dropdown.Menu>
//                <Dropdown.Item text="Bilgilerim" icon="info" />
//                <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
//             </Dropdown.Menu>
//          </Dropdown>

//       </>
//    )
// }

// export default SignedIn

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function SignedIn(props) {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <React.Fragment>
         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
               <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  {/* <Avatar sx={{ width: 32, height: 32 }}>T</Avatar> */}
                  <Avatar sx={{ width: 32, height: 32 }} src={props.currentUser?.photoUrl} />
               </IconButton>
            </Tooltip>
         </Box>
         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
               elevation: 0,
               sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                  },
                  '&:before': {
                     content: '""',
                     display: 'block',
                     position: 'absolute',
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: 'background.paper',
                     transform: 'translateY(-50%) rotate(45deg)',
                     zIndex: 0,
                  },
               },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
         >
            <MenuItem>
               <Avatar src={props.currentUser?.photoUrl} /> {props.currentUser?.email}
            </MenuItem>
            <MenuItem>
               <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
               <ListItemIcon>
                  <PersonAdd fontSize="small" />
               </ListItemIcon>
               Add another account
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <Settings fontSize="small" />
               </ListItemIcon>
               Settings
            </MenuItem>
            <MenuItem onClick={props.signOut}>
               <ListItemIcon >
                  <Logout fontSize="small" />
               </ListItemIcon>
               Logout
            </MenuItem>
         </Menu>
      </React.Fragment>
   );
}