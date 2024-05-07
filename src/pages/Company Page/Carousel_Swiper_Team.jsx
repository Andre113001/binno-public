import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselTeamData from "./Team_Data";

function isDone(index, activeIndex, length) {
  const doneIndex = activeIndex % length;
  return index === doneIndex || index + length === doneIndex;
}

function isFit(index, activeIndex, length) {
  const fitIndex = (activeIndex - 3 + length) % length;
  return index === fitIndex || index + length === fitIndex;
}

function isFits(index, activeIndex, length) {
  const fitIndex = (activeIndex - 3 + length) % length;
  return index === fitIndex || index + length === fitIndex;
}

function CarouselTeam() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      grabCursor={false}
      centeredSlides={true}
      spaceBetween={-800}
      navigation={true}
      onSlideChange={handleSlideChange}
      breakpoints={{
        "@0.00": {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        "@0.67": {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        "@0.75": {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        "@1.00": {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="TeamSwiper"
    >
      {CarouselTeamData.map((team, index) => (
        <SwiperSlide key={index}>
          <div className={`flex items-center justify-center h-full w-full`}>
            <div className="m-5">
              <div className="flex items-center justify-center w-full">
                {/* card container (parent container)*/}
                <div className="flex flex-col justify-center items-center max-h-full max-w-full">
                  <img
                    className={`flex h-full max-h-full w-full object-cover object-center rounded 
                   ${
                     isDone(index, activeIndex, CarouselTeamData.length)
                       ? "done"
                       : ""
                   }
                   ${
                     isFit(index, activeIndex, CarouselTeamData.length)
                       ? "fit"
                       : ""
                   }
                   ${
                     index !== activeIndex % CarouselTeamData.length
                       ? "non-active"
                       : ""
                   }`}
                    src={team.profileCover}
                    alt="Profile Cover"
                  />
                  {/* content container */}
                  <div
                    className={`flex justify-center items-center flex-col ml-2 overflow-visible bg-companyBG p-2 px-4 opacity-80 rounded-xl ${
                      index !== activeIndex % CarouselTeamData.length
                        ? "hidden"
                        : ""
                    }`}
                  >
                    <div className="flex  font-bold text-sm text-orange-800">
                      {team.name}
                    </div>
                    <div className="flex text-white text-sm">{team.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselTeam;
