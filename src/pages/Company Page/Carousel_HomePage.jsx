import { Carousel } from "@material-tailwind/react";
import MentorPage from "./Carousel_Mentor";
import EnablerPage from "./Carousel_Enabler";
import CompanyPage from "./CompanyPage"
import MembersPage from "../MembersPage/MembersPage";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl relative w-full p-0 h-auto overflow-y-scroll"
      prevArrow={() => null}
      nextArrow={() => null}
      arrow='false' // Disable the default arrow controls
      // autoplay='true'
      loop='true'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-0 left-0 z-50 w-full h-12 bg-customColor backdrop-filter backdrop-blur-3xl bg-opacity-50 flex items-center">
          {/* SVG */}
          <img
    src="./src/"
    alt="User icon"
    className="w-6 h-6 opacity-50 block cursor-pointer transition-all"
  />
          {/* Navigation Indicators */}
          <div className="flex justify-end flex-grow gap-8">
            {["Startup Company", "Startup Enabler", "Startup Mentor"].map(
              (text, index) => (
                <span
                  key={index}
                  className={`block cursor-pointer transition-all text-white mt-1 ${
                    activeIndex === index ? "font-bold" : "opacity-50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {text}
                </span>
              )
            )}
          </div>
          <div className="flex justify-center items-center mx-4 hover-effect mt-1">
          <AccountCircleIcon/>

  {/* <img
    src="./src/user-circle.svg"
    alt="User icon"
    className="w-6 h-6 opacity-100 block cursor-pointer transition-all translate-y-1 mr-1 ml-4"
  /> */}

  <span className="opacity-50 block cursor-pointer transition-all text-white ml-2">Sign-in</span>
</div>


        </div>
      )}
    >

      <MembersPage/>
      
   <EnablerPage/>
    <MentorPage/>
      
    </Carousel>
  );
}
