import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import { useGetCustomersQuery, useGetProductsQuery } from "../redux/api";
import Paper from "@mui/material/Paper";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DataGridCustomToolbar from "../components/DataGridCustomToolbar";
import { useGlobalContext } from "../context/context";
import HeaderPage from "../components/HeaderPage";
import { Navigate } from "react-router-dom";
const Users = () => {
  const { fetchUsers, users, isLoading, user } = useGlobalContext();
  const theme = useTheme();
  //   const { data, isLoading } = useGetCustomersQuery();
  // the params to send to server
  //     {
  //     page,
  //     pageSize,
  //     sort: JSON.stringify(sort),
  //     search,
  //   }
  // values to be sent to the backend
  useEffect(() => {
    fetchUsers();
  }, []);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});

  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");

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

      <HeaderPage title="Users" subtitle="See your list of users." />
      <Box mt="20px" sx={{ height: 400, width: "100%" }}>
        <DataGrid
          loading={isLoading || !users}
          rows={users || []}
          columns={columns}
          getRowId={(row) => row._id}
          //   slots={{ toolbar: GridToolbar }}
          rowCount={(users && users.length) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
          // sx={{
          //   "& .MuiDataGrid-virtualScroller": {
          //     backgroundColor: theme.palette.primary.light,
          //   },
          // }}
        />
      </Box>
    </Box>
  );
};

export default Users;
