import React from "react";
import { Row, Col } from "react-bootstrap";
import some from "../assets/img/some.webp";
import Accordion from "react-bootstrap/Accordion";
const Some = () => {
  return (
    <section className="bg_black py-xl-5 pt-3 position-relative overflow-hidden">
      <div className="back_some back_red_img z_1 position-absolute"></div>
      <div className="container pb-xl-5 mb-xl-5">
        <div className="pb-xl-5 mb-xl-5">
          <Row className=" justify-content-center justify-content-xl-start">
            <Col xl={6} xs={12} className="position-relative z_5">
              <p className="fw_700 ff_Bold ff_Medium fs_lg our mb-0">FAQs</p>
              <p className="fw_700 ff_Bold ff_Medium fs_2xl clr_white_2 lh_75 letter_spacing_4">
                Some useful answers
              </p>
              <Accordion defaultActiveKey="0">
                <Accordion.Item
                  eventKey="0"
                  className="my-4"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  <Accordion.Header>
                    <p className="fw_600 fs_lg ff_Bold ff_Medium letter_spacing_2 clr_white mb-0">
                      what are the main objectives of cyber security?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fw_500 fs_xsm ff_Bold ff_Medium clr_white">
                      At vero eos et accusamus et iusto odio dign era sue
                      issimos ducimus qui blanditiis praesentium vol uptatum
                      deleniti atque corrupti.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className="my-4"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="2000"
                >
                  <Accordion.Header>
                    <p className="fw_600 fs_lg ff_Bold ff_Medium letter_spacing_2 clr_grey mb-0">
                      What are the three types of cyber threats?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fw_500 fs_xsm ff_Bold ff_Medium clr_white">
                      At vero eos et accusamus et iusto odio dign era sue
                      issimos ducimus qui blanditiis praesentium vol uptatum
                      deleniti atque corrupti.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className="my-4"
                  data-aos="fade-right"
                  data-aos-delay="900"
                  data-aos-duration="2500"
                >
                  <Accordion.Header>
                    <p className="fw_600 fs_lg ff_Bold ff_Medium letter_spacing_2 clr_grey mb-0">
                      How can you protect yourself from cyber security?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fw_500 fs_xsm ff_Bold ff_Medium clr_white">
                      At vero eos et accusamus et iusto odio dign era sue
                      issimos ducimus qui blanditiis praesentium vol uptatum
                      deleniti atque corrupti.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className="my-4"
                  data-aos="fade-right"
                  data-aos-delay="1200"
                  data-aos-duration="3000"
                >
                  <Accordion.Header>
                    <p className="fw_600 fs_lg ff_Bold ff_Medium letter_spacing_2 clr_grey mb-0">
                      What would happen without cyber security?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fw_500 fs_xsm ff_Bold ff_Medium clr_white">
                      At vero eos et accusamus et iusto odio dign era sue
                      issimos ducimus qui blanditiis praesentium vol uptatum
                      deleniti atque corrupti.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className="my-4"
                  data-aos="fade-right"
                  data-aos-delay="1500"
                  data-aos-duration="3000"
                >
                  <Accordion.Header>
                    <p className="fw_600 fs_lg ff_Bold ff_Medium letter_spacing_2 clr_grey mb-0">
                      Is cyber security a social or governance issue?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fw_500 fs_xsm ff_Bold ff_Medium clr_white">
                      At vero eos et accusamus et iusto odio dign era sue
                      issimos ducimus qui blanditiis praesentium vol uptatum
                      deleniti atque corrupti.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xl={6} className="position-relative d-none d-xl-block">
              <div className="position-absolute some">
                <img
                  className="w-100 p-5 position-relative z_5"
                  src={some}
                  alt="some"
                />
              </div>
            </Col>
            <Col xl={6} sm={6} xs={12} className="d-block d-xl-none">
              <div className="d-flex justify-content-center w-100">
                <img
                  className="w-100 position-relative z_5"
                  src={some}
                  alt="some"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Some;
