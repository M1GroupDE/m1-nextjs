"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ data }) => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        navigation={true}
        slidesPerView={1}
        spaceBetween={100}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="slide">
              <div className="image-wrapper">
                <img src={item.photo} alt={item.title} />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.short_desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
