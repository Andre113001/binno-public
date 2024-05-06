import React from "react";
import Faq_landing from  "./Faq_landing.jsx"

function FAQPage({data}) {
  return (
    <>
      <div className="flex  min-h-[720px]  max-h-[720px]  overflow-hidden">
        <Faq_landing data={data}/>
      </div>
    </>
  );
}

export default FAQPage;
