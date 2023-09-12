import React, { useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Planning from "./Planning";
import { useSelector } from "react-redux";
import Dashboard from "./dashboard";
const PrivateRoute = (props) => {
  debugger;
  const { user } = useGlobalContext();
  // const user = useSelector((state) => state.global.user);

  const { Component } = props;
  const navigate = useNavigate();

  return <>{user ? <Dashboard /> : <Navigate to="/login"></Navigate>}</>;
};
export default PrivateRoute;
