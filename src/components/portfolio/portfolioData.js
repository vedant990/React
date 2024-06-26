import Image1 from "../../assets/img/portfolio/ok.png";
import Image2 from "../../assets/img/portfolio/2-tier.png";

const PortfolioData = [
  {
    id: 1,
    type: "Project",
    image: Image1,
    tags: ["AWS"], // Ensure tags is used as an array
    delayAnimation: 0, // Removed quotes around delayAnimation value
    modalDetails: [
      {
        project: "3 Tier Architecture",
        platform: "AWS", // Corrected key name to match modal rendering
        preview: "Github",
        link: "https://github.com/vedant990/3-TIER-ARCHITECTURE",
      },
    ],
  },
  {
    id: 2,
    type: "Project",
    image: Image2,
    tags: ["TERRAFORM"], // Ensure tags is used as an array
    delayAnimation: 2, // Removed quotes around delayAnimation value
    modalDetails: [
      {
        project: "2 Tier Architecture",
        platform: "TERRAFORM", // Corrected platform to TERRAFORM
        preview: "Github",
        link: "https://github.com/vedant990/Terraform-2-Tier-Architecture",
      },
    ],
  },
];

export default PortfolioData;
