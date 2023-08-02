import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Search } from "@mui/icons-material";
// import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
// import ModalSearch from "./Modal";
import logo from "../assets/logo-no-background.png"

const drawerWidth = 240;
function Header(props) {
  const [t, i18n] = useTranslation("global");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [isModalOpen, setIsModalOpen] = React.useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const Option = Select.Option;

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  function handleChange(value) {
    console.log(value);
    handleChangeLanguage(value);
  }
  const getPopupContainer = (triggerNode) => {
    return triggerNode.parentNode; // Use the parent of the Select as the container for the dropdown popup
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "#131313" }}
    >
      <Box sx={{ my: 2 }}>MUI</Box>
      <Divider />
      <List>
        <ListItem key={t("body.navbar.home")} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={t("body.navbar.home")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={t("body.navbar.services")} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={t("body.navbar.services")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={t("body.navbar.company")} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={t("body.navbar.company")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={t("body.navbar.partfolio")} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={t("body.navbar.partfolio")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={t("body.navbar.contacts")} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={t("body.navbar.contacts")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Stack>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          padding: { xs: "4px", sm: "5px", md: "10px" },
          borderBottom: "1px solid #fff",
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "none",
          backdropFilter: "blur(19.4px)",
          webkitBackdropFilter: "blur(19.4px)"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { lg: "none" },
              background: "#fff",
              borderRadius: "10px",
            }}
          >
            <MenuIcon sx={{ fontSize: "34px", color: 'black' }} />
          </IconButton>
          <Box sx={{ flexGrow: { sm: 1 } }}>
            <img
              style={{ height: '25px' }}
              src={logo}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              marginRight: { lg: "150px", xl: "350px" },
            }}
          >
            <NavLink to={'/'} style={{ fontSize: "15px", fontWeight: "500", color: 'black', textTransform: 'uppercase', marginRight: '18px' }}>
              {t("body.navbar.home")}
            </NavLink>
            <NavLink to={'/services'} style={{ fontSize: "15px", fontWeight: "500", color: 'black', textTransform: 'uppercase', marginRight: '18px' }}>
              {t("body.navbar.services")}
            </NavLink>
            <NavLink to={'/company'} style={{ fontSize: "15px", fontWeight: "500", color: 'black', textTransform: 'uppercase', marginRight: '18px' }}>
              {t("body.navbar.company")}
            </NavLink>
            <NavLink to={'/partfolio'} style={{ fontSize: "15px", fontWeight: "500", color: 'black', textTransform: 'uppercase', marginRight: '18px' }}>
              {t("body.navbar.partfolio")}
            </NavLink>
            <NavLink to={'/contacts'} style={{ fontSize: "15px", fontWeight: "500", color: 'black', textTransform: 'uppercase' }}>
              {t("body.navbar.contacts")}
            </NavLink>

          </Box>
          <IconButton>
            <Search sx={{ color: "black" }} />
          </IconButton>
          {/* <ModalSearch isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}

          <Button
            sx={{
              background: "#31c48d",
              fontWeight: "bold",
              fontSize: { xs: "13px", md: "15px" },
              display: { xs: "none", sm: "block" },
              boxShadow: "none",
              margin: { sm: "0 10px", md: "0 20px" },
              padding: { sm: "9px 10px", md: "10px 15px" },
              '&:hover': {
                background: "#31c48d",
                boxShadow: 'none'
              }
            }}
            variant="contained"
          >
            {t("body.navbtn")}
          </Button>
          {/* <Dropdown /> */}
          <Stack sx={{ display: { xs: "none", sm: "block" } }} className="select-container">
            <Select
              defaultValue="en"
              theme="dark"
              onChange={handleChange}
              size="large"
              bordered={false}
              getPopupContainer={getPopupContainer}

            >
              <Option value="en">En</Option>
              <Option value="ru">Ru</Option>
              <Option value="uz">Uz</Option>
            </Select>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Stack >
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
