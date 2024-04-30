import React from "react";
import CompanyContent from "./CompanyData.jsx";

function CompanyPage() {
  return (
    <>
      {/* company page */}
      {CompanyContent.map((val) => (
        <div
          className="flex flex-col bg-discoverWhite items-center h-auto"
          key={val.id}
        >
          <div className="absolute">
            <h1 className="text-9xl bg-gradient-to-r from-discoverWhite from-50% to-companyBG to-50% font-bold p-5 bg-clip-text text-transparent">
              Company
            </h1>
          </div>
          <div className="grid grid-cols-2 bg-discoverWhite">
            {/* company images */}
            <div className="bg-companyBG flex justify-center h-auto w-full p-10">
              {/* <h1 className="text-9xl text-white">Company</h1> */}
              <div className="flex flex-col items-center mt-40">
                <img
                  className="object-cover w-96 h-60 m-4 rounded"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
                  alt=""
                />
                <img
                  className="object-cover w-96 h-60 m-4 rounded"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
                  alt=""
                />
                <img
                  className="object-cover w-96 h-60 m-4 rounded"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
                  alt=""
                />
                <img
                  className="object-cover w-96 h-60 m-4 rounded"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
                  alt=""
                />
              </div>
            </div>
            {/* description page */}
            <div className="bg-discoverWhite m-10 h-auto">
              <div className="flex flex-col items-center justify-center p-5 mt-40">
                <p className="text-black text-2xl">{val.companyDescription}</p>
                {/* mission vision container */}
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-CustomOrange font-bold text-5xl m-10">
                    Mission
                  </h1>
                  <p className="text-black text-2xl">{val.mission}</p>
                  <h1 className="text-CustomOrange font-bold text-5xl m-10 ">
                    Vision
                  </h1>
                  <p className="text-black text-2xl">{val.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CompanyPage;
