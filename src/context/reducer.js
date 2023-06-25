import {
  CLOSE_MODAL,
  FETCH_SINGLE_JOB_SUCCESS,
  REGISTER_USER_SUCCES,
  SET_USER,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  CREATE_JOB_SUCCES,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  EDIT_JOB_SUCCESS,
  SET_LOADING,
  DELETE_JOB_ERROR,
  DELETE_JOB_SUCCESS,
  CREATE_SAL_SUCCES,
  FETCH_SALS_SUCCESS,
  FETCH_SALS_ERROR,
  FETCH_SINGLE_SAL_SUCCESS,
  EDIT_SAL_SUCCESS,
  DELETE_SAL_ERROR,
  DELETE_SAL_SUCCESS,
  INISIALIZE_PARAMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    debugger;
    return {
      ...state,
      isLoading: true,
      succes: false,
    };
  }
  if (action.type === REGISTER_USER_SUCCES) {
    debugger;
    return {
      ...state,
      isLoading: false,
      user: action.payload,
    };
  }
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      showAlert: false,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
      message: action.payload,
    };
  }
  if (action.type === CREATE_JOB_SUCCES) {
    return {
      ...state,
      isLoading: false,
      succes: true,
      message: action.payload,
    };
  }
  if (action.type === FETCH_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      succes: false,
      jobs: action.payload,
    };
  }
  if (action.type === FETCH_JOBS_ERROR) {
    return {
      ...state,
      isLoading: false,
      succes: false,
    };
  }
  if (action.type === FETCH_SINGLE_JOB_SUCCESS) {
    return {
      ...state,
      succes: false,
      isLoading: false,
      oneJob: { ...action.payload },
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      succes: true,
      oneJob: { ...action.payload },
    };
  }
  if (action.type === DELETE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      succes: true,
    };
  }
  if (action.type === DELETE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      succes: false,
      // oneJob: { ...action.payload },
    };
  }
  // salaries
  if (action.type === CREATE_SAL_SUCCES) {
    return {
      ...state,
      isLoading: false,
      succes: true,
      message: action.payload,
    };
  }
  if (action.type === FETCH_SALS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      succes: false,
      salaries: action.payload,
    };
  }

  if (action.type === FETCH_SINGLE_SAL_SUCCESS) {
    return {
      ...state,
      succes: false,
      isLoading: false,
      oneJob: { ...action.payload },
    };
  }
  if (action.type === EDIT_SAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      succes: true,
      oneJob: { ...action.payload },
    };
  }
  if (action.type === DELETE_SAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      succes: true,
    };
  }
  if (action.type === DELETE_SAL_ERROR) {
    return {
      ...state,
      isLoading: false,
      succes: false,
      // oneJob: { ...action.payload },
    };
  }
  if (action.type === INISIALIZE_PARAMS) {
    return {
      ...state,
      isLoading: false,
      succes: false,
      // oneJob: { ...action.payload },
    };
  }
};
export default reducer;
