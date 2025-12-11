"use client";
import { StarBold } from "solar-icon-set";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Feedbacks = ({ data }) => {
  return (
    <section className="feedbacks wrapper flex-col">
      <h2>Schritte zum Erhalt des Zertifikats</h2>

      <div className="list">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <div key={item.id} className="box flex-col">
                <p className="review">"{item.content}"</p>

                <div className="footer flex-row">
                  <div className="profile flex-row">
                    <div className="img">{<img src={item.photo} alt={item.name} />}</div>
                    <div className="flex-col title">
                      <strong>{item.name}</strong>
                      <small>{item.position}</small>
                    </div>
                  </div>
                  <div className="rate">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarBold key={index} weight={"Bold"} color={"#E7B65F"} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedbacks;
