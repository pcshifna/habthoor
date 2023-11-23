import React from 'react'
import style from "./Home.module.css";
import kitchen2 from "../../assets/kitchen2.png";
import kitchen3 from "../../assets/kitchen3.png";
import kitchen1 from "../../assets/kitchen1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <div className={style.test}>
        <p>
          {" "}
          <div className={style.pri1}>
            <h2>Habtoor International</h2>
          </div>
          <div className={style.pri2}>
            <h3>is a company fully owned by Mr. Abdul Aziz</h3>
          </div>
          <div className={style.pri3}>
            <h3> Mr. Abdul Aziz Khalifa Bin Hab formed Mr. Abdul Aziz </h3>{" "}
          </div>
          <div className={style.pri4}>
            {" "}
            <h3>
              January 1993 with its head office being based in Dubai.Mr. Abdul
              Aziz
            </h3>{" "}
          </div>
          <div className={style.pri5}>
            <h3>
              With over 23 years of successful services to the industry,Mr.
              Abdul Aziz Abdul Aziz
            </h3>{" "}
          </div>
        </p>

        <div className={style.triangleUp}>
          <Swiper
            // navigation={true}
            direction={"horizontal"}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              button: true,
            }}
          >
            <SwiperSlide>
              <img src={kitchen1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kitchen2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kitchen3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home
