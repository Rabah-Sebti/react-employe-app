import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context/context";
import ModalDragJob from "./modal_job";
import Swal from "sweetalert2";
import HeaderPage from "../components/HeaderPageManag";
import { useCreateJobMutation, useGetJobsQuery } from "../context/api";
import { Box, TextField } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Navigate } from "react-router-dom";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
const Job = () => {
  const columns = [
    // { field: "JOB_ID", headerName: "ID", hideable: true },
    { field: "JOB_LIB", headerName: "Libelle", width: 150 },
    { field: "JOB_CODE", headerName: "Code", width: 100 },
  ];
  const {
    createJob,
    fetchJobs,
    editJob,
    jobs,
    isLoading,
    succes,
    deleteJob,
    initialiseParams,
    user,
  } = useGlobalContext();
  // const dataJobs = useGetJobsQuery().data;
  // const [createJob] = useCreateJobMutation();
  // useEffect(() => {
  //   initialiseParams();
  // }, []);

  const [values, setValues] = useState({
    JOB_ID: "",
    JOB_LIB: "",
    JOB_CODE: "",
    JOB_START_DATE: "",
    JOB_END_DATE: "",
    id: "",
    createdAt: "",
    createdBy: "",
  });

  const [showModal, setShowModal] = useState(false);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const chargerJob = () => {
    debugger;
    if (jobs.length === 0) {
      fetchJobs();
    }
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const submitCreateJob = () => {
    debugger;
    const { JOB_LIB, JOB_CODE, JOB_START_DATE } = values;
    if (JOB_LIB && JOB_CODE && JOB_START_DATE) {
      createJob(values);
      setValues({
        JOB_ID: "",
        JOB_LIB: "",
        JOB_CODE: "",
        JOB_START_DATE: "",
        JOB_END_DATE: "",
        createdAt: "",
        createdBy: "",
      });
    } else {
      Swal.fire({
        title: "Warning",
        text: "please provide the important fields",
        icon: "Error",
      });
    }
  };
  if (succes) {
    Swal.fire({
      title: "Success",
      text: "Action Effectuer Avec Succés",
      icon: "success",
    });
    initialiseParams();
  }
  const submitUpdateJob = () => {
    debugger;
    if (values.JOB_ID) {
      const { JOB_ID } = values;
      editJob(JOB_ID, values);
    }
  };
  const fillChamp = (oneJob) => {
    setValues({
      ...values,
      JOB_ID: oneJob[0].JOB_ID,
      JOB_CODE: oneJob[0].JOB_CODE,
      JOB_LIB: oneJob[0].JOB_LIB,
      JOB_START_DATE: oneJob[0].JOB_START_DATE,
      JOB_END_DATE: oneJob[0].JOB_END_DATE,
      createdAt: oneJob[0].createdAt,
      createdBy: oneJob[0].createdBy,
    });
  };
  debugger;
  if (isLoading && !succes) {
    return <div className="loading"></div>;
  }
  const submitDeleteJob = () => {
    debugger;
    if (values.JOB_ID) {
      const { JOB_ID } = values;
      deleteJob(JOB_ID);
      setValues({
        JOB_ID: "",
        JOB_LIB: "",
        JOB_CODE: "",
        JOB_START_DATE: "",
        JOB_END_DATE: "",
        id: "",
        createdAt: "",
        createdBy: "",
      });
    }
  };

  return (
    <div>
      {!user && <Navigate to="/login" replace />}
      {/* <Header /> */}
      <HeaderPage
        name="JOB"
        submitCreateJob={submitCreateJob}
        submitUpdateJob={submitUpdateJob}
        submitDeleteJob={submitDeleteJob}
        chargerJob={chargerJob}
      />
      <Box
        sx={{
          marginTop: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            // margin: "10px 100px ",
            // backgroundColor:,
            // display: "block",
            // justifyContent: "center",
            // alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              name="JOB_LIB"
              value={values.JOB_LIB}
              onChange={handleChange}
              required
              id="JOB_LIB"
              label="Job Label"
              // aria-label="Job Label"
              // placeholder="Job Label"
              defaultValue="Job Label"
              sx={{
                opacity: "0.5",
              }}
            />
            <TextField
              name="JOB_CODE"
              value={values.JOB_CODE}
              onChange={handleChange}
              required
              id="JOB_CODE"
              // hiddenLabel={true}
              // aria-label="Job Code"
              label="Job Code"
              defaultValue="Job Code"
              sx={{
                opacity: "0.5",
              }}
            />
          </div>
          <div>
            <TextField
              name="JOB_START_DATE"
              value={values.JOB_START_DATE}
              onChange={handleChange}
              required
              id="JOB_START_DATE"
              label="Start Date"
              defaultValue="Start Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              sx={{
                opacity: "0.5",
              }}
            />
            <TextField
              name="JOB_END_DATE"
              value={values.JOB_END_DATE}
              onChange={handleChange}
              required
              id="JOB_END_DATE"
              label="End Date"
              defaultValue="End Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              sx={{
                opacity: "0.5",
              }}
            />
          </div>
          <div>
            <TextField
              name="createdAt"
              value={values.createdAt}
              onChange={handleChange}
              required
              id="createdAt"
              label="created At"
              defaultValue="created At"
              sx={{
                opacity: "0.5",
              }}
            />
            <TextField
              name="createdBy"
              value={values.createdBy}
              onChange={handleChange}
              required
              id="createdBy"
              label="created By"
              defaultValue="created By"
              sx={{
                opacity: "0.5",
              }}
            />
          </div>
        </Box>
      </Box>
      {/* <div className="row d-flex justify-content-center">
        <div className="col col-6">
          <div class="card mx-auto mt-3 shadow">
            <div class="card-header"></div>
            <div class="card-body">
              <div class="box text-center ">
                <div class="row align-items-center ">
                  <div class="row mx-auto">
                    <input
                      className="col col-6"
                      type="hidden"
                      name="JOB_ID"
                      value={values.JOB_ID}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="id"
                    ></input>
                    <input
                      className="ap-input col col-6"
                      type="text"
                      name="JOB_LIB"
                      value={values.JOB_LIB}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="Job Label *"
                    ></input>
                    <input
                      className="ap-input col col-6"
                      type="text"
                      name="JOB_CODE"
                      value={values.JOB_CODE}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="Job code *"
                    ></input>
                  </div>
                  <div className="row mt-2 mx-auto">
                    <input
                      className="ap-input col-6 "
                      type="text"
                      name="JOB_START_DATE"
                      value={values.JOB_START_DATE}
                      onChange={handleChange}
                      placeholder="Start Date *"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    ></input>
                    <input
                      className="ap-input col-6"
                      type="text"
                      name="JOB_END_DATE"
                      value={values.JOB_END_DATE}
                      onChange={handleChange}
                      placeholder="End Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div></div>
              <input
                id="createdBy"
                className="ap-input col-6"
                type="text"
                name="createdBy"
                value={values.createdBy}
                placeholder="Created By"
                disabled
              ></input>
              <input
                id="createdAt"
                className="ap-input col-6"
                type="text"
                name="createdAt"
                value={values.createdAt}
                placeholder="Created At"
                disabled
              ></input>
            </div>
          </div>
        </div>
      </div> */}
      {showModal ? (
        <ModalDragJob
          jobs={jobs}
          columns={columns}
          fillChamp={fillChamp}
          masterField={values.JOB_ID}
          closeModal={closeModal}
          fetchJobs={fetchJobs}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Job;
