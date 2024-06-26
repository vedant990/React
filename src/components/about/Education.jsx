import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "BACHELOR DEGREE",
    institute: "Swami Keshvanand Institute of Technology",
    details: `  LRelevant Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases, Web Technology, Information System Security, Cloud Computing Virtualization, Cloud Infrastructure Service `,
  },
  {
    year: "2020",
    degree: "HIGH SCHOOL",
    institute: "Blue Bells Model School",
    details: `Relevant Courses: Physics, Chemistry, Maths, English, Physical Education `,
  },

];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
