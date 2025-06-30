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
  username: "Divya Vispute",
  title: "Hi all, I'm Divya",
  subTitle: emoji(
    "I'm a frontend developer with 5+ years of experience in HTML, CSS, JavaScript, and React. I enjoy creating user-friendly, responsive interfaces and bringing designs to life."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/divyavispute86",
  linkedin: "https://linkedin.com/in/divya-vispute-785a49168",
  gmail: "divyavispute86@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Passionate Frontend Developer Exploring Every Tech Stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end user interfaces for web and mobile applications."
    ),
    emoji(
      "⚡ Create business-related articles and pages using CMS/ECM as per client requirements."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "devicon-nextjs-original colored"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "devicon-tailwindcss-plain"
    }


  ],
  display: true // Set false to hide this section, defaults to true
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
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Custom Software Development Senior Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.jpeg"),
      date: "Nov 2022 - present",
      descBullets: [
        "Developed dynamic and responsive user interfaces using React and Tailwind CSS, ensuring pixel-perfect design implementation and cross-browser compatibility.",
        "Streamlined front-end architecture by modularizing components and leveraging Tailwind utility classes, leading to faster development cycles and improved code maintainability."
      ]
    },
    {
      role: "Senior Analyst",
      company: "eClerx",
      companylogo: require("./assets/images/eClerxLogo.jpeg"),
      date: "Nov 2022 – Present",
      descBullets: [
        "Optimized HTML, CSS, and React components to increase web page performance by 100%, resulting in improved user experience and increased website traffic.",
        "Experienced in analyzing and transforming business requirements into functional and non-functional flows.",
        "Maintained processes in Kanban and carried out quality assurance tests for pages and layouts."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Adapty Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/adaptyLogo.jpeg"),
      date: "Jan 2020 – Nov 2022",
      descBullets: [
        "Developed the front-end and user interface and was responsible for designing page layouts.",
        "Created reusable React components and managed application state with Redux.",
        "Created business-related pages using CMS for complex design projects for corporate clients.",
        "Maintained processes in JIRA and carried out quality assurance tests for pages and layouts."
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

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open to all.",
  number: "+92-8652550796",
  email_address: "divyavispute86@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
  isHireable,
  resumeSection
};
