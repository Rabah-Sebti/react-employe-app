import axios from "axios";
import "../axios";
import React, { useContext, useReducer, useEffect } from "react";
import {
  REGISTER_USER_SUCCES,
  SET_USER,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  CREATE_JOB_SUCCES,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  CLOSE_MODAL,
  FETCH_SINGLE_JOB_SUCCESS,
  EDIT_JOB_SUCCESS,
  SET_LOADING,
  DELETE_JOB_ERROR,
  DELETE_JOB_SUCCESS,
  CREATE_SAL_SUCCES,
  FETCH_SALS_SUCCESS,
  FETCH_SALS_ERROR,
  EDIT_SAL_SUCCESS,
  FETCH_SINGLE_SAL_SUCCESS,
  DELETE_SAL_SUCCESS,
  DELETE_SAL_ERROR,
  INISIALIZE_PARAMS,
} from "./actions";
import reducer from "./reducer";
const initialState = {
  user: null,
  isLoading: false,
  jobs: [],
  salaries: [],
  showAlert: false,
  oneJob: {
    JOB_LIB: "",
    JOB_CODE: "",
    JOB_START_DATE: "",
    JOB_END_DATE: "",
    id: "",
    createdAt: "",
    createdBy: "",
  },
  singleJobError: false,
  editComplete: false,
  message: "",
  succes: false,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  // register
  const register = async (userInput) => {
    setLoading();
    debugger;
    try {
      const { data } = await axios
        .post("/api/auth/register", {
          ...userInput,
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch({ type: REGISTER_USER_SUCCES, payload: data.user.name });
      sessionStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
      });
    }
  };

  // login
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post("/api/auth/login", {
        ...userInput,
      });
      dispatch({ type: REGISTER_USER_SUCCES, payload: data.user.name });
      sessionStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
      });
    }
  };

  // logout
  const logout = () => {
    debugger;
    sessionStorage.removeItem("user");
    dispatch({ type: LOGOUT_USER });
  };

  // fetch jobs
  const fetchJobs = async () => {
    setLoading();
    try {
      const { data } = await axios.get(`/api/jobs`);
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data.jobs });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_ERROR });
    }
  };

  // create job
  const createJob = async (userInput) => {
    debugger;
    setLoading();
    try {
      const { data } = await axios.post("/api/jobs", {
        ...userInput,
      });

      dispatch({ type: CREATE_JOB_SUCCES, payload: data.job });
    } catch (error) {
      // dispatch({ type: CREATE_JOB_ERROR })
    }
  };
  const deleteJob = async (jobId) => {
    setLoading();
    try {
      await axios.delete(`/api/jobs/${jobId}`);
      dispatch({ type: DELETE_JOB_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_JOB_ERROR });
    }
  };

  const fetchSingleJob = async (jobId) => {
    setLoading();
    try {
      const { data } = await axios.get(`api/jobs/${jobId}`);
      dispatch({ type: FETCH_SINGLE_JOB_SUCCESS, payload: data.job });
    } catch (error) {
      // dispatch({ type: FETCH_SINGLE_JOB_ERROR })
    }
  };
  const editJob = async (jobId, userInput) => {
    debugger;
    setLoading();
    try {
      const { data } = await axios.put(`api/jobs/${jobId}`, {
        ...userInput,
      });
      dispatch({ type: EDIT_JOB_SUCCESS, payload: data.job });
    } catch (error) {
      // dispatch({ type: EDIT_JOB_ERROR })
    }
  };
  // salaries
  const fetchSalaries = async () => {
    setLoading();
    try {
      const { data } = await axios.get(`/api/salaries`);
      dispatch({ type: FETCH_SALS_SUCCESS, payload: data.salaries });
    } catch (error) {
      dispatch({ type: FETCH_SALS_ERROR });
    }
  };

  const createSal = async (userInput) => {
    debugger;
    setLoading();
    try {
      const { data } = await axios.post("/api/salaries", {
        ...userInput,
      });

      dispatch({ type: CREATE_SAL_SUCCES, payload: data.job });
    } catch (error) {}
  };
  const deleteSal = async (salId) => {
    setLoading();
    try {
      await axios.delete(`/api/salaries/${salId}`);
      dispatch({ type: DELETE_SAL_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_SAL_ERROR });
    }
  };

  const fetchSingleSal = async (salId) => {
    setLoading();
    try {
      const { data } = await axios.get(`api/salaries/${salId}`);
      dispatch({ type: FETCH_SINGLE_SAL_SUCCESS, payload: data.job });
    } catch (error) {
      // dispatch({ type: FETCH_SINGLE_JOB_ERROR })
    }
  };
  const editSal = async (salId, userInput) => {
    debugger;
    setLoading();
    try {
      const { data } = await axios.put(`api/salaries/${salId}`, {
        ...userInput,
      });
      dispatch({ type: EDIT_SAL_SUCCESS, payload: data.job });
    } catch (error) {
      // dispatch({ type: EDIT_JOB_ERROR })
    }
  };
  const cancelModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  const initialiseParams = () => {
    dispatch({ type: INISIALIZE_PARAMS });
  };
  useEffect(() => {
    debugger;
    const user = sessionStorage.getItem("user");
    if (user) {
      const newUser = JSON.parse(user);
      dispatch({ type: SET_USER, payload: newUser.name });
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        register,
        login,
        logout,
        fetchJobs,
        createJob,
        deleteJob,
        fetchSingleJob,
        editJob,
        cancelModal,
        fetchSalaries,
        createSal,
        deleteSal,
        editSal,
        initialiseParams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
