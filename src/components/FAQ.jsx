import React, { useState } from "react";
import { faqData } from "../data/modules";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >
          <button 
            className="faq-question" 
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <svg 
              className="faq-arrow" 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
