import React, { useState } from "react";
import icon from "../../assets/BiNNO-Transparent_black.svg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import TextField from "@mui/material/TextField";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    console.log("Submitted email:", userEmail);
    setEmail("");
  };

  return (
    <>
      {/* footer container */}
      <div className="flex flex-col items-center h-auto w-full   py-2 px-4">
        <div className="flex h-52 w-full">
          {/* contact details */}
          <div className="flex flex-col items-center justify-center border-r-2 border-customBorder p-5">
            <div className="flex flex-col items-start">
              <img className="object-cover h-20 w-auto" src={icon} alt="" />
              <h2 className="text-black m-2">
                <EmailRoundedIcon sx={{ color: "#599EF3" }} />
                <span className="ml-3">startwithbinno@email.com</span>
              </h2>
              <h2 className="text-black m-2">
                <LocalPhoneRoundedIcon sx={{ color: "#599EF3" }} />
                <span className="ml-2">+63 924 231 5821</span>
              </h2>
              <h2 className="text-black m-2">
                <LocationOnRoundedIcon sx={{ color: "#599EF3" }} />
                <span className="ml-2">
                  Bicol University Main, Student Union Center Bldg.
                </span>
              </h2>
            </div>
          </div>
          {/* members & discover container */}
          <div className="flex p-10 grow items-center justify-center">
            {/* members container */}
            <div className="flex flex-col items-start mx-10">
              <h1 className="text-CustomOrange text-xl font-bold">
                Main Users
              </h1>
              <a className="mt-5" href="">
                Startup Company
              </a>
              <a className="my-3" href="">
                Startup Enablers
              </a>
              <a href="">Startup Mentors</a>
            </div>
            {/* discover container */}
            <div className="flex flex-col items-start mx-10 ">
              <h1 className="text-CustomOrange text-xl font-bold">Discover</h1>
              <a className="mt-5" href="">
                Blog Articles
              </a>
              <a className="my-3" href="">
                Events
              </a>
              <a href="">Guides</a>
            </div>
            {/* Legal container */}
            <div className="flex flex-col items-start mx-10 ">
              <h1 className="text-CustomOrange text-xl font-bold">Legal</h1>
              <a className="mt-5" href="">
                Terms and Condition
              </a>
              <a className="my-3" href="">
                Privacy Policy
              </a>
              <a className="" href="">
                Security
              </a>
            </div>
          </div>
          {/* newsletter subscription */}
          <div className="flex flex-col items-center p-10 border-l-2 border-customBorder">
            <div className="flex flex-col">
              <h1 className="text-CustomOrange text-xl font-bold mb-2">
                Newsletter
              </h1>
              <p className="w-80 text-black">
                Become a part of the revolution by being up-to-date with our
                latest offering by startups and startup enablers!
              </p>
              {/* email container */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-center items-center mt-4">
                  <TextField
                    value={email}
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-customLBlue hover:bg-blue-700 text-white py-3 px-6 rounded ml-4"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h1 className="text-black opacity-60 ">Copyright © 2023</h1>
      </div>
    </>
  );
}

export default Footer;
