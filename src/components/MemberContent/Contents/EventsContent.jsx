import { useState, useEffect } from "react";
import { events } from "../ContentData.jsx";
import Avatar from "@mui/material/Avatar";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import moment from "moment/moment.js";
import { fetchImage } from "../../../hooks/image-hook.js";

function EventsContent({ data }) {
  const [profilePics, setProfilePics] = useState({});

  useEffect(() => {
    const fetchProfilePics = async () => {
      const pics = {};
      for (const event of data) {
        const picBlob = await fetchProfilePic(event.setting_profilepic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[event.event_id] = picUrl;
      }
      setProfilePics(pics);
    };

    fetchProfilePics();
  }, [data]);

  const fetchProfilePic = async (profile_pic_name) => {
    const profilePic = await fetchImage(`profile-img/${profile_pic_name}`);
    return profilePic;
  };

  return (
    <>
      <div className="flex">
        {data?.map((event) => (
          // cards
          <div
            className="bg-white rounded-lg flex flex-col mx-5 p-5 max-w-30"
            key={event.event_id}
          >
            {/* title description container */}
            <div className="flex flex-col grow">
              <div className="flex flex-col">
                <h2 className="text-black font-bold text-xl mb-3">
                  {event.event_title}
                </h2>
                <h2 className="text-black text-opacity-80 ">
                  <LocationOnRoundedIcon />ㅤ{event.event_address}
                </h2>
                <h2 className="text-black text-opacity-80 ">
                  <CalendarMonthRoundedIcon />ㅤ
                  {moment(event.event_date).format("MMMM DD, YYYY")}
                </h2>
                <h2 className="text-black text-opacity-80 mb-1">
                  <AccessTimeRoundedIcon />ㅤ
                  {moment(event.event_time, "HH:mm:ss").format("hh:mm A")}
                </h2>
              </div>

              <p className="text-black text-opacity-80 mb-1 text-base">
                {event.event_description.length > 250
                  ? event.event_description.substring(0, 250) + "..."
                  : event.event_description}
              </p>
            </div>
            {/* footer container */}
            <div className="flex items-center flex-row m-1 mt-3">
              <Avatar
                src={profilePics[event.event_id]}
                alt={event.setting_institution}
              />
              <h2 className="text-black mx-2 font-bold">
                {event.setting_institution}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventsContent;
