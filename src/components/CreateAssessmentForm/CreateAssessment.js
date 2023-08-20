import React, { useState } from "react";
import "./CreateAssessment.css";

import ArrowDown from "../../assets/icons/keyboard_arrow_down.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Purpose = [
  "Select",
  "Full Time Job",
  "Full Time Internship",
  "Part Time Job",
  "Part Time Internship",
  "Survey",
];

const Description = [
  "Select",
  "You will get a Full Time Job",
  "You will get a Full Time Internship",
  "You will get a Part Time Job",
  "You will get a Part Time Internship",
  "This is a Part of Survey",
];

const CreateAssessment = () => {
  const [skillValue, setSkillValue] = useState("");
  const [skillChips, setSkillChips] = useState([]);
  const [skillError, setSkillError] = useState(null);
  const handleSkillKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      const skillvalue = skillValue.trim();

      if (skillvalue && isValid(skillvalue)) {
        setSkillChips([...skillChips, skillvalue]);
        setSkillValue("");
        setSkillError(null);
      }
    }
  };

  const handleSkillChange = (evt) => {
    setSkillValue(evt.target.value);
    setSkillError(null);
  };

  const handleSkillPaste = (evt) => {
    evt.preventDefault();

    const paste = evt.clipboardData.getData("text");
    const skillvalue = paste
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split("[-.,]")
      .split("AND|OR|or|and|\\s");
    console.log("skillvalue", skillValue);
    if (skillvalue) {
      const toBeAdded = skillvalue.filter((skill) => !isInList(skill));
      setSkillChips([...skillChips, ...toBeAdded]);
    }
  };

  const isInList = (value) => {
    return skillChips.includes(value);
  };

  const isSkill = (value) => {
    return /[^a-zA-Z0-9 ]/g.test(value);
  };

  const handleDelete = (item) => {
    setSkillChips(skillChips.filter((skill) => skill !== item));
  };

  const isValid = (value) => {
    let error = null;

    if (isInList(value)) {
      error = `${value} has already been added.`;
    }

    if (isSkill(value)) {
      error = `${value} is not a valid skill.`;
    }

    if (skillChips.length === 5) {
      error = `No More Than 5 Skills can be added.`;
    }

    if (error) {
      setSkillError(error);
      return false;
    }
    return true;
  };
  return (
    <div className="create-assessment-container">
      <div className="name-of-assessment">
        <label className="create-assessment-text" htmlFor="name-assessment">
          Name of assessment
        </label>
        <input
          id="name-assessment"
          className="nameAssessment"
          type="text"
          placeholder="Type Here"
        />
      </div>

      <div className="purpose-test">
        <label className="create-assessment-text" htmlFor="purpose-assessment">
          Purpose of the test is
        </label>

        <select
          className="purposeAssessment selectIcon"
          name="purpose-assessment"
          id="purpose-assessment"
          style={{ background: `url(${ArrowDown}) no-repeat` }}
        >
          {Purpose.map((purpose, index) => (
            <option key={index} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
      </div>

      <div className="description-assessment">
        <label
          className="create-assessment-text"
          htmlFor="description-assessment"
        >
          Description
        </label>

        <select
          className="descriptionAssessment selectIcon"
          name="description-assessment"
          id="description-assessment"
          style={{ background: `url(${ArrowDown}) no-repeat` }}
        >
          {Description.map((description, index) => (
            <option key={index} value={description}>
              {description}
            </option>
          ))}
        </select>
      </div>

      <div className="skills-assessment">
        <label className="create-assessment-text" htmlFor="skills-assessment">
          Skills
        </label>
        <div className="chipAndInput">
        {skillChips.length ? (
          <div className="skill-assessment-chips">
            {skillChips.map((chip) => (
              <div className="skill-item-chip" key={chip}>
                <span className="chip-text">{chip}</span>
                <button
                  type="button"
                  className="chipcrossbutton"
                  onClick={() => handleDelete(chip)}
                >
                  <Close />
                </button>
              </div>
            ))}
          </div>
        ) : null}
        <input
          id="skills-assessment"
          className={"skillsAssessment" + (skillChips.length ? ' skillradius': '') + (skillError ? " has-error" : "")}
          type="text"
          value={skillValue}
          placeholder="Type Here"
          onKeyDown={handleSkillKeyDown}
          onChange={handleSkillChange}
          onPaste={handleSkillPaste}
        />
        </div>
        {skillError && <p className="skillerror">{skillError}</p>}
      </div>

      <div className="duration-assessment">
        <label className="create-assessment-text" htmlFor="duration-assessment">
          Duration of assessment
        </label>
        <input
          id="duration-assessment"
          className="durationAssessment"
          type="text"
          placeholder="HH:MM:SS"
        />
      </div>
    </div>
  );
};

export default CreateAssessment;
