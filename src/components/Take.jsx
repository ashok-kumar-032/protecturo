import React from "react";
import get_card_1_img from "../assets/img/get_card_1_img.svg";
import get_card_2_img from "../assets/img/get_card_2_img.svg";
import get_card_3_img from "../assets/img/get_card_3_img.svg";
import get_card_4_img from "../assets/img/get_card_4_img.svg";
import Slider from "react-slick";
const Take = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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
    <section className="bg_black py-lg-5 py-3">
      <div className="container">
        <div
          className="d-flex align-items-center flex-column"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_700 ff_Bold ff_Medium fs_lg our text-center mb-0">
            Our benefits
          </p>
          <p className="fw_700 ff_Bold ff_Medium fs_2xl clr_white text-center letter_spacing_4 lh_75">
            Take control of
            <span className="d-block">your cellular connectivity</span>
          </p>
          <p className="fw_700 ff_Bold ff_Medium fs_md clr_grey_1 text-center max_w_600">
            Your creativity is endless. Your IoT project shouldn't be held back
            by cellular connectivity. Let's build a new unicorn together.
          </p>
        </div>
        <Slider {...settings} className="h-100">
          {/* 1 */}
          <div
            className="p-3"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <div className="red_line_hover h-100">
              <div className="get_card_1 d-flex flex-column align-items-center text-center p-3 h-100 justify-content-between">
                <span>
                  <img
                    className="w-100 all_img_hover"
                    src={get_card_1_img}
                    alt="get_card_1_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_white pt-md-4 mb-0">
                  Get started with IoT
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 mb-0 mb-lg-2">
                  Our experts helps you find the most suitable carrier profile
                  for your deployment.
                </p>
                <hr className="get_line" />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className="p-3"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="2000"
          >
            <div className="red_line_hover h-100">
              <div className="get_card_1 d-flex flex-column align-items-center text-center p-3 h-100 justify-content-between">
                <span>
                  <img
                    className="w-100 all_img_hover"
                    src={get_card_2_img}
                    alt="get_card_2_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_white mb-0">
                  Manage connectivity
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 mb-0 mb-lg-2">
                  Control all of your IoT SIM cards on a single platform.
                </p>
                <hr className="get_line" />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            className="p-3"
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="3000"
          >
            <div className="red_line_hover h-100">
              <div className="get_card_1 d-flex flex-column align-items-center text-center p-3 h-100 justify-content-between">
                <span>
                  <img
                    className="w-100 all_img_hover"
                    src={get_card_3_img}
                    alt="get_card_3_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_white mb-0">
                  One global solution
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 mb-0 mb-lg-2">
                  You will receive 1 invoice and have a single point of contact
                  for support no matter where the SIMs are deployed.
                </p>
                <span>
                  <hr className="get_line" />
                </span>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div
            className="p-3"
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="2000"
          >
            <div className="red_line_hover h-100">
              <div className="get_card_1 d-flex flex-column align-items-center text-center p-3 h-100 justify-content-between">
                <span>
                  <img
                    className="w-100 all_img_hover"
                    src={get_card_4_img}
                    alt="get_card_4_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_white mb-0">
                  Scale infinitely with ease
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 mb-0 mb-lg-2">
                  Reach all business goals with a single connectivity partner.
                </p>
                <hr className="get_line" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Take;
