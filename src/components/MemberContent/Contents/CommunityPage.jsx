import React from "react";

function CommunityPage({data}) {
  const members = [
    {
      id: 1,
      userType: "Startup Companies",
      userCount: data?.companies
    },
    {
      id: 2,
      userType: "Startup Enablers",
      userCount: data?.enablers
    },
    {
      id: 3,
      userType: "Startup Mentors",
      userCount: data?.mentors
    },
    {
      id: 4,
      userType: "Visitors",
      userCount: 20
    }
  ];

  return (
    <>
      {/* Community page container */}
      <div className="flex flex-row justify-center items-center my-40 w-full mx-0">
        {/* text container */}
        <div className="flex mx-40 max-w-1/2">
          <h1 className="text-CustomOrange font-bold text-5xl w-full max-w-80">
            Be part of our growing community
          </h1>
        </div>
        {/* community count container grid format*/}
        <div className="grid grid-cols-2 mx-35">
          {members.map((member) => (
            <div className="mx-5" key={member.id}>
              {/* card design */}
              <div className=" bg-white py-[50px] m-5 w-full h-[230px] max-w-30 rounded-[30px]">
                {/* content alignment */}
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-customLBlue font-bold text-7xl mb-3">
                    {member.userCount}
                  </h1>
                  <h3 className="text-black w-20 text-center mx-20 text-xl">{member.userType}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
