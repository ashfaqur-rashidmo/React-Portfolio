import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import image1 from '../../assets/Images/Real_Estate2.png'
import image2 from '../../assets/Images/Facebook.png'
import image3 from '../../assets/Images/Travel.png'
import image4 from '../../assets/Images/Instagram.png'
import image5 from '../../assets/Images/Spotify.png'
import image6 from '../../assets/Images/CodeX.png'

const infosys = '/public/Icons/Infosys (1).png'

const Info = {
    name: "MD.Ashfaqur Rashid",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}

const ProjectInfo = [
    {
        title: "Real estate Tailwind",
        desc: `Real Estate Landing Page

This is a modern, responsive real estate landing page built using HTML and Tailwind CSS, designed to deliver a clean and professional user interface.

The page features a simple navigation bar with sections like Home, About, Property, and Contact, along with a prominent CTA button.

A beautifully styled hero section invites users to find their dream home, supported by smooth typography and clean layout spacing.

The design includes a property image carousel with left-right navigation and a bold button to guide users further.

Icons used in the design are sourced from Flaticon, adding a modern and visually appealing touch to the UI.

Perfect for showcasing properties or building a frontend prototype for real estate platforms.`,
        image: image1,
        live: true,
        technologies: ["HTML", "Tailwind", "CSS", "Heroicons", "HeadlessUI"],
        link: "https://property-html.netlify.app/",
        github: "https://github.com/ashfaqur-rashidmo"
    },
    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: image2,
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/ashfaqur-rashidmo",
        github: "https://github.com/ashfaqur-rashidmo"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: image3,
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/ashfaqur-rashidmo",
        github: "https://github.com/ashfaqur-rashidmo"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: image4,
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/ashfaqur-rashidmo",
        github: "https://github.com/ashfaqur-rashidmo"
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: image5,
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/ashfaqur-rashidmo",
        github: "https://github.com/ashfaqur-rashidmo"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image:  image6,
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://github.com/ashfaqur-rashidmo",
        github: "https://github.com/ashfaqur-rashidmo"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/ashfaqur-rashidmo", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/ashfaqur-rashid-77155a251/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/alternative_satisfied/", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@ashfaqurrashid8144", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/Ashfaq08/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Specialist Programmer",
        company: "Infosys",
        imageCompany:infosys,
        date: "Oct 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["SpringBoot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "System Engineer",
        company: "Infosys",
        imageCompany:infosys,
        date: "Nov 2022 - Sep 2023",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };