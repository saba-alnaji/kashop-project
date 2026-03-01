import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#f8f5f2",
          paddingY: 1
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>


          <Box sx={{ fontSize: "24px", fontWeight: 500, color: "#3e2c23" }}>
            Glowmart.
          </Box>


          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 5,
            alignItems: 'center'
          }}>

            <Link component={RouterLink} to="/" underline="none"
              sx={{
                color: "#3e2c23", position: "relative", fontWeight: 500,
                '&::after': {
                  content: '""', position: "absolute", width: "100%", height: "2px", backgroundColor: "#3e2c23",
                  bottom: -5, left: 0
                }
              }}
            >
              Home
            </Link>

            <Link component={RouterLink} to="/about" underline="none"
              sx={{ color: "#3e2c23", fontWeight: 500 }}>
              About Us
            </Link>

            <Link component={RouterLink} to="/product" underline="none"
              sx={{ color: "#3e2c23", fontWeight: 500 }}>
              Product
            </Link>

            <Link component={RouterLink} to="/register" underline="none"
              sx={{ color: "#3e2c23", fontWeight: 500 }}>
              Pages
            </Link>

          </Box>


          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Link component={RouterLink} to="/login" underline="none"
              sx={{ color: "#3e2c23", fontWeight: 500 }}>
              <IconButton sx={{ color: "#3e2c23" }}>
                <PersonOutlineIcon />
              </IconButton>
            </Link>

            <Link component={RouterLink} to="/cart" underline="none"
              sx={{ color: "#3e2c23", fontWeight: 500 }}>
              <IconButton sx={{ color: "#3e2c23" }}>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Link>


          </Box>


          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: "#3e2c23" }}>
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}