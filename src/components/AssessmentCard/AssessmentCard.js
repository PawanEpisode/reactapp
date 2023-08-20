import React from "react";

import { ReactComponent as CardDottedLine } from "../../assets/icons/cardDottedLine.svg";
import { ReactComponent as Job } from "../../assets/icons/job.svg";
import { ReactComponent as ThreeDots } from "../../assets/icons/threedots.svg";
import { ReactComponent as VerticalStroke } from "../../assets/icons/cardVertical.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar_today.svg";
import { ReactComponent as ShareLink } from "../../assets/icons/link.svg";

import "./AssessmentCard.css";

const AssessmentCard = () => {
  return (
    <div className="assessment-card-container">
      <div className="assessment-card-top">
        <div className="assessment-card-icons">
          <Job />
          <ThreeDots />
        </div>
        <div className="assessment-card-nametext">Math Assessment</div>
        <div className="assessment-card-purposedate">
          <div className="assessment-card-purpose">Job</div>
          <VerticalStroke />
          <div className="assessment-card-date">
            <Calendar />
            <span className="assessment-card-datetext">{"20 Apr 2023"}</span>
          </div>
        </div>
      </div>
      <CardDottedLine />
      <div className="assessment-card-bottom">
        <div className="assessment-card-durationquestion">
          <div className="assessment-card-duration">
            <span className="durationquestion-value">{"00"}</span>
            <span className="durationquestion-text">{"Duration"}</span>
          </div>
          <div className="assessment-card-questions">
            <span className="durationquestion-value">{"00"}</span>
            <span className="durationquestion-text">{"Questions"}</span>
          </div>
        </div>
        <div className="assessment-card-linkpeople">
            <div className="assessment-card-sharelink">
            <ShareLink />
            <span className="assessment-card-sharelinkText">Share</span>
            </div>
            <div className="assessment-card-people">
                <div>A</div>
                <div>M</div>
                <div>K</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
