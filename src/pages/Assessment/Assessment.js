import React, { useState } from "react";
import "./Assessment.css";

// import { ReactComponent as FirstStroke } from "../../assets/icons/first.svg";
import { ReactComponent as SecondStroke } from "../../assets/icons/second.svg";
import { ReactComponent as LastStroke } from "../../assets/icons/last.svg";
import { ReactComponent as FirstStroke } from "../../assets/icons/first.svg";
import { ReactComponent as Stroke } from "../../assets/icons/assessment_stroke.svg";
import { ReactComponent as TotalAssessment } from "../../assets/icons/view_agenda.svg";
import { ReactComponent as Purpose } from "../../assets/icons/purpose.svg";
import { ReactComponent as Candidate } from "../../assets/icons/candidates.svg";
import { ReactComponent as MiddleStroke } from "../../assets/icons/middle.svg";
import { ReactComponent as World } from "../../assets/icons/world.svg";

import TotalComponent from "../../components/TotalComponent/TotalComponent";
import CandidateStatistics from "../../components/CandidateStatistics/CandidateStatistics";
import NewAssessment from "../../components/NewAssessment/NewAssessment";
import AssessmentCard from "../../components/AssessmentCard/AssessmentCard";
const AssessmentBar = ["My Assessments", "Results"];

const Assessment = () => {
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  return (
    <div className="assessment-container">
      <div className="assessment-topbar">
        <span className="assessment-text">Assessment</span>
        <Stroke />
        <div className="assessment-links">
          {AssessmentBar.map((eachItem, index) => {
            const currentItem = index === currentLinkIndex;
            return (
              <div
                key={`${eachItem}${index}`}
                className={`assessment-link${currentItem ? "-current" : ""}`}
                onClick={() => setCurrentLinkIndex(index)}
              >
                {eachItem}
              </div>
            );
          })}
        </div>
      </div>
      <div className="myassessments">
        {currentLinkIndex === 0 ? (
          <>
            <div className="assessment-overview">
              <span className="assessment-overview-text">
                Assessment Overview
              </span>
              <div className="assessmentOverview">
                <div className="total-assessment">
                  <TotalComponent
                    name={"Total Assessment"}
                    value={"34"}
                    icon={<TotalAssessment />}
                    isIconCssApplied={true}
                  />
                </div>
                <FirstStroke />
                <div className="candidates">
                  <span className="candidates-text">Candidates</span>
                  <div className="candidates-inner-container">
                    <CandidateStatistics
                      name={"Total Candidate"}
                      value={"11,145"}
                      subvalue={"+89"}
                      icon={<Candidate />}
                    />
                    <MiddleStroke />
                    <CandidateStatistics
                      name={"Who Attempted"}
                      value={"1,14"}
                      subvalue={"+89"}
                    />
                  </div>
                </div>
                <SecondStroke />
                <div className="candidates-source">
                  <span className="candidates-source-text">Candidates Source</span>
                  <div className="candidates-source-inner-container">
                    <CandidateStatistics
                      name={"E-mail"}
                      value={"11,000"}
                      subvalue={"+89"}
                      icon={<World />}
                    />
                    <MiddleStroke />
                    <CandidateStatistics
                      name={"Social Share"}
                      value={"145"}
                      subvalue={"+89"}
                    />
                    <MiddleStroke />
                    <CandidateStatistics
                      name={"Unique Link"}
                      value={"145"}
                      subvalue={"+89"}
                    />
                  </div>
                </div>
                <LastStroke />
                <div className="total-purpose">
                  <TotalComponent
                    name={"Total Purpose"}
                    value={"11"}
                    icon={<Purpose />}
                  />
                </div>
              </div>
            </div>
            <div className="my-assessment-text">My Assessment</div>
            <div className="assessment-list">
              <NewAssessment />
              <AssessmentCard />
              <AssessmentCard />
            </div>
            <div className="empty-container"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Assessment;
