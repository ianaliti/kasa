import React, { useState } from 'react';
import './CollapseList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function CollapseList({ title, items }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`collapse-list ${isExpanded ? 'expanded' : ''}`}>
      <div className="collapse-list-header" onClick={toggleExpansion}>
        <p className="title">{title}</p>
        <FontAwesomeIcon className="toggle-icon" icon={isExpanded ? faChevronDown : faChevronUp} />
      </div>
      {isExpanded && (
        <div className="collapse-list-content">
          {Array.isArray(items) ? (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{items}</p>
          )}
        </div>
      )}
    </div>
  );
};
