// Rabah Developer
import "./App.css";
import React, { useMemo } from "react";
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
  BrowserRouter,
} from "react-router-dom";
import { useGlobalContext } from "./context/context";
import Job from "./pages/job";
import JobsCards from "./pages/JobsCards";
import SalariesCards from "./pages/salaries_cards";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./themes";
import Header from "./components/Header";
import Users from "./pages/users";
import SalariesGeography from "./pages/salarieGeo";
import Dashboard from "./pages/dashboard";
function App() {
  // const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings("light")), ["light"]);

  debugger;
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Router> */}
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registre />} />

            <Route element={<Header />}>
              <Route
                path="/planning"
                element={<PrivateRoute Component={Planning} />}
              />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/salariesCards" element={<SalariesCards />} />
              <Route path="/salaries" element={<Salarie />} />
              <Route
                path="/salaries/geography"
                element={<SalariesGeography />}
              />

              <Route path="/jobs" element={<Job />} />
              <Route path="/jobsCards" element={<JobsCards />} />
              <Route path="/users" element={<Users />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          {/* </Router> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
