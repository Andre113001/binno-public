import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
// import "./App.css";
import Accordion from "./Faq_openpage.jsx";
import { SubscriptionPopover } from "./Faq_Popover";

export default function FAQmore() {
  

  // useEffect(() => {
  //   fetchFAQs();
  // }, []);
  // const fetchFAQs = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/faqs");
  //     setQuestions(response.data);
  //     setFilteredQuestions(response.data);
  //   } catch (error) {
  //     console.error("Error fetching FAQ data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchFAQs();
  // }, []);
  // const fetchFAQs = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/faqs');
  //     setQuestions(response.data);
  //     setFilteredQuestions(response.data);
  //   } catch (error) {
  //     console.error('Error fetching FAQ data:', error);
  //   }
  // };

  return (
    <div className="w-full h-full bg-white pt-20 overflow-x-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-CustomOrange font-bold text-2xl">
          Frequently Asked Questions
        </h2>

        <h2 className="text-black font-semibold text-xl">
          How can we help you?
        </h2>
        <Accordion></Accordion>
      </div>
    </div>
  );
}
