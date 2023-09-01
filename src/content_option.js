const logotext = "Welcome to my portfolio";
const meta = {
    title: "Shaik Fareed",
    description: "I'm Shaik Fareed, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm Shaik Fareed",
    animated: {
        first: "Lead Full Stack Developer",
        second: "Top Rated Freelancer on Upwork",
        third: "To be data scientist.....",
        // fourth: "Programmer",
        // fifth: "Malware Developer",
        // sixth: "Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Lead Full Stack developer with 10+ years experience, Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
    your_img_url: "https://i.ibb.co/wRjcnGL/me.jpg",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Well About me, Embarking on a professional journey of more than 10 years as a seasoned Full Stack developer, I've had the incredible opportunity to immerse myself in an exciting array of domains. From the intricate realms of Banking and Insurance to the dynamic landscapes of Background Verification, Oil and Gas, Municipality, Education, and Transportation, each experience has enriched my skill set. Along the way, I've embraced collaborative methodologies such as Agile, TDD, and Pair Programming, further elevating the depth and breadth of my expertise.",
};
const worktimeline = [{
        jobtitle: "Technical Lead",
        where: "Xische - TAMM (ADDA), Abu Dhabi",
        summary: [
            "TAMM is an application that is helping people find Abu Dhabi government services and information all in one single place, like applying for licenses, paying bills and much more.",
            "Currently Playing a lead role in developing the app right from its inception till its design, development, and deployment.",
            "This app is used on day to day basis by around 100K users on a day-to-day basis",
        ],
        keyAchievements: "Helped in increasing the performance of the app by 85%,which includes the page load and data load etc.",
        skillsUsed: `NodeJs, React, Docker, HTML, JavaScript, Gitlab, REST services, !!NestJs!!, Nginx, Kong gateway, !!GraphQL!!, !!Payment Integration!! etc.`,
        date: "Feb, 2022 - Aug, 2023",
    },
    {
        jobtitle: "Senior Full Stack Developer",
        where: "Saal.ai, Abu Dhabi",
        summary: [
            "The projects in which I have worked here are Curio APP and ADMIRE",
            "Worked as a Full Stack developer in developing, and designing variousproducts and service apps for various domains like education, oil, and gas, and various government sectors.",
            "Involved in all the architectural decisions during the process",
        ],
        keyAchievements: "Built the data pipeline ( using Nifi and Presto) for AbuDhabi Municipality that generated a revenue of around 1.5Million AED for the company.",
        skillsUsed: `NodeJs, React, Docker, Python, HTML, Javascript, Jenkins, Git, REST services, !!Flutter!!, !!React Native!!,  Nginx, Kong gateway etc`,
        date: "Jul, 2018 - Feb, 2022",
    },
    {
        jobtitle: "Senior Software Engineer",
        where: "General Electric, Bengaluru",
        date: "Mar, 2017 - Mar, 2018",
        summary: [
            "The project is a product of GE Transportation Express Yard, which is used byits customers to manage their Rail Car repair and billing process. CRB is a web app which is used by Rail Car owners and our team was developing mobile version of the app.",
            "Worked as a Full Stack developer in developing, and designing the app till itsdeployment.",
        ],
        keyAchievements: 'The app provided a seamless experience to the client andhelped the end user to do billing more effectively.',
        skillsUsed: `Java 8, Spring boot, Ionic 3, Akana API Gateway, PlSql, WebServices(REST), JUnit, Karma, Jasmine, Predix cloud.`,
    },
    {
        jobtitle: "Senior Software Engineer",
        where: "Indecomm Global Services, Bengaluru",
        summary: [
            "The project is product of Accurate Background which is a employmentbackground verification firm. Which receives orders from client and perform background check of their candidate and posts back the result.",
            "Worked as a Full Stack developer in developing, and designing the app till itsdeployment."
        ],
        keyAchievements: 'Helped the product to move into the latest tech stack (like Rest Services and Microservices), which indeed enhanced the performance of the project and as well as its maintainance.',
        skillsUsed: `Java, J2EE, Spring boot, Maven, Hibernate, HTML, JSP, JQuery, Mongo , Web Services(REST and SOAP), JUnit, RabbitMQ, Mockito,
        Rest-assured, Selenium, etc.`,
        date: "Oct, 2015 - Mar, 2017",
    },
    {
        jobtitle: "Software Engineer",
        where: "Mindtree Ltd, Bengaluru",
        summary: [
            "The Project is Loan Lending Web application, which provides Loan initiation and subsequent workflow tracking features for Users in the bank.",
            "Worked as a Full Stack developer in developing, and designing the app till its deployment.",
            "This was one of the first products that was developed by the company which later was used by big banks like SVB (Silicon Valley Bank), ING Vysya and Kotak Bank.",
        ],
        keyAchievements: 'Was awarded as the best developer and Mindtree pillar award.',
        skillsUsed: `Java, J2EE, Spring, Maven, JPA,HTML,JSP, JQuery, Mongo, BPM, Web Services(REST).`,
        date: "Sep, 2013 - Oct, 2015",
    },
];

const skills = [
    {
        name: "Javascript",
        skillIcon: "logos:javascript",
    },
    {
        name: "Typescript",
        skillIcon: "devicon:typescript",
    },
    {
        name: "Node.js",
        skillIcon: "logos:nodejs",
    },
    {
        name: "Nest.js",
        skillIcon: "logos:nestjs",
    },
    {
        name: 'Express.js',
        skillIcon: "skill-icons:expressjs-light"
    },
    {
        name: "React JS",
        skillIcon: "vscode-icons:file-type-reactjs"
    },
    {
        name: "React Native",
        skillIcon: "tabler:brand-react-native",
        color: "green"
    },
    {
        name: "Java and Related Frameworks",
        skillIcon: "logos:java",
    },
    {
        name: "Python",
        skillIcon: "logos:python"
    },
    {
        name: "Flutter",
        skillIcon: "logos:flutter"
    },
    {
        name: "Docker",
        skillIcon: "logos:docker-icon"
    },
    {
        name: "MySql",
        skillIcon: "logos:mysql"
    },
    {
        name: "Oracle Db",
        skillIcon: "logos:oracle"
    },
    {
        name: "Postgres",
        skillIcon: "logos:postgresql",
    },
    {
        name: "Mongodb",
        skillIcon: "devicon-plain:mongodb-wordmark",
        color: "green"
    },
    {
        name: "REST",
        skillIcon: "dashicons:rest-api"
    },
    {
        name: "Microservices",
        skillIcon: "carbon:microservices-1"
    },
    {
        name: "AWS",
        skillIcon: "skill-icons:aws-light"
    },
    {
        name: "Git",
        skillIcon: "devicon:git"
    },
    {
        name: "Jenkins",
        skillIcon: "logos:jenkins"
    },
    {
        name: "Gitlab",
        skillIcon: "logos:gitlab"
    },
    {
        name: "Payment Integration (FAB Bank)",
        skillIcon: "simple-icons:contactlesspayment"
    },
    {
        name: "GraphQL",
        skillIcon: "logos:graphql"
    },
    {
        name: "API Gateway",
        skillIcon: "carbon:gateway-api"
    },
    {
        name: "Jest",
        skillIcon: "logos:jest"
    },
    {
        name: "Kafka",
        skillIcon: "simple-icons:apachekafka",
        color: 'red'
    },
];

const dataportfolio = [{
        img: "tamm",
        description: "Tamm - A unified system helping you find Abu Dhabi government services and information at one place",
        link: "https://tamm.abudhabi",
    },
    {
        img: "curio",
        description: "Curio is your AI-powered learning companion for Science, Mathematics, and Arabic!",
        link: "http://curiolearn.com",
    },
    {
        img: "digiXT",
        description: "Connecting systems, processing data, and delivering business use-cases' with ease to maximise value.",
        link: "https://saal.ai/digixt",
    },
    {
        img: "accurate",
        description: "Accurate Background is a background verification application",
        link: "https://www.accurate.com/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "shaikfareed46@gmail.com",
    phoneNumber: "+971545778655",
    
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_059cb6u",
    YOUR_TEMPLATE_ID: "template_xtf416o",
    YOUR_USER_ID: "ZbtETOnexbNPnGzPx",
};

const socialprofils = {
    github: "https://github.com/shaikfareed46",
    linkedin: "https://www.linkedin.com/in/shaik-fareed-752b8566/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};