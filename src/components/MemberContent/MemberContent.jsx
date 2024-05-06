import React from "react";
import BlogsContent from "./Contents/BlogsContent.jsx";
import GuidesContent from "./Contents/GuideContent.jsx";
import EventsContent from "./Contents/EventsContent.jsx";
import CommunityPage from "./Contents/CommunityPage.jsx";

function MemberContent({data}) {
  return (
    <>
      {/* content container */}
      <div className="flex flex-col">
        {/* blog container */}
        <div className="flex flex-col mx-10">
          <h1 className="text-companyBG font-bold text-5xl">Blog</h1>
          <div className="flex justify-end w-full">
            <a
              className=" mx-5 justify-end text-xl text-CustomOrange font-bold "
              href="https://www.facebook.com"
            >
              View All
            </a>
          </div>
          {/* blog card container */}
          <div className="flex flex-row m-10 ">
            <BlogsContent data={data?.blogs}/>
          </div>
        </div>
        {/* event container */}
        <div className="flex flex-col mx-10">
          <h1 className="text-companyBG font-bold text-5xl">Events</h1>
          <div className="flex justify-end w-full">
            <a
              className=" mx-5 justify-end text-xl text-CustomOrange font-bold "
              href="https://www.facebook.com"
            >
              View All
            </a>
          </div>

          {/* event card container */}
          <div className="flex flex-row m-10">
            <EventsContent data={data?.events}/>
          </div>
        </div>
        {/* Guides */}
        <div className="flex flex-col mx-10">
          <h1 className="text-companyBG font-bold text-5xl">Guides</h1>
          <div className="flex justify-end w-full">
            <a
              className="mx-5 justify-end text-xl text-CustomOrange font-bold "
              href="https://www.facebook.com"
            >
              View All
            </a>
          </div>
          {/* guide card container */}
          <div className="flex flex-row m-10 ">
            <GuidesContent data={data?.guides}/>
          </div>
        </div>
        <div className="flex">
          <CommunityPage data={data?.metrics}/>
        </div>
      </div>
    </>
  );
}

export default MemberContent;
