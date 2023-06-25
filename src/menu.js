import { Link } from "react-router-dom";
// import './App.css'
import { useGlobalContext } from "./context/context";
const Menu = () => {
  const { user } = useGlobalContext();
  return (
    <>
      <div className="App">
        <header className="App-header row">
          <img
            className="logo col-12 col-lg-6 col-md-6 col-sm-12"
            src="./employeApp.png"
          ></img>
          {/* <ul className="items col-12 col-lg-6 col-md-6 col-sm-12">
            <li> */}
          <p className="text-dark">User and Employee management</p>
          <Link to={`/login`} className="item-1">
            Start the application
          </Link>
          {/* </li>
          </ul> */}
        </header>
      </div>
    </>
  );
};
export default Menu;
