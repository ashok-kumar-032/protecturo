import React from "react";
import { Row, Col } from "react-bootstrap";
import app_mobile from "../assets/img/app_mobile.webp";
const Global = () => {
  return (
    <section className="bg_light_black pt-3 pt-xl-0">
      <div className="container">
        <div className="position-relative">
          <Row className="flex-column-reverse flex-xl-row text-center text-xl-start align-items-center align-items-xl-start">
            <Col xl={5}></Col>
            <Col
              xl={5}
              sm={8}
              md={6}
              className="d-block d-xl-none position-relative"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img className="w-100" src={app_mobile} alt="app_mobile" />
            </Col>
            <Col
              lg={5}
              className="position-absolute bottom-0 start-0 d-none d-xl-block position-relative"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img className="w-100 z_5" src={app_mobile} alt="app_mobile" />
            </Col>
            <Col
              xl={7}
              className="py-3 py-xl-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p className="fw_700 ff_Bold ff_Medium fs_2xl clr_white_1 lh_75 letter_spacing_4 mb-0">
                Global IoT connectivity to deploy and scale your solutions
              </p>
              <p className="fw_500 ff_Bold ff_Medium fs_md clr_grey_1 pt-1">
                If you're serious about getting your IoT build off the ground -
                Protecturo is ready to make it quick, frictionless and smart.
                Get started today with a free SIM & data, or explore enterprise
                options with our team of IoT experts.
              </p>
              <button className="red_btn mb-0 ff_Montserrat fw_500 fs_xsm clr_white nav_btn overflow-hidden position-relative mt-2 mt-xl-5">
                Get started
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Global;
