import { useState } from "react";
import axios from "axios";
// import './Axios'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLoginMutation } from "../context/api";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../context/appContext";
const Login = () => {
  debugger;
  const { user, login, isLoading, showAlert } = useGlobalContext();
  // const useLoginMutation =
  // const user = useSelector((state) => state.global.user);
  // const dispatch = useDispatch();
  // const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    debugger;
    e.preventDefault();
    login({ email, password });
    // const { data } = await login({ email, password });
    // dispatch(setCredentials({ ...data, user: data.user }));
    // navigate("/planning");
  };
  return (
    <>
      {user && <Navigate to="/planning" replace />}
      <div className="">
        {showAlert && (
          <div className="alert alert-danger">
            Error in server please try again !
          </div>
        )}
        <form className="form" onSubmit={handleClick}>
          <div>
            <label htmlFor="inputEmail " className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <br />
          <div>
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-2">
            <button
              type="submit"
              // onClick={handleClick}
              className="btn btn-primary mb-3"
            >
              {isLoading ? "Fetching User..." : "Login"}
            </button>
          </div>
          <Link to="/register" className="bg-white">
            {/* <Button variant="outlined" startIcon={<DeleteIcon />}></Button> */}
            Register
          </Link>
        </form>
      </div>
    </>
  );
};
export default Login;
