import React from "react";
import allow_1_img from "../assets/img/allow_1_img.svg";
import allow_2_img from "../assets/img/allow_2_img.svg";
import allow_3_img from "../assets/img/allow_3_img.svg";
import Slider from "react-slick";
const Allow = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section className="bg_black py-lg-5 py-3 position-relative ">
      <div className="back_allow back_red_img z_1 position-absolute"></div>
      <div className="my_container position-relative z_5">
        <div
          className="d-flex align-items-center flex-column"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <p className="fw_700 ff_Bold ff_Medium fs_lg our text-center">
            Our products
          </p>
          <p className="fw_700 ff_Bold ff_Medium fs_2xl clr_white_2 text-center letter_spacing_4 lh_75">
            Allow us to secure your
            <span className="d-block">data with Protecturo’s products</span>
          </p>
        </div>
        <Slider {...settings}>
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
                    src={allow_1_img}
                    alt="allow_1_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey mb-0">
                  SIM card
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1 mb-0 mb-lg-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
                <button className="mb-0 ff_Montserrat fw_500 fs_xsm clr_white learn_btn red_btn overflow-hidden position-relative mt-lg-4">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className="p-3"
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="2000"
          >
            <div className="red_line_hover h-100">
              <div className="get_card_1 d-flex flex-column align-items-center text-center p-3 h-100 justify-content-between">
                <span>
                  <img
                    className="w-100 all_img_hover"
                    src={allow_2_img}
                    alt="allow_2_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey mb-0">
                  Manage connectivity
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1">
                  Control all of your IoT SIM cards on a single platform.
                </p>
                <button className="mb-0 ff_Montserrat fw_500 fs_xsm clr_white learn_btn red_btn overflow-hidden position-relative mt-lg-4">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            className="p-3"
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="2000"
          >
            <div className="red_line_hover h-100">
              <div className="get_card_1 d-flex flex-column align-items-center text-center p-3 h-100 justify-content-between">
                <span>
                  <img
                    className="w-100 all_img_hover"
                    src={allow_3_img}
                    alt="allow_3_img"
                  />
                </span>
                <p className="fw_600 ff_Bold ff_Medium fs_lg clr_grey pt-lg-4">
                  One global solution
                </p>
                <p className="fw_500 ff_Bold ff_Medium fs_xsm clr_grey_1">
                  You will receive 1 invoice and have a single point of contact
                  for support no matter where the SIMs are deployed.
                </p>
                <button className="mb-0 ff_Montserrat fw_500 fs_xsm clr_white learn_btn red_btn overflow-hidden position-relative mt-lg-4">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Allow;
