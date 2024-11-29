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
    <Box sx={{ width: 250, backgroundColor: "#000" }} onClick={handleDrawerToggle}>
      <List>
        <ListItem button component="a" href="#inicio">
          <ListItemText primary="Início" sx={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component="a" href="#planos">
          <ListItemText primary="Planos" sx={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component="a" href="#sobre-nos">
          <ListItemText primary="Sobre Nós" sx={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component="a" href="#contato">
          <ListItemText primary="Contato" sx={{ color: "#fff" }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className="header" sx={{ backgroundColor: "#000" }}>
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
              sx={{ color: "#fff" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <Facebook />
            </IconButton>
            <Typography variant="body2" sx={{ color: "#fff" }}>21.9 9995-6202 </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>21.9 9995-3526</Typography>
          </Box>
          <Box className="nav" sx={headerStyles.nav}>
            <Button href="#inicio" className="nav-item" sx={{ ...headerStyles.navItem, color: "#fff" }}>
              Início
            </Button>
            <Button href="#planos" className="nav-item" sx={{ ...headerStyles.navItem, color: "#fff" }}>
              Planos
            </Button>
            <Button href="#sobre-nos" className="nav-item" sx={{ ...headerStyles.navItem, color: "#fff" }}>
              Sobre Nós
            </Button>
            <Button href="#contato" className="nav-item" sx={{ ...headerStyles.navItem, color: "#fff" }}>
              Contato
            </Button>
          </Box>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' }, color: "#fff" }}
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, backgroundColor: "#000", color: "#fff" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
