import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselData from "./Company_Data";
import { fetchImage } from "../../hooks/image-hook";

function CarouselFilter({ data }) {
  const [profilePics, setProfilePics] = useState({});
  const [banners, setBanners] = useState({});

  useEffect(() => {
    const fetchProfilePics = async () => {
      const pics = {};
      for (const profilePic of data) {
        const picBlob = await fetchProfilePic(profilePic.setting_profilepic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[profilePic.setting_id] = picUrl;
      }
      setProfilePics(pics);
    };

    const fetchCoverPics = async () => {
      const pics = {};
      for (const coverPic of data) {
        const picBlob = await fetchBanner(coverPic.setting_coverpic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[coverPic.setting_id] = picUrl;
      }
      setBanners(pics);
    };

    fetchProfilePics();
    fetchCoverPics();
  }, [data]);

  const fetchProfilePic = async (profile_pic_name) => {
    const profilePic = await fetchImage(`profile-img/${profile_pic_name}`);
    return profilePic;
  };

  const fetchBanner = async (banner_pic_name) => {
    const bannerPic = await fetchImage(`profile-cover-img/${banner_pic_name}`);
    return bannerPic;
  };

  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={0}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="MySwiper"
    >
      {data.map((company, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">
            <div className="mb-4 mt-5 ">
              <div className="flex items-center justify-center w-full min-w-52 max-w-52">
                {/* card container (parent container)*/}
                <div className="flex flex-col justify-center items-center max-h-82 w-56">
                  {/* profilePic Container */}
                  <div className="relative flex items-center justify-center rounded-full p-1 bg-white h-24 w-24 translate-y-10 ">
                    <img
                      className="flex max-h-20 max-w-20 rounded-full object-cover"
                      src={profilePics[company.setting_id]}
                      alt="Profile Picture"
                    />
                  </div>
                  {/* background design */}
                  <div className="pt-10 rounded p-4 blur-bg "> </div>

                  <div className="pt-10 rounded-2xl bg-white mb-[-5px] h-[273px] w-[252px]">
                    {/* content container */}
                    <div className="flex justify-center flex-col ">
                      <div className="flex items-start ml-4 font-bold text-xl text-black">
                        {company.setting_institution}
                      </div>
                      <div className="flex items-start m-5 text-black text-sm h-6">
                        {company.setting_tagline}
                      </div>
                      <img
                        className="flex h-full w-full min-h-36 max-h-32 min-w-58 max-w-64 object-fill object-center rounded-b-xl"
                        src={banners[company.setting_id]}
                        alt="Profile Cover"
                      />
                    </div>
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

export default CarouselFilter;
