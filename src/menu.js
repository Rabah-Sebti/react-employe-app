import { Link } from "react-router-dom";
// import './App.css'
import { useGlobalContext } from "./context/context";
import { Box, Typography, useTheme } from "@mui/material";
import logoImage from "./assets/employeApp.png";
const Menu = () => {
  // const { user } = useGlobalContext();
  const theme = useTheme();
  return (
    <Box
      display="flex"
      gridTemplateColumns="repeat(12, 1fr)"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        gridColumn="span 4"
        gridRow="span 4"
        display="flex"
        backgroundColor={theme.palette.primary.main}
        flexDirection="column"
        justifyContent="center"
        p="1.25rem 1rem"
        alignItems="center"
        borderRadius="0.55rem"
        sx={{
          marginTop: "40px",
        }}
      >
        <Box
          component="img"
          alt="profile"
          src={logoImage}
          height="200px"
          width="200px"
          // borderRadius="50%"
          display="flex"
          sx={{
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
        <Typography>User and Employee management</Typography>
        <Link to={`/login`} className="item-1">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Start the application
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
export default Menu;
