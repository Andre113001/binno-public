import React from "react";
import NavBar from "../../components/NavBar.jsx";
import CarouselCompany from "../../components/CompaniesCarousel/CarouselCompany.jsx";
import CarouselFilter from "../../pages/Company Page/Carousel_Swiper_Company.jsx";
import { Button } from "@material-tailwind/react";

function MembersPage({data}) {
  return (
    <>
      {/* member page container */}
      <div className="flex flex-col items-center w-full bg-companyBG">
        {/* Company Content */}
        <div className="flex flex-grow justify-between mt-10">
          <div className="flex flex-col w-4/6 mt-10 overflow-hidden">
            <h1 className="text-white font-bold text-8xl w-1/2">
              Startup Companies
            </h1>
            <div className=" mt-4"><CarouselFilter data={data} /></div>
            <div className="flex justify-center mt-10 mb-32">
              <Button
                size="lg"
                className="flex translate-x-[-50px] bg-CustomOrange justify-center items-center gap-3 w-1/2"
              >
                Visit Startup Companies
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-2/6 justify-end items-center ">
            <div className="flex justify-center">
              <div className="card"></div>
            </div>
            <div className="flex justify-center translate-y-[-80px] translate-x-[-100px]">
              <div className="card"></div>
            </div>
            <div className="flex justify-center translate-y-[-150px] translate-x-[100px]">
              <div className="card"></div>
    
            </div>
                    <div className="absolute translate-y-[-250px]">
      <h1 className="text-orange-500 text-4xl font-semibold"> Fill your startup here</h1>
      <p>Do not be afraid to start your own</p>
    </div>
            {/* Add more divs as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MembersPage;
