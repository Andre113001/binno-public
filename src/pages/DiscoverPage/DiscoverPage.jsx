import React from "react";
import MemberContent from "../../components/MemberContent/MemberContent";

function DiscoverPage({ data }) {
  return (
    <>
      {/* content page container */}
      <div className="flex flex-col w-full bg-discoverWhite">
        {/* title container */}
        <div className="mt-10 flex w-full items-center justify-center max-h-20">
          <h1 className="font-bold text-6xl text-CustomOrange">Discover</h1>
        </div>
        {/* content container */}
        <div className="flex">
          <MemberContent data={data} />
        </div>
      </div>
    </>
  );
}

export default DiscoverPage;
