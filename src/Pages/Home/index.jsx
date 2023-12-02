import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import kitchen2 from "../../assets/k1 (1).jpg";
import kitchen3 from "../../assets/k1 (2).jpg";
import kitchen1 from "../../assets/pexels-elle-hughes-2696064.jpg";
import kitchen4 from "../../assets/pexels-pixabay-260922.jpg";
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
        <div className={style.contentWrapper}>
          <div className={style.pri1}>
            <h3>TOP QUALITY </h3>
          </div>
          <div className={style.pri2}>
            <h3>FOOD SERVICE EQUIPMENT &</h3>
          </div>
          <div className={style.pri3}>
            <h3> COMMERCIAL KITCHEN SOLUTION PROVIDERS </h3>{" "}
          </div>
          <div className={style.pri4}>
            {/* <h3>
              ..................................................................................................................
            </h3>
          </div>
          <div className={style.pri5}>
            <h3>
              With over 23 years of successful services to the industry,Mr.
              Abdul Aziz Abdul Aziz
            </h3> */}
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
            <SwiperSlide>
              <img src={kitchen4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className={style.secondSection}>
        <div className={style.secondSectionHeading}>
          <h1>
            providing food service equipment & commercial kitchen solution
            <span className={style.since1993}>Since 1993</span>
          </h1>
        </div>
        <div className={style.about_wrapper}>
          <div className={style.lineHeight}></div>
          <section className={style.rightSection}>
            <div className={style.aboutus_Brief}>
              Habtoor was formed and structured to specialize in the design,
              supply and installation of fast food and catering equipment for
              clients and customers operating throughout the U.A.E and
              surrounding Gulf & Middle East countries.
            </div>

            <div className={style.readmore_Button}>
              <Link to="">
                <button type="submit">READ MORE</button>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <section className={style.thirdSection}>
        <div>
          <h1>Most Outstanding Projects</h1>
        </div>
        <div className={style.grid_Container}>
          <div className={style.image_Box}>
            <div className={style.big_image}>
              <img src={kitchen1} alt="" />
            </div>

            <div className={style.hover_Image}>
              <img src={kitchen3} alt="" />
            </div>
          </div>

          <div className={style.second_Image_Box}>
            <div className={style.second_Big_image}>
              <img src={kitchen1} alt="" />
            </div>

            <div className={style.second_hover_Image}>
              <img src={kitchen3} alt="" />
            </div>
          </div>

          <div className={style.image_Box3}>
            <div className={style.big_image3}>
              <img src={kitchen1} alt="" />
            </div>

            <div className={style.hover_Image3}>
              <img src={kitchen3} alt="" />
            </div>
          </div>

          <div className={style.image_Box4}>
            <div className={style.big_image4}>
              <img src={kitchen1} alt="" />
            </div>

            <div className={style.hover_Image4}>
              <img src={kitchen3} alt="" />
            </div>
          </div>

          {/*<div className={style.image_Box}>
            <div className={style.first_Image}>
              <div className={style.big_image}>
                <img src={kitchen1} alt="" />
              </div>

              <div className={style.hover_Image}>
                <img src={kitchen3} alt="" />
              </div>
            </div>
          </div>

          <div className={style.image_Box}>
            <div className={style.first_Image}>
              <div className={style.big_image}>
                <img src={kitchen1} alt="" />
              </div>

              <div className={style.hover_Image}>
                <img src={kitchen3} alt="" />
              </div>
            </div>
          </div>

          <div className={style.image_Box}>
            <div className={style.first_Image}>
              <div className={style.big_image}>
                <img src={kitchen1} alt="" />
              </div>

              <div className={style.hover_Image}>
                <img src={kitchen3} alt="" />
              </div>
            </div>
          </div>

          <div className={style.image_Box}>
            <div className={style.first_Image}>
              <div className={style.big_image}>
                <img src={kitchen1} alt="" />
              </div>

              <div className={style.hover_Image}>
                <img src={kitchen3} alt="" />
              </div>
            </div>
          </div>

          <div className={style.image_Box}>
            <div className={style.first_Image}>
              <div className={style.big_image}>
                <img src={kitchen1} alt="" />
              </div>

              <div className={style.hover_Image}>
                <img src={kitchen3} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
