import React from "react";

const experienceContent = [
  {
    year: "   2024 - Present",
    position: " Devops Intern",
    compnayName: "Clouddrove",
    details: `  Practising Devops Tools and Implementing with Real World Projects.`,
  },
  {
    year: "June 2023 - Aug 2023",
    position: " AWS Intern",
    compnayName: "Ahead WebSoft Technologies Pvt. Ltd.",
    details: `Effectively applied AWS services and DevOps methods on real projects, showcasing commitment, attention to detail, and adaptability to new technologies. Received positive feedback for productivity and cooperative teamwork. `,
  },
  {
    year: "Mar 2020 - Dec 2020",
    position: "Server Manager",
    compnayName: "Freelancer",
    details: `Managed Servers For A UK-Based Firm involved in the management and deployment of various applications, ensuring optimal performance and reliability. `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
