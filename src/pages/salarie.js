import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context/context";
import Swal from "sweetalert2";
import HeaderPage from "../components/HeaderPage";
import ModalDragSal from "./modal_salarie";
import ModalDragJob from "./modal_job";
const Salarie = () => {
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
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const chargerSal = () => {
    debugger;
    fetchSalaries();
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
  if (succes) {
    Swal.fire({
      title: "Success",
      text: "Action Effectuer Avec Succés",
      icon: "success",
    });
    initialiseParams();
  }
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
    debugger;
    setValues({
      ...values,
      JOB_ID: oneSalarie[0].JOB_ID,
      JOB_LIB: oneSalarie[0].JOB_LIB,
    });
  };

  debugger;
  if (isLoading && !succes) {
    return <div className="loading"></div>;
  }
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
    fetchJobs();
    setShowModalJob(true);
  };

  return (
    <div className="">
      <Header />
      <HeaderPage
        name="Salarie"
        submitCreateJob={submitCreateSal}
        submitUpdateJob={submitUpdateSal}
        submitDeleteJob={submitDeleteSal}
        chargerJob={chargerSal}
      />
      <div className="row d-flex justify-content-center">
        <div className="col col-6">
          <div class="card mx-auto mt-3 shadow">
            <div class="card-header"></div>
            <div class="card-body">
              <div class="box text-center ">
                <div class="row align-items-center ">
                  <div class="row mx-auto">
                    <input
                      className="col col-8"
                      type="hidden"
                      name="SAL_ID"
                      value={values.SAL_ID}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="id"
                    ></input>
                    <input
                      className="col col-8"
                      type="hidden"
                      name="JOB_ID"
                      value={values.JOB_ID}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="id job"
                    ></input>
                    <input
                      className="ap-input col col-6"
                      type="text"
                      name="SAL_NOM"
                      value={values.SAL_NOM}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="First name *"
                    ></input>
                    <input
                      className="ap-input col col-6"
                      type="text"
                      name="SAL_PRENOM"
                      value={values.SAL_PRENOM}
                      onChange={handleChange}
                      // __onClick={handleClick}
                      placeholder="Last name *"
                    ></input>
                  </div>
                  <div className="row mt-2 mx-auto">
                    <input
                      className="ap-input col-6 "
                      type="text"
                      name="SAL_ADR"
                      value={values.SAL_ADR}
                      onChange={handleChange}
                      placeholder="Adress"
                    ></input>
                    <input
                      className="ap-input col-6 "
                      type="text"
                      name="SAL_PAYS"
                      value={values.SAL_PAYS}
                      onChange={handleChange}
                      placeholder="Country"
                    ></input>
                  </div>
                  <div className="row mt-2 mx-auto">
                    <input
                      className="ap-input col-6 "
                      type="text"
                      name="SAL_START_DATE"
                      value={values.SAL_START_DATE}
                      onChange={handleChange}
                      placeholder="Start Date *"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    ></input>
                    <input
                      className="ap-input col-6"
                      type="text"
                      name="SAL_END_DATE"
                      value={values.SAL_END_DATE}
                      onChange={handleChange}
                      placeholder="End Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    ></input>
                  </div>
                  <div className="row mt-2 mx-auto">
                    <input
                      className="ap-input col-6 "
                      type="text"
                      name="SAL_PHONE"
                      value={values.SAL_PHONE}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    ></input>
                    <input
                      className="ap-input col-6 "
                      type="text"
                      name="JOB_LIB"
                      value={values.JOB_LIB}
                      onChange={handleChange}
                      placeholder="Job *"
                      onClick={showJobGrid}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              {/* <div></div> */}
              <input
                id="createdBy"
                className="ap-input col-6 "
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
      </div>
      {showModal ? (
        <ModalDragSal
          jobs={salaries}
          columns={columns}
          fillChamp={fillChamp}
          masterField={values.JOB_ID}
          closeModal={closeModal}
          master_id="SAL_ID"
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
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Salarie;
