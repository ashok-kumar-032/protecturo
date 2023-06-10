import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import nav_logo from "../assets/img/nav_logo.svg";
import { BiMenu } from "react-icons/bi";
const Hero = () => {
  const [first, setFirst] = useState(true);
  function clickshow() {
    setFirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <section className="hero_bg hero_height">
      <Nav className="py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center pointer">
                <img className="w-75" src={nav_logo} alt="nav_logo" />
              </span>
            </div>
            <ul
              className={`nav_show d-flex gap-5 align-items-center mb-0 ${
                first ? "" : "showw ps-0"
              }`}
            >
              <li onClick={() => setFirst(true)}>
                <a
                  className="mb-0 ff_Bold ff_Medium fw_600 fs_sm clr_grey position-relative hover_line home nav_effect"
                  href="#"
                >
                  Benefits
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="mb-0 ff_Bold ff_Medium fw_600 fs_sm clr_grey position-relative hover_line home nav_effect"
                  href="#"
                >
                  Privacy
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="mb-0 ff_Bold ff_Medium fw_600 fs_sm clr_grey position-relative hover_line home nav_effect"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="mb-0 ff_Bold ff_Medium fw_600 fs_sm clr_grey position-relative hover_line home nav_effect"
                  href="#"
                >
                  App
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="mb-0 ff_Bold ff_Medium fw_600 fs_sm clr_grey position-relative hover_line home nav_effect"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="mb-0 ff_Bold ff_Medium fw_600 fs_sm clr_grey me-xl-4 position-relative hover_line home nav_effect"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <button className="red_btn mb-0 ff_Montserrat fw_500 fs_xsm clr_white nav_btn overflow-hidden position-relative">
                  Get started
                </button>
              </li>
            </ul>
            <div className="z-10 d-lg-none">
              <h3 className="clr_white menu_icon" onClick={clickshow}>
                {first ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
          </div>
        </div>
      </Nav>
      <div className="container d-flex flex-column align-items-center flex-grow-1">
        <hr className="hero_line" />
        <p className="fw_700 ff_Bold ff_Medium fs_3xl letter_space lh_95 clr_white_1 text-center max_w_900">
          Cyber safety starts here. For both commercial and personal.
        </p>
      </div>
    </section>
  );
};
export default Hero;
