import React from "react";
import { Row, Col } from "react-bootstrap";
import what_1 from "../assets/img/what_1.svg";
import what_2 from "../assets/img/what_2.svg";
import what_3 from "../assets/img/what_3.svg";
import what_4 from "../assets/img/what_4.svg";
import product_img from "../assets/img/product_img.webp";
import Slider from "react-slick";
const What = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg_black py-sm-5 py-3">
      <div className="container position-relative z_5">
        <Row className="align-items-center flex-column-reverse flex-xl-row">
          <Col xl={6} className="mt-3 mt-xl-0 text-center text-xl-start">
            <div
              className=" d-flex flex-column align-items-center align-items-xl-start"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <p className="fw_700 ff_Bold ff_Medium fs_lg our mb-0">
                Our product benefits
              </p>
              <p className="fw_700 ff_Bold ff_Medium fs_2xl clr_white_2 lh_75 letter_spacing_4">
                What you will
                <span className="d-block letter_spacing_4">
                  get with Protecturo
                </span>
              </p>
              <p className="fw_500 ff_Bold ff_Medium fs_md clr_grey_1 max_w_470">
                Your creativity is endless. Your IoT project shouldn't be held
                back by cellular connectivity. Let's build a new unicorn
                together.
              </p>
            </div>
            <Slider {...settings} className="mt-lg-5 pt-2">
              <Col
                sm={6}
                className="d-flex flex-column align-items-center align-items-xl-start"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <span>
                  <img className="all_img_hover" src={what_1} alt="what_1" />
                </span>
                <p className="mb-0 fw_600 ff_Bold ff_Medium fs_lg clr_white_2 spacing_2 pt-3">
                  Stay connected
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-3">
                  Travel and stay connected without
                  <span className="d-block">roaming or surprise bills.</span>
                </p>
              </Col>
              <Col
                sm={6}
                className="d-flex flex-column align-items-center align-items-xl-start"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="2000"
              >
                <span>
                  <img className="all_img_hover" src={what_2} alt="what_2" />
                </span>
                <p className="mb-0 fw_600 ff_Bold ff_Medium fs_lg clr_white_2 spacing_2 pt-3">
                  International
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-3">
                  Keep your local SIM card to receive
                  <span className="d-block">all phone calls everywhere.</span>
                </p>
              </Col>

              <Col
                sm={6}
                className="mt-xl-5 d-flex flex-column align-items-center align-items-xl-start"
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="2500"
              >
                <span>
                  <img className="all_img_hover" src={what_3} alt="what_3" />
                </span>
                <p className="mb-0 fw_600 ff_Bold ff_Medium fs_lg clr_white_2 spacing_2 pt-3">
                  Ease to get
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-3">
                  Purchase and install your eSIM in just
                  <span className="d-block">one minute.</span>
                </p>
              </Col>
              <Col
                sm={6}
                className="mt-xl-5 d-flex flex-column align-items-center align-items-xl-start"
                data-aos="fade-right"
                data-aos-delay="1200"
                data-aos-duration="3000"
              >
                <span>
                  <img className="all_img_hover" src={what_4} alt="what_4" />
                </span>
                <p className="mb-0 fw_600 ff_Bold ff_Medium fs_lg clr_white_2 spacing_2 pt-3">
                  Data plans
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-3">
                  Get unlimited data plans in according
                  <span className="d-block">to destinations.</span>
                </p>
              </Col>
            </Slider>
          </Col>
          <Col
            xl={6}
            md={7}
            sm={7}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img className="w-100" src={product_img} alt="product_img" />
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default What;
