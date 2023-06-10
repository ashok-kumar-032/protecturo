import React, { useEffect, useState } from "react";
import nav_logo from "../assets/img/nav_logo.svg";
const Loading = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div
      id="none"
      className="loading_back min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg_effect">
        <span className="preloaderAnimation d-flex align-items-center pointer justify-content-center justify-content-sm-start">
          <img src={nav_logo} alt="nav_logo" />
        </span>
      </div>
    </div>
  );
};
export default Loading;
