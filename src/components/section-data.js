// src/Experience.js

import shellLogo from './shell-logo.png';
import birlasoftLogo from './birlasoft-logo.png';
import opencvLogo from './opencv-logo.svg';
import ssdLogo from './ssd-logo.svg';
import ieeeLogo from './ieee-logo.jpg';
import taylorFrancisLogo from './taylor-francis-logo.png';
import RagLogo from './RAG.png';

const sectionData = {
  experience: [
    {
      title: "Associate Software Engineer",
      company:"Shell",
      year:"7th August 2023 - Current",
      description: "Developed and maintained Quant Portal, a full stack enterprise Market Risk / Commodity Risk Management application, supporting Quant Risk Analytics across multiple businesses lines inside Shell.",
      details:[ "Technical and Domain: Implemented What-if scenario tool for Value at Risk (VaR) calculations, enabling users to assess and simulate exposure and price changes and compute risk metrics effectively.", 
        "Developed VAR breach monitoring dashboards across 15+ business entities to track and analyze risk metrics, facilitating proactive risk management and expanding coverage across Shell's global trading operations.",
        "Developed bulk upsert pipelines for multiple modules in the application, improving data management efficiency and reducing manual intervention, saving time for business users.",
        "Streamlined the correction workflows by building entity-specific correction screens with full audit trails, ensuring regulatory compliance and reducing the time taken for corrections by 30%.",
        "Served as a Software Developer on a business critical internal tool used by quantitative risk analysts and Shell traders globally and collaborated with traders and stakeholders to translate business requirements into technical solutions.",
        "Created Workflow using Power Platform: Extensively utilized Power Automate and Power BI to develop a flow that streamlines processes and improves efficiency."
      ],
      logo: shellLogo,
  },
    {
      title: "Software Engineering Intern",
      company:"Birlasoft",
      year:"9th May 2023 - 28th July 2023",
      description: "Built CI/CD pipeline and configure static and dynamic code testing tools using Azure DevOps for an internal tool.",
      details: ["I worked on Azure DevOps. ",
        "Implemented CI/CD pipelines for an internal tool, automating the build, test, and deployment processes to enhance efficiency and reduce manual errors.",
        "Configured static code analysis tools to ensure code quality and adherence to coding standards, resulting in improved code maintainability and reduced technical debt.",
        "Set up dynamic code testing tools to identify and address runtime issues, enhancing the overall reliability and performance of the internal tool."
      ],
      logo: birlasoftLogo,
      }
  ],
  projects: [
    {
      title: "LLM assisted lightweight RAG",
      description: "- A local lightweight Retrieval-Augmented Generation (RAG) pipeline.",
      details: ["https://github.com/sumir007/llm-assisted-lightweight-rag -  local lightweight Retrieval-Augmented Generation (RAG) pipeline for extracting scheduling and monitoring data, and determining status from PDF using Large Language Models.",
      "Combines deterministic lexical scoring, structural pattern boosts (dates/terms), and LLM-assisted query expansion for reliable legal document analysis."
  ],      logo: RagLogo,
},
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