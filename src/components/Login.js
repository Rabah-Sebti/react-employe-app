import { useState } from "react";
import axios from "axios";
// import './Axios'
import { Link, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Login = () => {
  const { user, login, isLoading, showAlert } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    login({ email, password });
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
        <form className="form">
          <div>
            <label for="inputEmail " class="visually-hidden">
              Email
            </label>
            <input
              type="email"
              class="form-control"
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
            <label for="inputPassword" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              class="form-control"
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
              onClick={handleClick}
              class="btn btn-primary mb-3"
            >
              {isLoading ? "Fetching User..." : "Login"}
            </button>
          </div>
          <Link to="/register" className="bg-white">
            Register
          </Link>
        </form>
      </div>
    </>
  );
};
export default Login;
