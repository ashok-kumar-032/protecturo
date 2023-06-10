import React from "react";
import { Row, Col } from "react-bootstrap";
import privacy_img from "../assets/img/privacy_img.webp";
const Privacy = () => {
  return (
    <section className="bg_black py-3 py-xl-5">
      <div className="container">
        <Row className="align-items-center justify-content-center">
          <Col
            xl={6}
            sm={8}
            xs={12}
            className="d-flex justify-content-end"
            data-aos="fade-down-right"
            data-aos-delay="300"
            data-aos-duration="3000"
          >
            <img
              className="w-100 px-lg-5 pt-lg-5"
              src={privacy_img}
              alt="privacy_img"
            />
          </Col>
          <Col
            xl={6}
            className="pt-4 pt-xl-5 text-center text-xl-start "
            data-aos="fade-up-left"
            data-aos-delay="600"
            data-aos-duration="3000"
          >
            <p className="fw_700 ff_Bold ff_Medium fs_lg our mb-0">
              Our standards
            </p>
            <p className="fw_700 ff_Bold ff_Medium fs_2xl clr_white letter_spacing_4 lh_75 pt-2">
              Privacy standards not seen before in telecom
            </p>
            <p className="fw_500 ff_Bold ff _Heavy ff _Light ff_Medium ff_Re gular fs_sm clr_grey pt-xl-3 mb-0 mb-sm-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p className="fw_500 ff_Bold ff_Medium fs_sm clr_grey pt-2">
              Your personal information is 100% safe with us, because we do not
              require any personal information besides email. Of course no
              contracts, no credit checks and no fine prints. To protect your
              privacy online, our data plans come with a Privacy IP address.
            </p>
            <button className="mb-0 red_btn ff_Montserrat fw_500 fs_xsm clr_white nav_btn overflow-hidden position-relative mt-sm-4">
              Get started
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Privacy;
