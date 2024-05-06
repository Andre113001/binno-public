import { useState, useEffect } from "react";
import { guides } from "../ContentData.jsx";
import Avatar from "@mui/material/Avatar";
import moment from "moment/moment.js";
import { fetchImage } from '../../../hooks/image-hook.js';

function GuidesContent({data}) {
  const [profilePics, setProfilePics] = useState({});

  useEffect(() => {
    const fetchProfilePics = async () => {
      const pics = {};
      for (const guide of data) {
        const picBlob = await fetchProfilePic(guide.setting_profilepic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[guide.program_id] = picUrl;
      }
      setProfilePics(pics);
    };

    fetchProfilePics();
  }, [data]);

  const fetchProfilePic = async (profile_pic_name) => {
    const profilePic = await fetchImage(`profile-img/${profile_pic_name}`);
    return profilePic;
  }

  return (
    <>
      <div className="flex">
        {data?.map((guides) => (
          // cards
            <div
              className="bg-white rounded-lg flex flex-col mx-5 p-5  max-w-30"
              key={guides.program_id}
            >
              {/* title description container */}
              <div className="flex flex-col">
                <h2 className="text-black font-bold text-xl mb-1">
                  {guides.program_heading}
                </h2>
                {/* <p className="text-black text-opacity-80 mb-1 text-base">
                  {guides.guideDescription}
                </p> */}
              </div>
              <p className="text-black text-opacity-60">{moment(guides.program_dateadded).format("MMMM DD, YYYY | hh:mm A")}</p>
              {/* footer container */}
              <div className="flex items-center flex-row m-1 mt-3">
                <Avatar 
                  src={profilePics[guides.program_id]} 
                  alt={guides.setting_institution} 
                />
                <h2 className="text-black mx-4 font-bold">{guides.setting_institution}</h2>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default GuidesContent;
