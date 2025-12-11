"use client";
import { useRef } from "react";
import { AltArrowLeftBold, AltArrowRightBold } from "solar-icon-set";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Coaches = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="coaches wrapper">
      <div className="head flex-row">
        <h2>Deine Beifahrer und Wegbegleiter</h2>
        <div className="navigation flex-row">
          <button className="btn-pr" ref={prevRef} aria-label="Previous slide">
            <AltArrowLeftBold size={24} />
          </button>
          <button className="btn-pr" ref={nextRef} aria-label="Next slide">
            <AltArrowRightBold size={24} />
          </button>
        </div>
      </div>

      <div className="slider">
        <Swiper
          modules={[Navigation]}
          loop
          spaceBetween={20}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.7,
            },
            768: {
              slidesPerView: 2.7,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="box">
                <div className="image-wrapper">
                  <img src={item.photo} alt={item.name} />
                </div>
                <div className="content flex-col">
                  <strong>{item.name}</strong>
                  <small>{item.position}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Coaches;
