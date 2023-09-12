import { Box, useMediaQuery } from "@mui/material";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const Header = () => {
  const user = "amin";
  // useSelector((state) => state.global.user);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        user={user}
        isNonMobile={isNonMobile}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        drawerWidth="220px"
      />
      <Box flexGrow={1}>
        <NavBar
          user={user}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Header;
