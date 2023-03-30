import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ accordion }) => {
  const [showAccordionDetails, setShowAccordionDetails] = useState(false);

  const handleAccordionDetails = () => {
    setShowAccordionDetails(!showAccordionDetails);
  };
  return (
    <div className="accordion__content">
      <header onClick={handleAccordionDetails} className="accordion__header">
        <span style={{ color: showAccordionDetails ? "#004db3" : "black" }}>
          {accordion.title}
        </span>
        <i
          style={{
            display: `${showAccordionDetails ? "none" : "flex"}`,
            color: showAccordionDetails ? "#004db3" : "black",
          }}
          className="fa-solid fa-plus"
        ></i>
        <i
          style={{
            display: `${!showAccordionDetails ? "none" : "flex"}`,
            color: showAccordionDetails ? "#004db3" : "black",
          }}
          className="fa-solid fa-minus"
        ></i>
      </header>
      <p
        style={{ display: `${!showAccordionDetails ? "none" : "flex"}` }}
        className="accordion__description"
      >
        {accordion.description}
      </p>
    </div>
  );
};

export default Accordion;
