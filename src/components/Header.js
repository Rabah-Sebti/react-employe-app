import menu from "../pages/menu_planning";
import SearchBar from "./SearchBar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGlobalContext } from "../context/context";
import { Link, useNavigate, redirect, Navigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  const navigate = useNavigate();
  function loou() {
    debugger;
  }
  debugger;
  const { user, logout } = useGlobalContext();
  const dataSearch = [
    { id: 1, title: "Salarie", link: "/planning/salarie" },
    { id: 2, title: "Job", link: "/planning/Job" },
    { id: 3, title: "Salaries cards", link: "/planning/salariesCards" },
    { id: 4, title: "Job Cards", link: "/planning/JobCards" },
  ];
  return (
    <>
      {!user && <Navigate to="/planning" />}
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/planning">
            <img
              src="../entreprise.png"
              alt="Bootstrap"
              width="30"
              height="24"
            ></img>
          </Link>
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
              {dataSearch.map((item) => {
                return (
                  <li key={item.id} class="nav-item ">
                    <Link className="nav-link me-2" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}

              <li class="nav-item dropdown">
                <SearchBar data={dataSearch} placeholder="component" />
              </li>
              <li class="nav-item dropdown ms-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AccountCircleIcon /> {user}
                </a>
                <ul class="dropdown-menu ">
                  <li class="nav-item dropdown">
                    <i className="LogoutIc" onClick={() => logout()}>
                      <LogoutIcon />
                    </i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
