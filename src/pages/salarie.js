import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context/context";
import Swal from "sweetalert2";
import HeaderPage from "../components/HeaderPageManag";
import ModalDragSal from "./modal_salarie";
import ModalDragJob from "./modal_job";
import {
  useCreateSalarieMutation,
  useGetJobsQuery,
  useGetSalariesQuery,
} from "../context/api";
import { Autocomplete, Box, TextField } from "@mui/material";
import { Divider, theme } from "antd";
import { countries } from "../assets/country";
import { Navigate } from "react-router-dom";
const Salarie = () => {
  debugger;
  const columns = [
    // { field: "id", headerName: "ID", hideable: true },
    { field: "SAL_NOM", headerName: "Last name", width: 150 },
    { field: "SAL_PRENOM", headerName: "First name", width: 100 },
  ];
  const columnsJobs = [
    // { field: "id", headerName: "ID", hideable: true },
    { field: "JOB_LIB", headerName: "Job Label", width: 100 },
    { field: "JOB_CODE", headerName: "Job Code", width: 100 },
  ];
  // const { data: dataSalar } = useGetSalariesQuery();
  // const dataSalar = useGetJobsQuery().data;
  //  const [login, { isLoading }] = useLoginMutation();
  // const { data: dataJobs } = useGetJobsQuery();
  // const [createSalarie] = useCreateSalarieMutation();
  const {
    fetchSalaries,
    createSal,
    deleteSal,
    editSal,
    jobs,
    isLoading,
    succes,
    fetchJobs,
    salaries,
    initialiseParams,
    user,
  } = useGlobalContext();
  // useEffect(() => {
  //   initialiseParams();
  // }, []);
  const [values, setValues] = useState({
    SAL_NOM: "",
    SAL_PRENOM: "",
    SAL_ADR: "",
    SAL_PAYS: "",
    SAL_PHONE: "",
    id: "",
    createdAt: "",
    createdBy: "",
    SAL_START_DATE: "",
    SAL_END_DATE: "",
    JOB_LIB: "",
    JOB_LIB: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showModalJob, setShowModalJob] = useState(false);
  const handleChange = (event) => {
    debugger;
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleChangeAuto = (data) => {
    debugger;
    setValues({ SAL_PAYS: data.code });
  };
  const chargerSal = () => {
    debugger;
    if (salaries.length === 0) {
      fetchSalaries();
    }
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const closeModalJobs = () => {
    setShowModalJob(false);
  };
  const submitCreateSal = () => {
    debugger;
    const {
      SAL_NOM,
      SAL_PRENOM,
      SAL_ADR,
      JOB_LIB,
      SAL_PAYS,
      SAL_PHONE,
      SAL_START_DATE,
      SAL_END_DATE,
    } = values;
    if (SAL_NOM && SAL_PRENOM && JOB_LIB && SAL_START_DATE) {
      createSal(values);
      setValues({
        SAL_NOM: "",
        SAL_PRENOM: "",
        SAL_ADR: "",
        JOB_LIB: "",
        SAL_PAYS: "",
        SAL_PHONE: "",
        id: "",
        SAL_START_DATE: "",
        SAL_END_DATE: "",
      });
    } else {
      Swal.fire({
        title: "Warning",
        text: "please provide the important fields",
        icon: "Error",
      });
    }
  };
  // if (succes) {
  //   Swal.fire({
  //     title: "Success",
  //     text: "Action Effectuer Avec Succés",
  //     icon: "success",
  //   });
  // initialiseParams();
  // }
  const submitUpdateSal = () => {
    debugger;
    if (values.SAL_ID) {
      const { SAL_ID } = values;
      editSal(SAL_ID, values);
    }
  };
  const fillChamp = (oneSalarie) => {
    debugger;
    setValues({
      ...values,
      SAL_ID: oneSalarie[0].SAL_ID,
      SAL_NOM: oneSalarie[0].SAL_NOM,
      SAL_PRENOM: oneSalarie[0].SAL_PRENOM,
      SAL_START_DATE: oneSalarie[0].SAL_START_DATE,
      SAL_END_DATE: oneSalarie[0].SAL_END_DATE,
      SAL_ADR: oneSalarie[0].SAL_ADR,
      JOB_LIB: oneSalarie[0].JOB_LIB,
      SAL_PAYS: oneSalarie[0].SAL_PAYS,
      SAL_PHONE: oneSalarie[0].SAL_PHONE,
      createdAt: oneSalarie[0].createdAt,
      createdBy: oneSalarie[0].createdBy,
    });
  };
  const fillChampJob = (oneSalarie) => {
    debugger;
    setValues({
      ...values,
      JOB_ID: oneSalarie[0].JOB_ID,
      JOB_LIB: oneSalarie[0].JOB_LIB,
    });
  };

  debugger;
  // if (isLoading)
  // && !succes)

  // return <div className="loading"></div>;

  const submitDeleteSal = () => {
    debugger;
    if (values.SAL_ID) {
      const { SAL_ID } = values;
      deleteSal(SAL_ID);
      setValues({
        SAL_NOM: "",
        SAL_PRENOM: "",
        SAL_ADR: "",
        JOB_LIB: "",
        SAL_PAYS: "",
        SAL_PHONE: "",
        id: "",
        SAL_START_DATE: "",
        SAL_END_DATE: "",
        createdAt: "",
        createdBy: "",
      });
    }
  };
  const showJobGrid = () => {
    if (jobs.length === 0) {
      fetchJobs();
    }
    setShowModalJob(true);
  };

  return (
    <Box>
      {!user && <Navigate to="/login" replace />}
      {/* <Header /> */}
      <HeaderPage
        name="Salarie"
        submitCreateJob={submitCreateSal}
        submitUpdateJob={submitUpdateSal}
        submitDeleteJob={submitDeleteSal}
        chargerJob={chargerSal}
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
              name="SAL_NOM"
              value={values.SAL_NOM}
              onChange={handleChange}
              required
              id="outlined-required"
              label="First Name"
              defaultValue="First Name"
              sx={{
                opacity: "0.5",
              }}
            />
            <TextField
              name="SAL_PRENOM"
              value={values.SAL_PRENOM}
              onChange={handleChange}
              required
              id="outlined-required2"
              label="Last Name"
              defaultValue="Last Name"
              sx={{
                opacity: "0.5",
              }}
            />
          </div>
          <div>
            <TextField
              name="SAL_ADR"
              value={values.SAL_ADR}
              onChange={handleChange}
              required
              id="outlined-required3"
              label="Adress"
              defaultValue="Adress"
              sx={{
                opacity: "0.5",
              }}
            />
            <TextField
              name="SAL_PAYS"
              value={values.SAL_PAYS}
              onChange={handleChange}
              required
              id="outlined-required4"
              label="Country"
              defaultValue="Country"
              sx={{
                opacity: "0.5",
              }}
            />
          </div>

          <div>
            <TextField
              name="SAL_PHONE"
              value={values.SAL_PHONE}
              onChange={handleChange}
              required
              id="outlined-required7"
              label="Phone Number"
              defaultValue="Phone Number"
              sx={{
                opacity: "0.5",
              }}
            />
            <TextField
              name="JOB_LIB"
              value={values.JOB_LIB}
              onChange={handleChange}
              required
              id="outlined-required8"
              label="Job"
              defaultValue="Job"
              sx={{
                opacity: "0.5",
              }}
              onClick={() => showJobGrid()}
            />
          </div>
          {/* <Divider /> */}

          <div>
            <TextField
              name="createdAt"
              value={values.createdAt}
              onChange={handleChange}
              required
              id="outlined-required9"
              label="created At"
              defaultValue="created At"
              sx={{
                opacity: "0.5",
              }}
              disabled
            />
            <TextField
              name="createdBy"
              value={values.createdBy}
              onChange={handleChange}
              required
              id="outlined-required10"
              label="created By"
              defaultValue="created By"
              sx={{
                opacity: "0.5",
              }}
              disabled
            />
          </div>
        </Box>
      </Box>

      {showModal ? (
        <ModalDragSal
          jobs={salaries}
          columns={columns}
          fillChamp={fillChamp}
          masterField={values.JOB_ID}
          closeModal={closeModal}
          master_id="SAL_ID"
          fetchSalaries={fetchSalaries}
        />
      ) : (
        ""
      )}
      {showModalJob ? (
        <ModalDragJob
          jobs={jobs}
          columns={columnsJobs}
          fillChamp={fillChampJob}
          // masterField={values.JOB_ID}
          closeModal={closeModalJobs}
          master_id="SAL_ID"
          fechJobs={fetchJobs}
        />
      ) : (
        ""
      )}
    </Box>
  );
};
export default Salarie;
