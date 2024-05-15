import React from "react";
import CarouselTeam from "../../pages/Company Page/Carousel_Swiper_Team";

function TeamPage() {
  return (
    <div className="flex h-screen w-screen relative ">
      <div className="w-6/12 h-full bg-discoverwhite"></div>
      <div className="w-6/12 h-full bg-companyBG"></div>
      <div className="absolute flex flex-col w-full pt-0 mt-0">
        <div className="relative w-full flex justify-start ml-6 items-center">
          <h1 className="md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-gradient-to-r from-companyBG from-[91%] to-discoverWhite to-[17%] font-bold m-5 bg-clip-text text-transparent p-14">
            Meet the Team
          </h1>
        </div>
        <div className="relative left-0 bottom-0 w-full h-96 flex items-end mt-40">
          <CarouselTeam />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
