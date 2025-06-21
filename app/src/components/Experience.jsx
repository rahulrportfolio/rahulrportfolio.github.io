import React from "react";
import TimelineComponent from "./TimelineComponent";
import nbcImage from "../assets/AY 24-25 LI Intern Banner.jpg"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer intern",
      company: "NBC Universal Media, LLC",
      duration: "Sep 2024 - Apr 2025",
      description: "",
      achievements: null,
      image: nbcImage
    },
    {
      id: 2,
      title: "Netword Performance intern",
      company: "Verizon",
      duration: "June 2024 - Aug 2024",
      description: "Designed and implemented a Python-MySQL tool for auditing Ciena servers, improving network performance, reducing manual labor by 74%, and saving costs through the identification of bandwidth and policy settings errors",
      achievements: null,
      image: "https://www.cnet.com/a/img/resize/55664c8cd9dc82e71670e8dd4cfe88f82afa09cd/hub/2024/06/26/1186047f-41d9-46b0-bb83-1840bc95b09f/02-after-logo.png?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      id: 3,
      title: "Network Engineer intern",
      company: "Verizon",
      duration: "June 2023 - Aug 2023",
      description: "Communicated directly with third-party vendors, including Cisco and Ciena, to coordinate issue resolution and equipment diagnostics. Developed a Python-based program to automate report generation, improving field engineer efficiency by 86%, while performing data analytics for anomaly detection and creating tailored server scripts for critical site insights.",
      achievements: null,
      image: "https://www.cnet.com/a/img/resize/55664c8cd9dc82e71670e8dd4cfe88f82afa09cd/hub/2024/06/26/1186047f-41d9-46b0-bb83-1840bc95b09f/02-after-logo.png?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      id: 4,
      title: "Social Media Manager",
      company: "Manhattan Univeristy",
      duration: "Sep 2021 - Dec 2021",
      description: "Developed a promotional plan that increased student participation by 34%, improved social media visibility by 19%, and handled front desk and event coordination.",
      achievements: null,
      image: "https://micefa.org/wp-content/uploads/2008/07/MUStacked_Green_cmyk-768x244.jpg"
    }
  ];

    return (
        <div className="justify-center pt-20">
            <TimelineComponent experiences={experiences} />
        </div>
    );
}
export default Experience;