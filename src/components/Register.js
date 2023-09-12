import { useState, useEffect } from "react";
import axios from "axios";
// import './Axios'
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Register() {
  // localStorage.removeItem("user");
  debugger;
  const { user, register, isLoading, showAlert } = useGlobalContext();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    geolocation: "",
  });
  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  // const [usr,setusr]=useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    register({ ...values });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      {user && <Navigate to="/planning" replace />}
      {/* bootstrap */}
      <div className="">
        {showAlert && (
          <div className="alert alert-danger">
            Error in server please try again !
          </div>
        )}
        <form className="form row">
          <div className="col col-12">
            <label for="inputName " class="visually-hidden">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <br />
          <div className="my-2 col col-12">
            <label for="inputEmail " class="visually-hidden">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              name="email"
              value={values.email}
              onChange={handleChange}
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
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          {/* <div class="d-grid gap-2"></div> */}
          <div className="d-grid gap-2 mt-2">
            <button
              type="submit"
              onClick={handleClick}
              class="btn btn-primary mb-3"
            >
              {isLoading ? "Fetching User..." : "Register"}
            </button>
          </div>
          <Link to="/login" className="bg-white m">
            Login
          </Link>
        </form>
      </div>
      {/* fin bootstrap */}
    </>
  );
}
export default Register;
