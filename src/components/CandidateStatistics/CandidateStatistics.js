import React from "react";
import "./CandidateStatistics.css";

const CandidateStatistics = ({ name, value, subvalue, icon }) => {
  return (
    <div className="candidate-statistics-container">
      {icon && <span>{icon}</span>}
      <div className="candidate-statistics-inner-container">
        <span className="candidate-statistics-container-value">
          {value}
          <span className="candidate-statistics-container-subvalue">{subvalue}</span>
        </span>
        <div className="candidate-statistics-container-text">{name}</div>
      </div>
    </div>
  );
};

export default CandidateStatistics;
