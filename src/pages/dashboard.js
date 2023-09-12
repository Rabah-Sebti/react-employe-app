import React, { useEffect, useMemo } from "react";
// import Header from "../../components/Header";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import BoxGrid from "../components/BoxGrid";
import { DataGrid } from "@mui/x-data-grid";
import { useGlobalContext } from "../context/context";
import { Email, PointOfSale } from "@mui/icons-material";
import HeaderPage from "../components/HeaderPage";
import { ResponsiveLine } from "@nivo/line";
import ChartUsers from "./ChartEvolution";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width:800px)");

  const { fetchUsers, users, isLoading, user } = useGlobalContext();

  //   const totalUsers = [{ x: "fevrier", y: "5" }];
  //   const totalUsersLine = {
  //     id: "totalUnits",
  //     color: theme.palette.secondary[600],
  //     data: totalUsers,
  //   };
  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    // {
    //   field: "_id",
    //   headerName: "ID",
    //   // , width: 90
    //   flex: 0.5,
    //   hidden: true,
    // },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      //   width: 150,
      //   editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
      //   width: 150,
      //   editable: true,
    },
    // format phone number
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    //   },
    // },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      {!user && <Navigate to="/login" replace />}
      <HeaderPage title="Dashboard" subtitle="See your Dashboard." />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <BoxGrid
          title="Total Employees"
          value={users && users.length}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {/* <BoxGrid /> */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{
            "& .MuiDataGrid-root": {
              //   border: "none",
              border: `solid ${theme.palette.secondary.main}`,
              //   borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !users}
            getRowId={(row) => row._id}
            rows={users || []}
            columns={columns}
          />
        </Box>
        <BoxGrid
          title="Sales Today"
          value={12000}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
