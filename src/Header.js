import React, { useContext } from "react";
import PatientForm from "./PatientForm";
import { Link } from "react-router-dom";
import "./Header.css";
// import { UserContext } from "./UserContext";
import ManContext from "./ManContext";

const Header = () => {
  const data = useContext(ManContext);


  console.log(data, "extract");

  return (
    <div className="header-form">
      <ul className="ullist">
        <li>{data.user} </li>
        <li>
          {" "}
          <Link to="home">Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="about">About </Link>{" "}
        </li>

        <li>
          {" "}
          <Link to="patientform">PatientForm </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
