"use client";
import { AltArrowLeft, AltArrowRight } from "@solar-icons/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  { img: "/img/couch.png", title: "name and lastname 1", subtitle: "test subtilte" },
  { img: "/img/couch.png", title: "name and lastname 2", subtitle: "test subtilte" },
  { img: "/img/couch.png", title: "name and lastname 3", subtitle: "test subtilte" },
  { img: "/img/couch.png", title: "name and lastname 4", subtitle: "test subtilte" },
  { img: "/img/couch.png", title: "name and lastname 5", subtitle: "test subtilte" },
];
const Wegbegleiter = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="wegbegleiter wrapper">
      <div className="head flex-row">
        <h2>Deine Beifahrer und Wegbegleiter</h2>
        <div className="navigation flex-row">
          <button className="btn-pr" ref={prevRef} aria-label="Previous slide">
            <AltArrowLeft size={24} />
          </button>
          <button className="btn-pr" ref={nextRef} aria-label="Next slide">
            <AltArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="slider">
        <Swiper
          modules={[Navigation]}
          loop
          spaceBetween={50}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            // Link the external navigation buttons (refs) to swiper params
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="box">
                <img src={item.img} alt={item.title} />
                <div className="content flex-col">
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Wegbegleiter;
