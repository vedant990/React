import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Vedant" },
  { meta: "last name", metaInfo: "Kalia" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Address", metaInfo: "India" },
  { meta: "Email", metaInfo: "vedantkalia@proton.me" },
  { meta: "langages", metaInfo: "Hindi, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
