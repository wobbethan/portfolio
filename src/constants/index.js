import {

    javascript,
    typescript,
    html,
    css,
    reactjs,

    nodejs,

    threejs,
  } from "../assets";
  import threeBand from "../assets/threeband.gif"
  import golang from "../assets/golang.png"
  import cpp from "../assets/cpp.png"
  import angular from "../assets/angular.png"
  import sql from "../assets/sql.png"
  import working from "../assets/working.gif"
  import heattrack from "../assets/heattrack.gif"
  import dung from "../assets/dung.gif"
  import website from "../assets/website.gif"
  import chris from "../assets/chris.png"
  import evan from "../assets/evanweb.png"
  import avalan from "../assets/avalan.gif"
  import reece from "../assets/reece.png"
  import florida from "../assets/florida.gif"
  import job from "../assets/job.gif"
  import grad from "../assets/grad.gif"
  import numThree from "../assets/numThree.gif"
  import misc from "../assets/misc.png"
  import club from "../assets/ufLogo.png"
  import threefive from "../assets/flcirc.png"
  import postman from "../assets/postman.png"

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
      icon: florida,
    },
    {
      title: "3rd year CompSci Student",
      icon: numThree,
    },
    {
      title: "May 2024 Expected Graduation",
      icon: grad,
    },
    {
      title: "Seeking Employment/Internships",
      icon: job,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "postman",
      icon: postman,
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
      icon: threefive,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - Aug 2023",
      points: [
        "Created proprietary software to keep track of shipping information and assist in company scheduling, included import/export counts as well as real time weather radar",
        "Developing and maintaining company property and other related technologies.",
        "Company liaison for larger tech companies and service providers",
        "Assisted in other departments such as accounting, production, and customer service handling day to day activities such as customer calls, scheduling product pickups, and general AR/AP",
      ],
    },
    {
      title: "Guitar Instructor",
      company_name: "UF Gator for Music club",
      icon: club,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Responsible for instruction and mentoring of students while they learn to play the guitar",
        "Students start with no experience then perform in end of semester recital ",
        "Instruction includes one on one style lesson formats with prepared worksheet material created by me"
      ],
    },
    {
      title: "Miscellaneous Experiences",
      company_name: "Work experience outside of degree",
      icon: misc,
      iconBg: "#383E56",
      date: "January 2018 - May 2020",
      points: [
        "Digital media volunteer through multiple south Florida churches",
        "Country club camera operator",
        "Delivery driver through Doordash",
        
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Ethan is great to work with, he is always willing to put in the extra work whenever necessary, he's been invaluable to our project [Ga1ors].",
      name: "Reece McDonald",
      designation: "Computer Science Student",
      company: "University of Florida",
      image: reece,
    },
    {
      testimonial:
        "Ethan is good to work with since he is detail oriented and wants to get things done.",
      name: "Christian Bello",
      designation: "Computer Science Student",
      company: "University of Florida",
      image: chris,
    },
    {
      testimonial:
        "Ethan is a really creative problem solver, he's able to come up with alot of various methods to complete the task at hand.",
      name: "Evan Carey",
      designation: "Computer Science Student",
      company: "University of Florida",
      image: evan,
    },
  ];
  
  const projects = [
    {
      name: "Miami Heat Game Tracker",
      description:
        "Fictional database of 100,000 randomly generated Miami Heat Games. Purpose of project was to compare insertion/retrieval efficiency of RB-Trees and B-Trees.",
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
        "Controls the low, mid, and high frequencies of audio. Program is implemented as a vst3 plugin and is compatible with professional digital audio workstations",
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
        "This game is set in a dungeon created with the Unity engine where the user is timed on how long it takes for them to find 5 hidden scrolls throughout the dungeon.",
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
        "Generates textured terrain from perlin noise input simulating mountains with snow peaks and valleys with lakes. Upon button click, an avalanche occurs from the mountain peaks slowly coating the rest of the terrain in snow.",
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
      image: avalan,
      source_code_link: "https://github.com/wobbethan/TinyAvalanche",
    },
    {
      name: "Portfolio Website",
      description:
        "This website itself is one of my projects! Using internet tutorials and documentation I was able to create my very own porfolio website with React and ThreeJS",
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