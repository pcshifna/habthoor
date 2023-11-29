import React from "react";
import style from "./Home.module.css";
import kitchen2 from "../../assets/kitchen2.png";
import kitchen3 from "../../assets/kitchen3.png";
import kitchen1 from "../../assets/kitchen1.png";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className={style.home}>
      <section className={style.firstSection}>
        <div>
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
            <h3>
              January 1993 with its head office being based in Dubai.Mr. Abdul
              Aziz
            </h3>
          </div>
          <div className={style.pri5}>
            <h3>
              With over 23 years of successful services to the industry,Mr.
              Abdul Aziz Abdul Aziz
            </h3>
          </div>
        </div>

        <div className={style.triangleUp}>
          <Swiper
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
      </section>

      <section className={style.secondSection}>
        <div className={style.secondSectionHeading}>
          <h1>
            Providing foodservice & commercial laundry equipment solutions since
            1993
          </h1>
        </div>
        <div className={style.lineHeight}></div>
        <section className={style.rightSection}>
          <div>
            TSSC’s team of experienced professionals delivers comprehensive
            customer care to the “who’s who” of Dubai’s foodservice and
            hospitality industries. We deliver everything our clients need to
            perform at their very best. That’s why we offer complete solutions,
            including facility design, installation, equipment selection, and
            operator training.
          </div>

          <div>
            <button type="submit">Read More</button>
          </div>
        </section>
      </section>
      <section className={style.thirdSection}>
        <div className={style.box}>
          <img src={kitchen1} alt="" />

          <div className={style.underImage}>
            <img src={kitchen3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
