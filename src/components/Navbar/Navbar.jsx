import React from "react";

import { Link as RouterLink, NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./Navbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}></MenuItem>

      <MenuItem
        onClick={() => {
          handleMenuClose();
        }}
      >
        <IconButton>
          <LogoutIcon />
        </IconButton>
        Log out
      </MenuItem>

      {
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/register" className="mobile-link">
            Register
          </NavLink>
        </MenuItem>
      }

      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/login" className="mobile-link">
          Login
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <InfoIcon />
        </IconButton>
        <NavLink to="/about" className="mobile-link">
          <p onClick={handleMobileMenuClose}>About</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <LocalMallIcon />
        </IconButton>
        <NavLink to="/products" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Shop</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <LocationOnIcon />
        </IconButton>
        <NavLink to="/local" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Location</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <LocalMallIcon />
        </IconButton>
        <NavLink to="/cart" className="mobile-link">
          <p onClick={handleMobileMenuClose}>My Cart</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <NavLink to="/favorite" className="mobile-link">
          <p onClick={handleMobileMenuClose}>My Favorites</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/admin" className="mobile-link">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <InfoIcon />
          </IconButton>
          <p>Admin</p>
        </NavLink>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: "sticky", top: 0, right: 0, left: 0, zIndex: 11 }}>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Button
              className="n-link"
              sx={{
                my: 2,
                color: "black",

                fontSize: "14px",
              }}
              component={NavLink}
              to="/"
            >
              EZ
            </Button>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className="n-link"
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/products"
            >
              COURCES
            </Button>
            <Button
              className="n-link"
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/about"
            >
              ABOUT
            </Button>

            <Button
              className="n-link"
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={NavLink}
              to="/admin"
            >
              ADMIN
            </Button>
          </Box>
          <LiveSearch />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <RouterLink to="/favorite" style={{ color: "black" }}>
              <IconButton
                style={{ color: "black" }}
                size="large"
                edge="end"
                aria-haspopup="true"
              >
                <StarOutlineIcon />
              </IconButton>
            </RouterLink>
            <RouterLink to="/cart" style={{ color: "black" }}>
              <IconButton
                style={{ color: "black" }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
              >
                <Badge badgeContent={5} color="warning">
                  <LocalMallIcon />
                </Badge>
              </IconButton>
            </RouterLink>

            <IconButton
              style={{ color: "black" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AdminPanelSettingsIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              // color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
