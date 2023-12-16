import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import FlexSpaceBett from "./FlexSpaceBett";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profileImage from "../assets/img2.png";
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    link: "dashboard",
  },
  {
    text: "Management",
    icon: null,
    link: null,
  },
  {
    text: "Employs",
    icon: <Groups2Outlined />,
    link: "Salaries",
    // <ShoppingCartOutlined />,
  },
  {
    text: "Jobs",
    icon: <Groups2Outlined />,
    link: "Jobs",
  },
  // {
  //   text: "Transactions",
  //   icon: <ReceiptLongOutlined />,
  // },
  // {
  //   text: "Geography",
  //   icon: <PublicOutlined />,
  // },
  {
    text: "Display",
    icon: null,
    link: null,
  },
  // {
  //   text: "Overview",
  //   icon: <PointOfSaleOutlined />,
  //   link: "Salaries",
  // },
  {
    text: "Employs(cards)",
    icon: <TodayOutlined />,
    link: "salariesCards",
  },
  {
    text: "jobs(cards)",
    icon: <CalendarMonthOutlined />,
    link: "jobsCards",
  },
  {
    text: "Users",
    icon: <CalendarMonthOutlined />,
    link: "users",
  },
  // {
  //   text: "Breakdown",
  //   icon: <PieChartOutlined />,
  //   link: "Salaries",
  // },
  {
    text: "Emplacement",
    icon: null,
    link: "Salaries",
  },
  {
    text: "Geography(employees)",
    icon: <PublicOutlined />,
    link: "Salaries/geography",
  },
  // {
  //   text: "Admin",
  //   icon: <AdminPanelSettingsOutlined />,
  //   link: "Salaries",
  // },
  // {
  //   text: "Performance",
  //   icon: <TrendingUpOutlined />,
  //   link: "Salaries",
  // },
];
const SideBar = ({
  user,
  isNonMobile,
  isSideBarOpen,
  setIsSideBarOpen,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="4px 4px 4px 6px">
              <FlexSpaceBett color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="6px">
                  <Typography variant="h4" fontWeight="bold">
                    Employs App
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexSpaceBett>
            </Box>
            <List>
              {navItems.map(({ text, icon, link }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                const lcLink = link.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcLink}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box bottom="2rem">
            <Divider />
            <FlexSpaceBett
              textTransform="none"
              gap="1rem"
              m="1.5rem 2rem 0 3rem"
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user}
                </Typography>
                {/* <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user}
                </Typography> */}
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexSpaceBett>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};
export default SideBar;
