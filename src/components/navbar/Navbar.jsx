import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            kashop
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Link component={RouterLink} to={'/'} underline='none' color="inherit">Home</Link>
            <Link component={RouterLink} to={'/cart'} underline='none' color="inherit">Cart</Link>
            <Link component={RouterLink} to={'/login'} underline='none' color="inherit">Login</Link>
            <Link component={RouterLink} to={'/register'} underline='none' color="inherit">Register</Link>


          </Box>
          <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
