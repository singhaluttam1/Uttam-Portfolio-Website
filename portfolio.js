/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Uttam Singhal",
  title: "Hi all, I'm Uttam 👋",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 experienced in building scalable Web and Mobile applications using JavaScript, React.js, Node.js, Express, MongoDB, Redux Toolkit, and modern frameworks — with expertise in real-time chat apps, video streaming platforms, food delivery systems, and marketplace solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1r_91QGhP8YyIztzvYY-ob3n2gO3ATETi/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/singhaluttam1",
  linkedin: "https://www.linkedin.com/in/uttam-singhal-341a7420a/",
  gmail: "singhaluttam1@gmail.com"
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A FOCUS ON WEB, MOBILE, AI, AND DEPLOYMENT",
  skills: [
    emoji("⚡ Build scalable Full Stack Applications using React.js, Node.js, Express.js, and MongoDB"),
    emoji("⚡ Develop modern, responsive UI with React, TailwindCSS, Redux Toolkit, and React Router"),
    emoji("⚡ Implement real-time features like chat, notifications, and payment integration (Razorpay)"),
    emoji("⚡ Strong foundation in Data Structures, Algorithms, and Machine Learning"),
    emoji("⚡ Deploy and host applications on AWS with production-ready configurations")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Redux Toolkit", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Tailwind CSS", fontAwesomeClassname: "fas fa-paint-brush" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Testing (Jest/RTL)", fontAwesomeClassname: "fas fa-vial" },
    { skillName: "JWT Auth", fontAwesomeClassname: "fas fa-key" },
    { skillName: "Razorpay Integration", fontAwesomeClassname: "fas fa-credit-card" },
    { skillName: "AWS Hosting", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};
// Education Section
const UttamInfo = {
  display: true,
  schools: [
    {
      schoolName: "ABES Engineering College",
      logo: require("./assets/images/abesLogo.png"),
      subHeader: "B.Tech in Computer Science Engineering (AI & ML)",
      duration: "August 2021 - July 2025",
      desc: "Focused on Artificial Intelligence, Machine Learning, Data Structures, and Full Stack Development.",
      descBullets: [
        "Built projects including DevTinder, Netflix Clone, Swiggy Clone, and News Website",
        "Actively participated in hackathons, coding contests, and academic projects"
      ]
    },
    {
      schoolName: "Saraswati Vihar Senior Secondary School",
      logo: require("./assets/images/schoolLogo.png"),
      subHeader: "Senior Secondary (CBSE - Science Stream)",
      duration: "April 2019 - March 2021",
      desc: "Completed Class 12th with PCM and Computer Science."
    },
    {
      schoolName: "Saraswati Vihar Senior Secondary School",
      logo: require("./assets/images/highschoolLogo.png"),
      subHeader: "High School (CBSE)",
      duration: "April 2017 - March 2019",
      desc: "Completed Class 10th with distinction."
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming & Problem Solving", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Machine Learning Intern",
      company: "CodeAegis Pvt. Ltd.",
      companylogo: require("./assets/images/teamcodeaegis_logo.jpeg"),
      date: "Aug 2023 – Nov 2023",
      desc: "Worked on data cleaning, processing, and ML model training for project 'Thoolie'.",
      descBullets: [
        "Hands-on experience in Data Science and Machine Learning workflows",
        "Collaborated with industry professionals on real-world ML solutions"
      ],
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY KEY PROJECTS",
  projects: [
    {
      image: require("./assets/images/devtinderLogo.png"),
      projectName: "DevTinder",
      projectDesc:
        "Full-stack dating style app with profile management, requests, real-time connections, and backend pagination.",
      footerLink: [{ name: "GitHub", url: "https://github.com/singhaluttam1" }]
    },
    {
      image: require("./assets/images/netflixLogo.png"),
      projectName: "Netflix Clone",
      projectDesc:
        "Responsive Netflix-style web app using React, Redux Toolkit, TailwindCSS, and TMDb API.",
      footerLink: [{ name: "GitHub", url: "https://github.com/singhaluttam1" }]
    },
    {
      image: require("./assets/images/swiggyLogo.png"),
      projectName: "Swiggy Clone",
      projectDesc:
        "Food delivery app with reusable components, React Router navigation, API integration, and testing using Jest/RTL.",
      footerLink: [{ name: "GitHub", url: "https://github.com/singhaluttam1" }]
    },
    {
      image: require("./assets/images/newsLogo.png"),
      projectName: "News Website",
      projectDesc:
        "Dynamic news website integrating News API with responsive UI in HTML, CSS, JS.",
      footerLink: [{ name: "GitHub", url: "https://github.com/singhaluttam1" }]
    }
  ],
  display: true
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7248868055",
  email_address: "singhaluttam1@gmail.com"
};

const isHireable = true; // since you're open to opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  UttamInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection
};