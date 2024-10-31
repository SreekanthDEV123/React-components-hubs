import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import ManContext from "./ManContext";

const Header = () => {
  const data = useContext(ManContext);
  const cartItem = useSelector((store) => store.cart?.items);

  return (
    <div className="header-form">
      <ul className="ullist">
        <li>{data?.user || "Guest"}</li>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="patientform">PatientForm</Link>
        </li>
        <li>cart-({cartItem.length})</li>
      </ul>
    </div>
  );
};

export default Header;
