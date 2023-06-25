import menu from "../planning/menu_planning";
import SearchBar from "./SearchBar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGlobalContext } from "../context/context";
import { Link, useNavigate, redirect, Navigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function loou() {
    debugger;
  }
  debugger;
  const { user, logout } = useGlobalContext();
  const dataSearch = [
    { title: "Salarie", link: "/planning/salarie" },
    { title: "Job", link: "/planning/Job" },
    { title: "association salarie", link: "" },
  ];
  return (
    <>
      {!user && <Navigate to="/planning" />}
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../entreprise.png"
              alt="Bootstrap"
              width="30"
              height="24"
            ></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* planning */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  planning
                </a>

                <ul class="dropdown-menu">
                  {dataSearch.map((item) => {
                    return (
                      <li>
                        <div class="dropdown-item">
                          <Link to={item.link}>{item.title}</Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
              {/* entite */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  entite
                </a>

                <ul class="dropdown-menu">
                  {dataSearch.map((item) => {
                    return (
                      <li>
                        <a class="dropdown-item">{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              {/* Booking */}

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  entite
                </a>
                <ul class="dropdown-menu">
                  {dataSearch.map((item) => {
                    return (
                      <li>
                        <a class="dropdown-item">{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              {/*configuration  */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  configuration
                </a>

                <ul class="dropdown-menu">
                  {dataSearch.map((item) => {
                    return (
                      <li>
                        <a class="dropdown-item">{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li class="nav-item dropdown">
                <SearchBar data={dataSearch} placeholder="component" />
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user}
                </a>

                <ul class="dropdown-menu">
                  <li class="nav-item dropdown">
                    <i className="LogoutIc" onClick={() => logout()}>
                      <LogoutIcon />
                    </i>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item dropdown">
           <i className="LogoutIc" onClick={()=>loou()}
           ><LogoutIcon /></i>    
        </li>    */}
            </ul>
          </div>
        </div>
      </nav>
      {/* ///////////////////////////////////////////////////////////////// */}
      {/* <div class="container text-center"> */}
      {/* </div> */}
      {/* //////////////////////////////////////////////////////// */}
    </>
  );
};
export default Header;
