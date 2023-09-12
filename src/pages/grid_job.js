import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { DataGridPro, GridRow, GridColumnHeaders } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
// import { useDemoData } from "@mui/x-data-grid-generator";

// import { useGlobalContext } from "../context/context";
const GridJob = (props) => {
  debugger;
  const [tableData, setTableData] = useState([]);
  // const { jobs, fetchSingleJob } = useGlobalContext();
  const [rowSelectionModel, setRowSelectionModel] = useState();
  const [job, setJob] = useState([]);
  const MemoizedRow = React.memo(GridRow);
  const theme = useTheme();
  const MemoizedColumnHeaders = React.memo(GridColumnHeaders);

  debugger;
  // const job=jobs.map((item)=>{
  //     return item.id===rowSelectionModel;
  // })
  const master_id = props.master_id;
  return (
    <>
      <DataGrid
        rows={props.jobs}
        columns={props.columns}
        // pageSize={props.pageSize}
        onRowSelectionModelChange={(selec) => {
          debugger;
          setRowSelectionModel(selec);
          const job = props.jobs.filter((item) => {
            debugger;
            const idd = item.JOB_ID;
            return item.JOB_ID === selec[0];
          });
          props.fillChamp(job);
          // fetchSingleJob(job[0]._id)
        }}
        // components={{
        //   Row: MemoizedRow,
        //   ColumnHeaders: MemoizedColumnHeaders,
        // }}
        rowHeight={38}
        // disableRowSelectionOnClick
        initialState={{
          // ...data.initialState,
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        getRowId={(row) => row.JOB_ID}
      />
    </>
  );
};
export default GridJob;
