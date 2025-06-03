import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const image1 = '/public/Images/Real_Estate2.png'
const image2 = '/public/Images/Bakery.png'
const image3 = '/public/Images/career (2).png'
const image4 = '/public/Images/Tour Mama.png'
const image5 = '/public/Images/E-commerce.png'
const image6 = '/public/Images/portfolio.png'
const infosys = '/Icons/Infosys (1).png'

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
        technologies: ["HTML", "Tailwind", "CSS", "Heroicons",],
        link: "https://property-html.netlify.app/",
        github: "https://github.com/ashfaqur-rashidmo/Property_HTML_CSS"
    },
    {
        title: "Bakery Food Menu",
        desc: "A responsive bakery menu built with HTML, CSS, and JavaScript. It fetches product data from an API and displays items dynamically with images, names, prices, and descriptions. Includes category filters and a search feature. Designed for clean UI and smooth user interaction.",
        image: image2,
        live: false,
        technologies: ["HTML", "Tailwind", "API","Javascript", "Tabler-Icons"],
        link: "https://tools-mid-food.vercel.app/",
        github: "https://github.com/ashfaqur-rashidmo/Tools_MID_Food"
        
    },
    {
        title: "The Career Mission 2025",
        desc: "The Career Mission 2025 is a dynamic and responsive web application that serves as a professional portfolio-style platform. While inspired by a Spotify Clone structure, this project highlights modern front-end design techniques using HTML, CSS, and Tabler Icons. The application showcases clean UI elements and interactive features, focusing on a polished user experience. Though not currently live, the project is hosted on GitHub and demonstrates proficiency in layout design, icon integration, and responsive styling. It's an excellent example of foundational web development skills applied in a real-world project setup.",
        image: image3,
        live: false,
        technologies: ["HTML", "CSS", "Tabler-Icons"],
        link: "https://ashfaqur-rashidmo.github.io/Assignment_PH/",
        github: "https://github.com/ashfaqur-rashidmo/Assignment_PH"
    },
    {
        title: "Tour Mama",
        desc: "Tour Mama is a visually engaging web application designed to showcase travel destinations and experiences. Built using HTML, CSS, and curated images, this project emphasizes front-end design and user interaction. It features a clean layout, smooth navigation, and visually appealing sections that highlight various travel spots. While it currently does not include full-stack functionality, Tour Mama serves as a strong demonstration of static web design skills, responsive layouts, and image integration. The project provides a solid foundation for future enhancements such as dynamic content, user accounts, and interactive maps.",
        image: image4,
        live: false,
        technologies: ["HTML", "CSS", "Images"],
        link: "https://tour-mama-ph.vercel.app/",
        github: "https://github.com/ashfaqur-rashidmo/Tour_Mama_PH"
    },
    {
        title: "E-commerce",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: image5,
        live: false,
        technologies: ["React", "Redux", "Tailwind", "Icons","React-Router-Dom"],
        link: "https://github.com/ashfaqur-rashidmo",
        github: "https://github.com/ashfaqur-rashidmo/Food-Delivery"
    },
    {
        title: "Portfolio",
       desc: "This is a modern, fully responsive personal portfolio website built with React and TailwindCSS. It features sections like About Me, Skills, Projects, and Contact, all designed with a clean UI and smooth user experience. The site showcases my development expertise, highlights key projects, and provides links to my social profiles and GitHub. Optimized for all devices, it's a perfect platform for personal branding and job opportunities.",

        image:  image6,
        live: false,
        technologies: ["HTML", "CSS", "Responsive","icons"],
        link: "https://portfolio-assignment-gray.vercel.app/",
        github: "https://github.com/ashfaqur-rashidmo/Portfolio_Assignment"
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
