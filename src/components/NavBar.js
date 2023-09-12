import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
  MenuItem,
} from "@mui/material";
import FlexSpaceBett from "./FlexSpaceBett";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
// import { useDispatch } from "react-redux";
// import { logOut, setMode } from "../context/appContext";
import { useState } from "react";
import profileImage from "../assets/img2.jpg";
import SearchBar from "./SearchBar";
import SearchComp from "./Search";
import { useGlobalContext } from "../context/context";
const NavBar = ({ user, isSideBarOpen, setIsSideBarOpen }) => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  const [anchor, setAnchor] = useState(null);
  const isOpen = Boolean(anchor);
  const handleClick = (event) => setAnchor(event.currentTarget);
  const handleClose = () => setAnchor(null);
  const { logout } = useGlobalContext();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      {/* Left side */}
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexSpaceBett>
          <IconButton
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
            }}
          >
            <MenuIcon />
            {/* <SearchBar data={[]} placeholder="search" /> */}
          </IconButton>
          <SearchComp />
        </FlexSpaceBett>
        <FlexSpaceBett gap={"1.5rem"}>
          <IconButton onClick={() => {}}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <FlexSpaceBett>
            <Button
              onClick={handleClick}
              sx={{
                textTransform: "none",
                display: "FlexSpaceBett",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchor}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={logout}>Log Out</MenuItem>
            </Menu>
          </FlexSpaceBett>
        </FlexSpaceBett>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
