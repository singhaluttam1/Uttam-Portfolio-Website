/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Uttam ",
  title: "Hi all, I'm Uttam",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 experienced in building scalable Web applications using JavaScript, React.js, Node.js, Express, MongoDB, React Native, and modern frameworks — with expertise in developing real-time chat apps, video streaming platforms, food delivery systems, and marketplace solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1r_91QGhP8YyIztzvYY-ob3n2gO3ATETi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/singhaluttam1",
  linkedin: "https://www.linkedin.com/in/uttam-singhal-341a7420a/",
  gmail: "Singhaluttam1@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WITH A FOCUS ON WEB, MOBILE, AND AI SOLUTIONS",
  skills: [
    emoji("⚡ Build scalable Full Stack Applications using React.js, Node.js, Express.js, and MongoDB"),
    emoji("⚡ Develop modern, responsive UI with React, TailwindCSS, Redux Toolkit, and React Router"),
    emoji("⚡ Implement real-time features like chat, notifications, and payment integration (Razorpay)"),
    emoji("⚡ Strong foundation in Data Structures, Algorithms, and Machine Learning"),
    emoji("⚡ Deploy and host applications on AWS with production-ready configurations")
  ],

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Redux Toolkit",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "Express.js",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fas fa-paint-brush"
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Machine Learning",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Git & GitHub",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Jest / Testing",
    fontAwesomeClassname: "fas fa-vial"
  },
  {
    skillName: "JWT Auth",
    fontAwesomeClassname: "fas fa-key"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
{
  schoolName: "ABES Engineering College",
  subHeader: "B.Tech in Computer Science Engineering (AI & ML)",
  duration: "August 2021 - July 2025",
  desc: "Focused on Artificial Intelligence, Machine Learning, Data Structures, and Full Stack Development.",
  descBullets: [
    "Built multiple projects including DevTinder, Netflix Clone, Swiggy Clone, and News Website",
    "Actively participated in hackathons, coding contests, and academic projects"
  ]
},
{
  schoolName: "Saraswati Vihar Senior Secondary School",
  subHeader: "Senior Secondary Education (CBSE - Science Stream)",
  duration: "April 2019 - March 2021",
  desc: "Completed Class 12th with Physics, Chemistry, Mathematics, and Computer Science.",
  descBullets: [
    "Developed strong fundamentals in programming and problem-solving",
    "Actively engaged in school-level competitions and academic events"
  ]
},
{
  schoolName: "Saraswati Vihar Senior Secondary School",
  subHeader: "High School (CBSE)",
  duration: "April 2017 - March 2019",
  desc: "Completed Class 10th with distinction.",
  descBullets: [
    "Excelled in academics with consistent performance",
    "Participated in extra-curricular and technical activities"
  ]
}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
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
      link: "https://drive.google.com/file/d/14GO-GLWXkcgMBrmRvXYk-hQXmr2_kYbM/view?usp=drive_link" 
    },
    {
      role: "MERN Stack Intern",
      company: "CodeAegis Pvt. Ltd.",
      companylogo: require("./assets/images/teamcodeaegis_logo.jpeg"),
      date: "Dec 2024 – July 2025",
      desc: "Worked as a MERN Stack Intern for 8 months, developing full-stack web applications.",
      descBullets: [
        "Developed scalable web applications using React.js, Node.js, Express.js, and MongoDB",
        "Implemented authentication & authorization using JWT and cookie-based login",
        "Worked on REST APIs integration and state management using Redux Toolkit",
        "Built and optimized responsive UI with TailwindCSS and React Router",
        "Collaborated with senior developers on real-world projects and agile workflows"
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "APPLICATIONS I HAVE BUILT AND HOSTED",
  projects: [
    {
      image: require("./assets/images/youtubelogo.jpg"),
      projectName: "YouTube Clone",
      projectDesc:
        "A YouTube-style video streaming platform built using React, Redux, and YouTube API integration. Features include video playback, comments, search, and real-time data fetching.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/singhaluttam1/youtube-clone" },
        { name: "Live Demo", url: "https://youtube-clone-two-blond.vercel.app/" }
      ]
    },
    {
      image: require("./assets/images/tinderLogo.png"),
      projectName: "Tinder Clone (DevTinder)",
      projectDesc:
        "A full-stack MERN application with features like profile management, connection requests, filtered feed, backend pagination, and JWT authentication.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/singhaluttam1/Devtinder" },
        { name: "Live Demo", url: "http://16.170.250.65/login" }
      ]
    },
    {
      image: require("./assets/images/netflixLogo.jpg"),
      projectName: "Netflix-GPT",
      projectDesc:
      "Fully responsive Netflix-style app with movie browsing, trailer playback, and category filtering using React, Redux Toolkit, TailwindCSS, and TMDb API — enhanced with ChatGPT to recommend movies based on your mood.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/singhaluttam1/Netflix-Gpt" },
        { name: "Live Demo", url: "" }
      ]
    },
    {
      image: require("./assets/images/swiggyLogo.png"),
      projectName: "Swiggy Clone",
      projectDesc:
      "Full-stack food delivery application built with React and Redux for state management, featuring cart functionality, a checkout page, and Razorpay payment gateway. Deployed on Vercel for frontend",
      footerLink: [
        { name: "GitHub", url: "https://github.com/singhaluttam1/Swiggy-Clone" },
        { name: "Live Demo", url: "https://swiggy-clone-henna-omega.vercel.app" }
      ]
    },
    {
      image: require("./assets/images/razorpayLogo.webp"),
      projectName: "Payment Gateway Integration",
      projectDesc:
        "Implemented Razorpay Payment Gateway in a React + Node.js project with secure backend integration and hosted it on AWS for production deployment.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/singhaluttam1" },
        { name: "Live Demo", url: "http://16.170.250.65/premium" }
      ]
    },
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Uttampasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Uttampasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7248868055",
  email_address: "Singhaluttam1@gmail.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  contactInfo,
  isHireable,
  resumeSection
};
