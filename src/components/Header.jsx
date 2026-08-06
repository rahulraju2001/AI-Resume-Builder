import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const aboutUsContent = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* App Icon */}
            <img width={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevyeV0Wpx47XuSEm-Eu8_5eC23J7s-Uq6AfItLg6mxQ&s=10" alt="icon" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'> rBuilder </Link>
          </Typography>
          <Tooltip title={aboutUsContent}>
            <Button color="inherit" className='fs-6'>ABOUT US</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header