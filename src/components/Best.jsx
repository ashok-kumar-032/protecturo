import React from "react";
import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import what_1 from "../assets/img/what_1.svg";
import what_2 from "../assets/img/what_2.svg";
import what_3 from "../assets/img/what_3.svg";
import what_4 from "../assets/img/what_4.svg";
const Best = () => {
  var best = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg_black py-5 position-relative">
      <div className="back_best back_red_img z_1 position-absolute d-none d-xl-block"></div>
      <div className="back_best_1 back_red_img z_1 position-absolute d-none d-xl-block"></div>
      <div className="container position-relative z_5">
        <div
          className="text-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_700 ff_Bold ff_Medium fs_lg our mb-0">Features</p>
          <p className="mb-0 fw_700 ff_Bold ff_Medium fs_2xl clr_white_1 lh_75 letter_spacing_4">
            Best-in-class Cyber safety
            <span className="d-block">for commercial and personal.</span>
          </p>
        </div>
        <Slider {...best} className="h-100 mt-3">
          {/* 1 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="1500"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_1} alt="what_1" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Protect your data
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 2 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="2000"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_2} alt="what_2" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Detect Incidents
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 3 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="2500"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_3} alt="what_3" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Security shield
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 4 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="3000"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_4} alt="what_4" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Unlimited data
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 5 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100 ">
                  <img className="all_img_hover" src={what_3} alt="what_3" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Stay connected
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 6 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="2000"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_4} alt="what_4" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    No extra charges
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 7 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="2500"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_1} alt="what_1" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Live support
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* 8 */}
          <Col
            lg={3}
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="3000"
          >
            <div className="p-3 h-100">
              <div className="best_hover h-100">
                <div className="best_card bg_light_black p-3 p-xl-4 h-100">
                  <img className="all_img_hover" src={what_2} alt="what_2" />
                  <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey letter_spacing_2 pt-4 mb-0">
                    Destination plans
                  </p>
                  <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 pt-1">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Slider>
      </div>
    </section>
  );
};
export default Best;
