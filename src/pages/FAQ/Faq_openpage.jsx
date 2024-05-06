import React, { useState, useEffect } from "react";
import axios from "axios";
import { SubscriptionPopover } from "./Faq_Popover";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-white my-2 border border-slate-600 shadow hover:shadow-md rounded-xl">
      <h3
        onClick={toggleAccordion}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer text-black"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-orange-700 h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h3>
      <div
        className={`border-l-2 rounded-bl-lg border-orange-600 overflow-hidden transition-all ${
          isOpen
            ? `max-h-96 duration-500 ease-in`
            : `max-h-0 duration-500 ease-out`
        }`}
      >
        <p className="p-3 text-gray-900 flex">{content}</p>
      </div>
    </li>
  );
}

function Accordion() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/public/faq`
      );
      setQuestions(response.data);
      setFilteredQuestions(response.data);
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    }
  };

  const filterQuestions = (searchText) => {
    const filtered = questions.filter((question) =>
      question.question.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuestions(filtered);
  };

  return (
    <main className="p-5 bg-light-blue w-dvw">
      <form>
        <div className="max-w-md mx-auto sm:w-1/4">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg border border-slate-500 overflow-hidden ">
            <div className="grid place-items-center h-full w-12 text-gray-300 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-black pr-2 bg-white"
              type="text"
              id="search"
              placeholder="Search something.."
              onChange={(e) => filterQuestions(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center items-start my-2">
        <div class="w-full sm:w-2/4 my-1">
          <ul className="flex flex-col">
            {filteredQuestions.map((faq, index) => (
              <AccordionItem
                key={faq.faq_id}
                title={faq.faq_title}
                content={faq.faq_content}
              />
            ))}
          </ul>
        </div>
      </div>

      <SubscriptionPopover></SubscriptionPopover>
    </main>
  );
}

export default Accordion;
