import { useState, useEffect } from "react";
import { blogs } from "../ContentData.jsx";
import Avatar from "@mui/material/Avatar";
import useLoadData from "../../../hooks/useLoadData.js";
import moment from "moment/moment.js";
import { fetchImage } from "../../../hooks/image-hook.js";

function BlogsContent({ data }) {
  const [profilePics, setProfilePics] = useState({});

  useEffect(() => {
    const fetchProfilePics = async () => {
      const pics = {};
      for (const blog of data) {
        const picBlob = await fetchProfilePic(blog.setting_profilepic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[blog.blog_id] = picUrl;
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
        {data?.map((blog) => (
          // cards
          <div
            className="bg-white rounded-lg flex flex-col mx-5 p-5 max-w-30"
            key={blog.blog_id}
          >
            {/* title description container */}
            <div className="flex flex-col grow">
              <h2 className="text-black font-bold text-xl mb-1">
                {blog.blog_title}
              </h2>
              <p className="text-black text-opacity-80 mb-1 text-base">
                {blog.blog_content.length > 250
                  ? blog.blog_content.substring(0, 250) + "..."
                  : blog.blog_content}
              </p>
            </div>
            <p className="text-black text-opacity-60">
              {moment(blog.blog_dateadded).format("MMMM DD, YYYY | hh:mm A")}
            </p>
            {/* footer container */}
            <div className="flex items-center flex-row m-1 mt-3">
              <Avatar
                src={profilePics[blog.blog_id]}
                alt={blog.setting_institution}
              />
              <h2 className="text-black mx-2 font-bold">
                {blog.setting_institution}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogsContent;
