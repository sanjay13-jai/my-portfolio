import { AppBar, Toolbar, Typography, Switch, Button, IconButton, Drawer, List, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import React, { useState } from 'react';

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  // State for the drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Determine if the screen is small
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: '#006D77', // Deep Teal
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
            Sanjay's Portfolio
          </Typography>

          {isMobile ? (
            // For mobile screens
            <>
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                edge="end"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItemButton key={item.label} onClick={toggleDrawer(false)}>
                      <Link to={item.to} smooth={true} duration={500}>
                        <ListItemText primary={item.label} />
                      </Link>
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            // For larger screens
            <>
              {menuItems.map((item) => (
                <Button color="inherit" key={item.label}>
                  <Link to={item.to} smooth={true} duration={500}>{item.label}</Link>
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
