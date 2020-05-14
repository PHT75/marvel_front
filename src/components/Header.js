import React from "react";
import logo from "../assets/Logo_Marvel.png";
// import { useHistory } from "react-router-dom";
// const history = useHistory();

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img src={logo} alt="logo_Marvel" />
        <button
        // onClick={() => {
        //   history.push("/");
        // }}
        >
          Charac
        </button>
        <button
        // onClick={() => {
        //   history.push("/comics");
        // }}
        >
          Comics
        </button>
        <button
        // onClick={() => {
        //   history.push();
        // }}
        >
          Fav
        </button>
      </div>
    </div>
  );
};

export default Header;
