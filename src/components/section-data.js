// src/Experience.js

import shellLogo from './shell-logo.png';
import birlasoftLogo from './birlasoft-logo.png';
import opencvLogo from './opencv-logo.svg';
import ssdLogo from './ssd-logo.svg';
import ieeeLogo from './ieee-logo.jpg';
import taylorFrancisLogo from './taylor-francis-logo.png';

const sectionData = {
  experience: [
    {
      title: "Associate Software Engineer",
      company:"Shell",
      year:"7th August 2023 - Current",
      description: "Developed and maintained web applications using modern technologies.",
      details:[ "Technical and Domain: Supported enhancement requests and efficiently completed all enhancements while maintaining high-quality standards.", 
        "Acquired in-depth knowledge of the technical and functional aspects of Market Risk domain.Understanding of SAS programming language.",
        "Developed and delivered a POC for Risk Portfolio: This Proof of Concept (POC) included a front-end built with React and a back-end and API developed using the .NET Core framework and Azure SQL DB, aimed at enhancing efficiency and saving time.",
        "Optimized Production Deployment Workflow: Collaborated with the lead developer to ensure seamless production deployments, addressing and resolving any deployment issues. ",
        "Assisted in the migrations and created the pipelines for CI/CD implementations.",
        "Created Workflow using Power Platform: Extensively utilized Power Automate and Power BI to develop a flow that streamlines processes and improves efficiency."
      ],
      logo: shellLogo,
  },
    {
      title: "Software Engineering Intern",
      company:"Birlasoft",
      year:"9th May 2023 - 28th July 2023",
      description: "Built CI/CD pipeline and configure static and dynamic code testing tools using Azure DevOps",
      details: ["I worked on Azure DevOps. ",
        "I had to create CI/CD pipelines for a project and integrating various tools and services for testing (automated dependency management tool, static application security testing, software composition analysis, DAST) for an ongoing project."
      ],
      logo: birlasoftLogo,
      }
  ],
  projects: [
    {
      title: "WayLane",
      description: "- Path Detection for Self-Driving Carts - A web application built with python using OpenCV.",
      details: ["https://github.com/sumir007/way-lane - A quick and robust method that can easily detect lanes in a live video feed or a pre-recorded video stream.",
      "This framework effectively combines the OpenCV’s canny edge algorithm with the Hough transform function so it can be applied in small scale applications.",
      "Testing and analysis of the program show that the suggested software is very reliable and ready to deploy."
  ],
      logo: opencvLogo,
},
    {
      title: "AI based Real Time Vehicle Speed Detection using Deep Learning",
      description: "A application built with python using SSD - object detection model for image detection.",
      details:[ "Developed a system using deep learning techniques, specifically Single Shot MultiBox Detector (SSD), to accurately detect vehicle speeds in real-time.",
        "Output shows speed of vehicles along with tags and colored indicators to show violations."
    ],
    logo: ssdLogo,
      }
  ],
  publications: [
    {
      title: "Path Detection for Self-Driving Carts by using Canny Edge Detection Algorithm",
    description: "Published in IEEE.",
    details: [
      "Conducted research on self-driving carts.",
      "Developed a system using the Canny Edge Detection Algorithm.",
      "Enhanced path detection accuracy for autonomous navigation."
    ],
    logo: ieeeLogo,
  },
  {
    title: "AI-based real-time Vehicle Speed Detection using Deep Learning",
    description: "Published in Taylor and Francis Journal.",
    details: [
      "Authored a research paper on deep learning-based speed detection.",
      "Utilized Single Shot MultiBox Detector (SSD) for real-time analysis.",
      "Improved accuracy in vehicle speed estimation."
    ],
    logo: taylorFrancisLogo,
  },
  ]
};



export default sectionData;