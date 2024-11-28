import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Instagram, Facebook, Menu as MenuIcon } from "@mui/icons-material";
import "./Header.css";
import headerStyles from "./HeaderStyles.js";
import logo from "../../assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        <ListItem button component="a" href="#inicio">
          <ListItemText primary="Início" />
        </ListItem>
        <ListItem button component="a" href="#planos">
          <ListItemText primary="Planos" />
        </ListItem>
        <ListItem button component="a" href="#sobre-nos">
          <ListItemText primary="Sobre Nós" />
        </ListItem>
        <ListItem button component="a" href="#contato">
          <ListItemText primary="Contato" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className="header" sx={headerStyles.appBar}>
      <Toolbar className="header-top" sx={headerStyles.toolbar}>
        <Box className="logo" sx={headerStyles.logo}>
          <img src={logo} alt="Carioca Logo" />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Box className="contacts" sx={headerStyles.contacts}>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </IconButton>
            <Typography variant="body2">21.9 9995-6202 </Typography>
            <Typography variant="body2">21.9 9995-3526</Typography>
          </Box>
          <Box className="nav" sx={headerStyles.nav}>
            <Button href="#inicio" className="nav-item" sx={headerStyles.navItem}>
              Início
            </Button>
            <Button href="#planos" className="nav-item" sx={headerStyles.navItem}>
              Planos
            </Button>
            <Button href="#sobre-nos" className="nav-item" sx={headerStyles.navItem}>
              Sobre Nós
            </Button>
            <Button href="#contato" className="nav-item" sx={headerStyles.navItem}>
              Contato
            </Button>
          </Box>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
