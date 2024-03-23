import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  
    contact,
    css,
    
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,

    nextjs,
    nodejs,
    pricewise,
    react,
    
    tailwindcss,
   
    typescript,
    

} from "../assets/icons";
import java from '../assets/icons/java.png';
import aws from '../assets/icons/aws.png';
import firebase from '../assets/icons/firebase.png';
import sql from '../assets/icons/sql.png';
import python from '../assets/icons/python.png';
import bottle from '../assets/icons/bottle.png';
import blockchain from '../assets/icons/blockchain.png';
import web3 from '../assets/icons/web3.png';
import DynamoDB from '../assets/icons/DynamoDB.png';
import school from '../assets/icons/school.png';
import college from '../assets/icons/college.png';
import university from '../assets/icons/university.png';
import snow_clear from "../assets/images/snow_clear.png";
import porfolio from "../assets/images/porfolio.png";
import wallet from "../assets/images/wallet.png";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

   

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },

    {
        imageUrl: DynamoDB,
        name: "DynamoDB",
        type: "Database",
    },
    
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },

    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "language",
    },
    {
        imageUrl: bottle,
        name: "Bottle",
        type: "Backend",
    },
    { 
        imageUrl: blockchain,
        name: "Blockchain",
        type: "Technology",
    },
    {
        imageUrl: web3,
        name: "Web3",
        type: "Technology",
    }


];

export const experiences = [
    {
        title: "St. Josephs Public School",
        company_name: "Junior and High School",
        icon: school,
        iconBg: "#accbe1",
        date: "April 2006 - April 2019",
        points: [
            "Completed my schooling from St. Josephs Public School, Habsiguda, Hyderabad.",
            "Participated in various sports and science events.",
            "Was a part of the school's science olympiad and badminton team.",
            "Graduated with a 87% from board of ICSE"
        ],
    },

    {
        title: "Keshav Smarak Junior College",
        company_name: "Junior College",
        icon: college,
        iconBg: "#accbe1",
        date: "June 2019 - April 2021",
        points: [
            "Completed my Junior College from Keshav Smarak Junior College, Narayanguda, Hyderabad.",
            "Graduated with a 82.7% from board of Intermediate.",
        ],
    },
    {
        title: "Memorial University of Newfoundland",
        company_name: "Bachelor of Computer Science",
        icon: university,
        iconBg: "#accbe1",
        date: "September 2021 - Present",
        points: [
            "Currently pursuing my Bachelor's in Computer Science from Memorial University of Newfoundland.",
            "Currently in my 3rd year of the course.",
        ],
    },
    {
        title: "Data Quality Analyst",
        company_name: "DIAG LABS",
        icon: university,
        iconBg: "#accbe1",
        date: "May 2022 - September 2022",
        points: [
           "Worked under Dr. Karteek Popuri and his team of graduate students on performing data profiling and data cleansing for three-dimensional (3D) medical images generated by diverse groups of collaborators (scientists and clinicians).",
           "Built ground-truth data sets for training machine-learning algorithms.",
           "Identified and resolved data quality issues in the 3D medical images to improve the accuracy of the machine-learning algorithms.",
        ],
    },
    {
        title: "Jr. Developer(Full Stack)",
        company_name: "",
        iconBg: "#accbe1",
        date: "Feb 2023 - Present",
        points: [
           "I am helping Zap in building a delivery algorithm for their grocery delivery platform.",
           "Zap is grocery delivery startup based in Hyderabad(INDIA) that connects local Kirana Stores to customers. With expected delivery time as little as 10 mins.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ABHINAVVV13',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhinav-reddy-putta-0b3557207/',
    }
];

export const projects = [
    {
        title: "Optimizing Snow Clearing for the City of St. John's",
        iconBg: "#accbe1",
        date: "Project 1",
        points: [
          "My enthusiasm for graph theory and algorithms led me to work on this project.",
          "This project aims to optimize the snow clearing process for the most efficient rountes in St. John's ",
          "This algorithm is based on the solution to the Chinese Postman Problem.",
          "It collects map data from OpenStreetMap and uses NetworkX and plotly to calculate and display the solution.",
          "Libraries used: NetworkX, Matplotlib, Pandas, NumPy, osmnx, plotly",
        ],
        link: 'https://github.com/ABHINAVVV13/Optimizing-Snow-Clearing-St.Johns-NL',
        imagi: snow_clear,
    },
    {
        title: "3D Portfolio",
        iconBg: "#accbe1",
        date: "Project 2",
        points: [
         "Ever since I was a kid, I've been fascinated by 3D models and animations. Back then I always used to draw animals and worlds from my imagination behind my notebooks.",
         "So I have decided to make a 3D portfolio to showcase my work and projects as a tribute to my childhood and ofcourse OnePiece.",

         "This project is built using React, Three.js, and React-Three-Fiber.",
         "IT IS GRAPHIC INTENSIVE, SO PLEASE WAIT FOR THE PAGE TO LOAD.",
        ],
        link: 'https://abhinavreddyputta.com',
        imagi: porfolio,
    },
    {
        title: "Solona Blockchain Wallet Scanner",
        iconBg: "#accbe1",
        date: "Project 3",
        points: [
            "This project is built using React, Tailwind CSS, and Solona API.",
            "It allows users to enter their Solona wallet address and fetch the token details.",
            "It displays the token name, address, and balance for each token in the wallet.",

            "I made this project quickly track the token details of a wallet address in Solona Blockchain. As other websites UI was not user friendly, too cluttered with unnecessary information and had too many ads.",

            "API's used: Solona API, Shyft API",
         
        ],
        link: 'https://abhinavreddyputta.com',
        imagi: wallet,
    },
    
];