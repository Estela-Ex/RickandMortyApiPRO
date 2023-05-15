import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DrawerHeader } from "./components/DrawerHeader";
import { AppBar } from "../ui/AppBar";
import { Drawer } from "../ui/Drawer";
import { drawerMenu } from "../../const/drawerMenu";
import Link from "../Link";
import { HOME } from "../../const/routes";
import { useAuthContext } from "../../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

export default function MiniDrawer() {
  const {logout} = useAuthContext()
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  function handleDrawer() {
    setOpen((currentState) => !currentState);
  }
 
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="primary"
        position="fixed"
        open={open}
        drawerWidth={drawerWidth}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Rick & Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
        <DrawerHeader theme={theme}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerMenu.map(({ label, icon, path }) => {
            const Icon = icon;
            return (
              <ListItem
                key={label}
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor:
                    location.pathname === path
                      ? theme.palette.primary.light
                      : null,
                }}
                onClick={open && handleDrawer}
              >
                <Link to={path}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
          <ListItem
            disablePadding
            sx={{
              display: "block",
              backgroundColor:
                location.pathname === HOME ? theme.palette.primary.light : null,
            }}
            onClick={open && handleDrawer && logout}
          >
            {/* <Link to={HOME}> */}
            <ListItemButton
              onClick={logout}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText
                primary={"Close Session"}
                sx={{ opacity: open ? 1 : 0, color: "gray" }}
              />
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
