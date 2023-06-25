import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const SearchBar = ({ data, placeholder }) => {
  const [filterData, setFilterData] = useState([]);
  const [inputFil, setInputFil] = useState("");
  const handleFilter = (e) => {
    debugger;
    const fil = e.target.value;
    setInputFil(fil);
    const newData = data.filter((item) => {
      return item.title.toLowerCase().includes(fil.toLowerCase());
    });
    if (fil === "") {
      setFilterData([]);
    } else {
      setFilterData(newData);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setInputFil("");
  };
  return (
    <div className="search ">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={inputFil}
        ></input>
        <div className="searchIc">
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length != 0 && (
        <div className="dataResult">
          {filterData.map((item) => {
            return (
              <Link className="dataItem" to={item.link}>
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
