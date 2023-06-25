import "./App.css";
import React from "react";
import Menu from "./menu";
import Planning from "./pages/Planning";
import Login from "./components/Login";
import Registre from "./components/Register";
import PrivateRoute from "./pages/PrivateRoute";
import Salarie from "./pages/salarie";
import NotFoundPage from "./components/NotFoundPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { useGlobalContext } from "./context/context";
import Job from "./pages/job";
import JobsCards from "./pages/JobsCards";
import SalariesCards from "./pages/salaries_cards";
function App() {
  debugger;
  return (
    <Router>
      {/* <SearchBar /> */}
      <Routes>
        <Route path="/" element={<Menu />} />
        {/* <React.Fragment>
                  <PrivateRoute path="/planning" element={<Planning />} />        
              </React.Fragment> */}
        <Route
          path="/planning"
          element={<PrivateRoute Component={Planning} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registre />} />
        <Route path="/planning/salarie" element={<Salarie />} />
        <Route path="/planning/job" element={<Job />} />
        <Route path="/planning/jobCards" element={<JobsCards />} />
        <Route path="/planning/salariesCards" element={<SalariesCards />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
