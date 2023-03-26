import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import threeBand from "../assets/threeband.gif"
  import golang from "../assets/golang.png"
  import cpp from "../assets/cpp.png"
  import angular from "../assets/angular.png"
  import sql from "../assets/sql.png"
  import uf from "../assets/company/UF.png"
  import fl from "../assets/flstucco.png"
  import cal from "../assets/cal.png"
  import three from "../assets/three.png"
  import hire from "../assets/hire.png"
  import test from "../assets/test.gif"
  import working from "../assets/working.gif"
  import heattrack from "../assets/heattrack.gif"
  import dung from "../assets/dung.gif"
  import website from "../assets/website.gif"

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Undergraduate Student",
      icon: web,
    },
    {
      title: "3rd year CompSci Student",
      icon: mobile,
    },
    {
      title: "May 2024 Expected Graduation",
      icon: backend,
    },
    {
      title: "Seeking Employment/Internships",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Golang",
      icon: golang,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    
    {
      title: "IT Intern",
      company_name: "Florida Stucco | Pool Plaster Manufacturer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - Aug 2023",
      points: [
        "Created properitary software to keep track of shipping information and assit in company scheduling, included import/export counts as well as real time weather radar",
        "Developing and maintaining company property and other related technologies.",
        "Company liason for larger tech companies and service providers",
        "Assisted in other departments such as accounting, production, and customer service handling day to day activites such as customer calls, scheduling product pickups, and general AR/AP",
      ],
    },
    {
      title: "Guitar Instructor",
      company_name: "UF Gator for Music club",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Responsible for instruction and mentoring of students",
        "Students start with no experience then perform in end of semester recital ",
      ],
    },
    {
      title: "Miscellaneous Experiences",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2018 - May 2020",
      points: [
        "Digital media volunteer through multiple south Florida churches",
        "Theater Camera Operator",
        "Delivery Driver",
        
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Miami Heat Game Tracker",
      description:
        "Fictional Database of 100,000 randomly generated Miami Heat Games. Purpose of project was to compare efficiency of RB-Trees with B-Tree",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "green-text-gradient",
        },
        {
          name: "Team Project",
          color: "pink-text-gradient",
        },

      ],
      image: heattrack,
      source_code_link: "https://github.com/wobbethan/MiamiHeatGameTracker",
    },
    {
      name: "3-Band Equalizer",
      description:
        "Controls the low, mid, and high frequencies of audio , program is implemented as a vst3 plugin and is compatible with professional digital audio workstations",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "green-text-gradient",
        },
        {
          name: "Projucer Framework",
          color: "pink-text-gradient",
        },
      ],
      image: threeBand,
      source_code_link: "https://github.com/wobbethan/3BandEQ",
    },
    {
      name: "Dungeon Speed-Runner",
      description:
        "this game is set in a dungeon created with the Unity engine where the user is timed on how long it takes for them to find 5 hidden scrolls throughout the dungeon.",
      tags: [
        {
          name: "Unity Engine",
          color: "blue-text-gradient",
        },
        {
          name: "Entertainment Software",
          color: "green-text-gradient",
        },

      ],
      image: dung,
      source_code_link: "https://github.com/wobbethan/dungeon-speedrunner",
    },
    {
      name: "Tiny Avalanche",
      description:
        "Generates textured terrain from Perlin noise input simulating mountains with snow peaks and valleys with lakes. Upon button click, an avalanche occurs from the mountain peaks slowly coating the rest of the terrain in snow.",
      tags: [
        {
          name: "Processing",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/wobbethan/TinyAvalanche",
    },
    {
      name: "Portfolio Website",
      description:
        "This website itself is one of my projects! Using internet tutorials and documentation I was able to create my very own porfolio website",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },

      ],
      image: website,
      source_code_link: "https://github.com/wobbethan/portfolio",
    },

    {
      name: "Ga1ors",
      description:
        "Ga1ors is a community based chat forum for the University of Florida. Everyday, the forum can contain X amount of posts, where X is equivalent to 1% of the student population. At the end of each day, the forum is wiped clean",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Golang",
          color: "green-text-gradient",
        },
       
        {
          name: "Team Project (Backend)",
          color: "pink-text-gradient",
        },

        {
          name: "MySQL",
          color: "orange-text-gradient",
        },

      ],
      image: working,
      source_code_link: "https://github.com/Reece-McDonald/Software-Engineering",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };