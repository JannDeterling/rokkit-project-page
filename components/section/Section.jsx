import React, { useState } from "react";
import "./section.scss";

const Section = ({ children, heading, imageLeft, imageRight, readMore }) => {
  const [showReadMore, setShowReadMore] = useState(false);

  const readMoreComponent = showReadMore ? readMore : null;

  const readMoreButton = (
    <button
      className={showReadMore ? "read-less" : "read-more"}
      onClick={() => setShowReadMore(!showReadMore)}
    >
      {showReadMore ? "Show less" : "Show more"}
    </button>
  );

  return (
    <section className="section">
      <h2 className="section-heading">{heading}</h2>
      <div className="section-content">
        {imageLeft ? (
          <div className="section-img-container">
            <img className="section-img" src={imageLeft} />
          </div>
        ) : null}
        <div className="section-children">
          {children}
          {readMore ? readMoreButton : null}
        </div>
        {imageRight ? (
          <div className="section-img-container">
            <img className="section-img" src={imageRight} />
          </div>
        ) : null}
      </div>
      {readMore ? readMoreComponent : null}
    </section>
  );
};
export default Section;
