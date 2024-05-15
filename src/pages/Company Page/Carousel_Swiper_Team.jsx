import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselTeamData from "./Team_Data";


function isDone(index, activeIndex, length) {
  const doneIndex = (activeIndex ) % length;
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
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      grabCursor={false}
      centeredSlides={false}
      spaceBetween={-600}
     
      navigation={true}
      onSlideChange={handleSlideChange}
    
      modules={[Autoplay, Pagination, Navigation]}
      className="TeamSwiper"
    >
      {CarouselTeamData.map((team, index) => (
        <SwiperSlide key={index}>
          <div className={`flex items-center justify-center h-full w-full `}>

            <div className="m-5">
              <div className="flex items-center justify-center w-full">
                {/* card container (parent container)*/}
                <div className="flex flex-col justify-center items-center max-h-full max-w-full">
                  <img
                   className={`flex h-full max-h-full w-full object-cover object-center rounded-xl 
                   ${isDone(index, activeIndex+2, CarouselTeamData.length) ? 'done' : ''}
                   ${isDone(index, activeIndex+3, CarouselTeamData.length) ? 'donea' : ''}
                   ${isFit(index, activeIndex, CarouselTeamData.length) ? 'fit' : ''}
                   ${index !== (activeIndex+2) % CarouselTeamData.length ? 'non-active' : ''}`
                 }
                    src={team.profileCover}
                    alt="Profile Cover"
                  />
                  {/* content container */}
                  <div className={`flex justify-center items-center flex-col ml-28 overflow-visible p-2 mt-[-20px] ${index !== (activeIndex+2) % CarouselTeamData.length ? 'hidden' : ''}`}>
                    <div className="flex  font-bold text-2xl text-orange-800">
                      {team.name}
                    </div>
                    <div className="flex text-slate-500 text-md">{team.role}</div>
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
