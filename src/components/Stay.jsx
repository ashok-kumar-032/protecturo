import React from "react";
import stay_bg_l from "../assets/img/stay_bg_l.svg";
import stay_bg_r from "../assets/img/stay_bg_r.svg";
const Stay = () => {
  return (
    <section className="bg_black py-5 position-relative">
      <div className="container position-relative z_5">
        <div
          className="stay_box d-flex flex-column align-items-center p-3 pt-sm abs-4 pb-sm-5 position-relative overflow-hidden"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <span className="position-absolute start-0 bottom-0 z_1">
            <img className="w-100" src={stay_bg_l} alt="stay_bg_l" />
          </span>
          <span className="position-absolute end-0 top-0 z_1">
            <img className="w-100" src={stay_bg_r} alt="ststay_bg_ray_bg_l" />
          </span>
          <p className="fw_700 z_5 position-relative ff_Bold ff_Medium fs_2xl clr_white letter_spacing_4 text-center text-sm-start mb-0">
            Stay connect wherever you go
          </p>
          <p className="fw_500 z_5 position-relative ff_Bold ff_Medium fs_md clr_white_2 text-center max_w_500">
            Buy an international eSIM card, stay connected wherever you go, and
            avoid expensive phone bills.
          </p>
          <button className="fw_500 z_5 position-relative ff_Montserrat fs_xsm clr_white Get_black_btn get_black_btn mt-4 overflow-hidden position-relative">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};
export default Stay;
