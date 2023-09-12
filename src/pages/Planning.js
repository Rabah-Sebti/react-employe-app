import Header from "../components/Header";
import Login from "../components/Login";
import { useGlobalContext } from "../context/context";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import ChartEvolution from "./ChartEvolution";
import { useSelector } from "react-redux";
// import Swal from 'bootstrap-sweetalert'
const Planning = () => {
  debugger;
  // const user = useSelector((state) => state.global.user);
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <ChartEvolution /> */}
      </div>
    </>
  );
};
export default Planning;
