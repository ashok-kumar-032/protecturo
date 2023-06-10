import React from "react";
import { Row, Col } from "react-bootstrap";
import nav_logo from "../assets/img/nav_logo.svg";
const Footer = () => {
  return (
    <section className="bg_black py-5">
      <div className="container">
        <Row>
          <Col
            xl={4}
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <img className="pointer" src={nav_logo} alt="nav_logo" />
            <p className="fw_500 fs_xsm ff_Bold ff_Medium clr_grey_1 pt-4 max_w_450">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nis commodo consequat.
            </p>
            <div className="d-flex align-items-center mt-xl-5 mt-4">
              <span className="footer_card d-flex align-items-center justify-content-center footer_img footer_effect rounded-circle">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1412 1.03554L12.379 12.1731C12.249 12.6977 11.6478 12.9679 11.1549 12.7189L7.66153 10.9544L6.00961 13.5984C5.56007 14.319 4.42268 14.0064 4.42268 13.1639V10.2179C4.42268 9.99011 4.52017 9.77286 4.68807 9.61391L11.4961 3.25564C11.4907 3.17616 11.4041 3.10728 11.3174 3.16556L3.19322 8.69726L0.463493 7.31963C-0.17561 6.99642 -0.148529 6.09037 0.512239 5.80954L13.9713 0.0712067C14.6158 -0.204318 15.3091 0.362627 15.1412 1.03554Z"
                    fill="#AB1D1D"
                  />
                </svg>
              </span>
              <span className="footer_card d-flex align-items-center justify-content-center ms-3 footer_img footer_effect rounded-circle">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33188 2.32458H7.60996V0.0985833C7.38946 0.06825 6.63113 0 5.74796 0C3.90521 0 2.64288 1.15908 2.64288 3.28942V5.25H0.609375V7.7385H2.64288V14H5.13604V7.73908H7.08729L7.39704 5.25058H5.13546V3.53617C5.13604 2.81692 5.32971 2.32458 6.33188 2.32458Z"
                    fill="#AB1D1D"
                  />
                </svg>
              </span>
              <span className="footer_card d-flex align-items-center justify-content-center ms-3 footer_img footer_effect rounded-circle">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_64_6169)">
                    <path
                      d="M13.9851 4.11604C13.9523 3.37216 13.832 2.86076 13.6597 2.41762C13.4819 1.94723 13.2085 1.5261 12.8501 1.17601C12.5001 0.820473 12.0761 0.544204 11.6112 0.369213C11.1655 0.196892 10.6568 0.0765988 9.9129 0.0438013C9.16347 0.00822609 8.92556 0 7.0248 0C5.12404 0 4.88612 0.00822609 4.13947 0.0410236C3.3956 0.0738212 2.88419 0.194221 2.44116 0.366435C1.97067 0.544204 1.54954 0.817695 1.19945 1.17601C0.843909 1.5261 0.567748 1.95001 0.39265 2.41495C0.220329 2.86076 0.100036 3.36939 0.0672387 4.11326C0.0316636 4.86269 0.0234375 5.10061 0.0234375 7.00137C0.0234375 8.90213 0.0316636 9.14005 0.0644611 9.8867C0.0972586 10.6306 0.217659 11.142 0.389979 11.5851C0.567748 12.0555 0.843909 12.4766 1.19945 12.8267C1.54954 13.1823 1.97345 13.4585 2.43838 13.6335C2.88419 13.8058 3.39282 13.9261 4.1368 13.9589C4.88334 13.9918 5.12137 14 7.02212 14C8.92288 14 9.1608 13.9918 9.90745 13.9589C10.6513 13.9261 11.1627 13.8058 11.6058 13.6335C12.5466 13.2698 13.2905 12.5259 13.6543 11.5851C13.8265 11.1393 13.9469 10.6306 13.9797 9.8867C14.0125 9.14005 14.0207 8.90213 14.0207 7.00137C14.0207 5.10061 14.0179 4.86269 13.9851 4.11604ZM12.7244 9.832C12.6943 10.5157 12.5794 10.8849 12.4837 11.1311C12.2485 11.741 11.7644 12.225 11.1545 12.4603C10.9084 12.556 10.5365 12.6709 9.85542 12.7009C9.117 12.7338 8.89553 12.7419 7.02757 12.7419C5.15961 12.7419 4.93537 12.7338 4.19962 12.7009C3.51589 12.6709 3.14668 12.556 2.90054 12.4603C2.59703 12.3481 2.32076 12.1703 2.09652 11.9379C1.86405 11.7109 1.68628 11.4374 1.57411 11.1339C1.47839 10.8877 1.36354 10.5157 1.33352 9.83478C1.30062 9.09635 1.2925 8.87478 1.2925 7.00682C1.2925 5.13885 1.30062 4.91461 1.33352 4.17896C1.36354 3.49524 1.47839 3.12602 1.57411 2.87988C1.68628 2.57626 1.86405 2.3001 2.09929 2.07575C2.32621 1.84329 2.5997 1.66552 2.90331 1.55345C3.14946 1.45773 3.52145 1.34288 4.20239 1.31276C4.94082 1.27996 5.16239 1.27173 7.03024 1.27173C8.90098 1.27173 9.12245 1.27996 9.8582 1.31276C10.5419 1.34288 10.9111 1.45773 11.1573 1.55345C11.4608 1.66552 11.7371 1.84329 11.9613 2.07575C12.1938 2.30277 12.3715 2.57626 12.4837 2.87988C12.5794 3.12602 12.6943 3.49791 12.7244 4.17896C12.7572 4.91739 12.7654 5.13885 12.7654 7.00682C12.7654 8.87478 12.7572 9.09357 12.7244 9.832Z"
                      fill="#AB1D1D"
                    />
                    <path
                      d="M7.02609 3.40527C5.04061 3.40527 3.42969 5.01609 3.42969 7.00168C3.42969 8.98727 5.04061 10.5981 7.02609 10.5981C9.01168 10.5981 10.6225 8.98727 10.6225 7.00168C10.6225 5.01609 9.01168 3.40527 7.02609 3.40527ZM7.02609 9.33458C5.73801 9.33458 4.69319 8.28986 4.69319 7.00168C4.69319 5.71349 5.73801 4.66878 7.02609 4.66878C8.31428 4.66878 9.35899 5.71349 9.35899 7.00168C9.35899 8.28986 8.31428 9.33458 7.02609 9.33458Z"
                      fill="#AB1D1D"
                    />
                    <path
                      d="M11.6051 3.26245C11.6051 3.7261 11.2291 4.10205 10.7654 4.10205C10.3017 4.10205 9.92578 3.7261 9.92578 3.26245C9.92578 2.79869 10.3017 2.42285 10.7654 2.42285C11.2291 2.42285 11.6051 2.79869 11.6051 3.26245Z"
                      fill="#AB1D1D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_64_6169">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="footer_card d-flex align-items-center justify-content-center ms-3 footer_img footer_effect rounded-circle">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.65913C13.4794 1.8875 12.9246 2.03887 12.3462 2.11237C12.9412 1.75712 13.3954 1.19887 13.6089 0.526C13.0541 0.85675 12.4416 1.09038 11.7889 1.22075C11.2621 0.659875 10.5114 0.3125 9.69238 0.3125C8.10337 0.3125 6.82412 1.60225 6.82412 3.18338C6.82412 3.41088 6.84338 3.62962 6.89062 3.83787C4.5045 3.7215 2.39313 2.57788 0.97475 0.83575C0.727125 1.26538 0.581875 1.75713 0.581875 2.2865C0.581875 3.2805 1.09375 4.16162 1.85675 4.67175C1.39562 4.663 0.94325 4.52913 0.56 4.31825C0.56 4.327 0.56 4.33838 0.56 4.34975C0.56 5.7445 1.55487 6.903 2.8595 7.16988C2.62587 7.23375 2.37125 7.26437 2.107 7.26437C1.92325 7.26437 1.73775 7.25387 1.56362 7.21537C1.9355 8.352 2.99075 9.18762 4.2455 9.21475C3.269 9.97863 2.02912 10.4389 0.686875 10.4389C0.4515 10.4389 0.22575 10.4284 0 10.3995C1.27137 11.2194 2.77813 11.6875 4.403 11.6875C9.6845 11.6875 12.572 7.3125 12.572 3.52025C12.572 3.39337 12.5676 3.27087 12.5615 3.14925C13.1311 2.745 13.6097 2.24013 14 1.65913Z"
                    fill="#AB1D1D"
                  />
                </svg>
              </span>
            </div>
          </Col>
          <Col xl={8} className="mt-4">
            <Row>
              <Col
                md={3}
                sm={6}
                xs={6}
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="2000"
              >
                <ul className="ps-0">
                  <li>
                    <p className="fw_700 ff_Bold ff_Medium fs_lg clr_white letter_spacing_2">
                      Products
                    </p>
                  </li>

                  <li className="pt-sm-3 pt-1">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      eSIM
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      SIM Card
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Wifi HotSopt
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                md={3}
                sm={6}
                xs={6}
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="2500"
              >
                <ul className="ps-0">
                  <li>
                    <p className="fw_700 ff_Bold ff_Medium fs_lg clr_white letter_spacing_2 text-nowrap">
                      My Account
                    </p>
                  </li>
                  <li className="pt-sm-3 pt-1">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Ventures
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Grants
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Docs
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                md={3}
                sm={6}
                xs={6}
                className="mt-3 mt-sm-0"
                data-aos="fade-right"
                data-aos-delay="1200"
                data-aos-duration="3000"
              >
                <ul className="ps-0">
                  <li>
                    <p className="fw_700 ff_Bold ff_Medium fs_lg clr_white letter_spacing_2">
                      Company
                    </p>
                  </li>
                  <li className="pt-sm-3 pt-1">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 text-nowrap hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Support Center
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Partners
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 text-nowrap hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Updates & News
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                md={3}
                sm={6}
                xs={6}
                className="mt-3 mt-sm-0"
                data-aos="fade-right"
                data-aos-delay="1500"
                data-aos-duration="3000"
              >
                <ul className="ps-0">
                  <li>
                    <p className="fw_700 ff_Bold ff_Medium fs_lg clr_white letter_spacing_2">
                      Resources
                    </p>
                  </li>
                  <li className="pt-sm-3 pt-1">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Favorites
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Watchlist
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 text-nowrap hover_line position-relative home nav_effect"
                      href="#"
                    >
                      My Collections
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="fw_600 ff_Bold ff_Medium fs_xsm clr_grey_1 hover_line position-relative home nav_effect"
                      href="#"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div
          className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between pt-5"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1">
            © 2022 Protecturo, All rights reserved.
          </p>
          <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1">
            Privacy Policy • Terms & Conditions{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
