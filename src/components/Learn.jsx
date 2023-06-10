import React from "react";
import { Col } from "react-bootstrap";
import coll from "../assets/img/coll.svg";
import buy from "../assets/img/buy.svg";
import qr from "../assets/img/qr.svg";
import Slider from "react-slick";
const Learn = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg_black py-5 position-relative">
      <div className="back_lrarn back_red_img z_1 position-absolute d-none d-xl-block"></div>
      <div className="my_container position-relative z_5">
        <div
          className="text-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_700 ff_Bold ff_Medium fs_lg our mb-0">
            Our product benefits
          </p>
          <p className="fw_700 ff_Bold ff_Medium fs_2xl letter_spacing_4 lh_75 clr_white_2">
            Learn how does
            <span className="d-block">international eSIM work</span>
          </p>
        </div>
        <Slider {...settings} className="mt-lg-5 pt-lg-5 pt-3">
          <Col
            sm={4}
            className="text-center pt-lg-5 mt-lg-3 d-flex flex-column align-items-center"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1500"
          >
            <span>
              <img className="w-100" src={coll} alt="coll" />
            </span>
            <p className="fw_700 ff_Bold ff_Medium fs_xl clr_white_2 mb-0 pt-lg-3 pt-1">
              Check
            </p>
            <p className="fw_700 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
              that your smartphone
              <span className="d-block">supports eSIM</span>
            </p>
          </Col>
          <Col
            sm={4}
            className="text-center d-flex flex-column align-items-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <span className="Buy position-relative">
              <img className="w-100" src={buy} alt="buy" />
            </span>

            <p className="fw_700 ff_Bold ff_Medium fs_xl clr_white_2 mb-0 pt-lg-3 pt-1">
              Buy
            </p>
            <p className="fw_700 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
              Your eSIM card to
              <span className="d-block">travel</span>
            </p>
          </Col>
          <Col
            sm={4}
            className="text-center pt-lg-5 mt-lg-3 d-flex flex-column align-items-center"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="3000"
          >
            <span className="position-relative install">
              <img className="w-100" src={qr} alt="qr" />
            </span>
            <p className="fw_700 ff_Bold ff_Medium fs_xl clr_white_2 mb-0 pt-lg-3 pt-1">
              Install the QR
            </p>
            <p className="fw_700 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
              and configure it. Activate
              <span className="d-block">it just before your leave</span>
            </p>
          </Col>
        </Slider>
      </div>
    </section>
  );
};
export default Learn;
