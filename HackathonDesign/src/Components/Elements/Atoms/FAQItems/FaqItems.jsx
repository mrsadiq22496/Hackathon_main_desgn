import React from "react";
import CloseImg from '../../../../assets/Faqclose.png';
import OpenImg from '../../../../assets/Faqopen.png';
import "./FaqItems.css";

// FAQItem Component
const FaqItems = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 FaqItemsContainer">
      <div
        className="flex justify-between items-center border-b border-gray-700 py-4 cursor-pointer FaqItemsContainerSub"
        onClick={onClick}
      >
        <h2 className="text-xl AccordianQuestion">{question}</h2>
        <i>
          {/* Add conditional class for open and close animations */}
          <img 
            src={isOpen ? CloseImg : OpenImg} 
            alt={isOpen ? 'Close' : 'Open'} 
            className={isOpen ? 'close' : 'open'}
          />
        </i>
      </div>
      {isOpen && <p className="text-gray-400 mt-2 Accordiananswer">{answer}</p>}
    </div>
  );
};

export default FaqItems;
