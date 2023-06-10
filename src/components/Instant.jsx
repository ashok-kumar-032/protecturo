import React from "react";
import { Row, Col } from "react-bootstrap";
import g_play from "../assets/img/g_play.svg";
import stor from "../assets/img/ap_stor.svg";
import app_mobile from "../assets/img/app_mobile.webp";
const Instant = () => {
  return (
    <section className="bg_black py-3 py-xl-5">
      <div className="container position-relative">
        <div className="nstant_card bg_light_black p-xl-5 position-relative">
          <Row className="align-items-center justify-content-center justify-content-xl-start pt-xl-2 px-xl-2">
            <Col
              xl={7}
              className="d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start p-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="fw_700 ff_Bold ff_Medium fs_2xl lh_75 letter_spacing_4 clr_white_1">
                Instant connectivity
                <span className="d-block">with the Protecturo app</span>
              </p>
              <p className="fw_500 ff_Bold ff_Medium fs_md clr_grey_1 max_w_500">
                The ideal for the 21st century roadwarrior. The Protecturo app
                lets you to grab a single data plan where and when you want - at
                home or in any of our 190+ destinations. Select a plan from the
                app, download an <span className="clr_red">eSIM</span>, and
                you'll connect on the spot, on physical SIM card required.
              </p>
              <span className="pt-xl-4 mt-xl-2 d-inline-block">
                <img src={g_play} alt="g_play" />
                <img className="ps-sm-4 pt-3 pt-sm-0" src={stor} alt="stor" />
              </span>
            </Col>
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
              className="position-absolute bottom-0 end-0 d-none d-xl-block position-relative"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img className="w-100 z_5" src={app_mobile} alt="app_mobile" />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Instant;
