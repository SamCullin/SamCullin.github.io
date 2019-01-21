let config = {};
var makeExperience = function(name,time,possition, link,details){
  return {
    name: name,
    time: time,
    possition: possition,
    link: link,
    details: details
  }
}
config.Profile = {
  name: "Sam Cullin",
  age: "22",
  location: "Melbourne, Australia, 3127",
  //about: `A passionate 4th-year Software Engineering student with a drive to learn and create. Outside of University, I have started a consulting company and worked on several personaly driven projects. I have gained experency in app and server development. a created a multi-user development environment for my consulting startup Findas. Through my startup I have learnt   Through these projects, I have learned languages such as Python, Swift, and NodeJS, and gained considerable experience with Agile development, Pandas, NumPy, Jupyter, and Docker.`,
  about:"A passionate 4th-year Software Engineering student with a drive to innovate and create. Outside of University, I have started a software development company and delivered several projects, which has given me real-world experience in software development,  working with clients and delivering business outcomes.",
  img: "",
  keyskills: [
  'Collaboration',
  'Mentoring',
  'Full Stack',
  'Database Design',
  'Rest APIs',
  'Cross-Platform',
  'Agile',
  'Big Data',
  'Python',
  'NodeJS',
  'Hive',
  'React-Native',
  ]
}


config.Education = [
  makeExperience("Camberwell Grammar", "2010-2015", "High School", null,
  `I completed my VCE, enjoying Science, Math, and Arts. In my final years of high school, my passion for technology and software began to unfold. I completed a Cisco CCNA course during year 11, where I was introduced to programming.`),
  makeExperience("Software Engineering", "2015-Now", "RMIT University",null,
  `Currently, I am undertaking my third year of Software Engineering at RMIT, where my education includes areas of  PHP, C, and Java, but also in SQL, MVC, UML and more. Furthermore, I have studied the importance of Object Oriented Design, code reusability and user experience and design. Projects were completed in groups, introducing co-operation and group-work into my experience.`)
]

config.Contacts = [
  {
    icon: "./view/images/email.png",
    text: "Email",
    print: "Sam@miplace.com",
    link: "mailto:sam@miplace.com?subject=SamCullin.Github.io&body=Hey Sam!! %0A%0Aname:%0Aemail:%0Anumber:%0Acompany:%0Adetails:%0A%0AKind Regards {{name}}%0A%0A"
  },
  {
    icon: "./view/images/linkedin.png",
    text: "Linked In",
    link: "https://www.linkedin.com/in/sam-cullin/",
    print: "www.linkedin.com/in/sam-cullin/"
  },
  {
    icon: "./view/images/github.png",
    text: "GitHub",
    link: "https://www.github.com/SamCullin",
    print: "www.github.com/SamCullin"
  },
  {
    icon: "./view/images/twitter.png",
    text: "Twitter",
    link: "https://www.twitter.com/Sam_Cullin",
    print: "www.twitter.com/Sam_Cullin"
  },
  {
    icon: "./view/images/web.png",
    text: "WebSite",
    link: "https://samcullin.github.io",
    print: "samcullin.github.io"
  },
  {
    icon: "./view/images/stack-overflow.png",
    text: "StackOverFlow",
    link: "https://stackoverflow.com/users/8109057/mullin",
    print: "stackoverflow.com/users/8109057/mullin"
  },

]
config.Projects = [
  makeExperience("Rebate Engine","", "SQL - Python - Hive - Scala", null,
  `During my time at Telstra, I worked on the Rebate Recommendation Engine which was a big data project that queried data from the big data platform (BUD) and aggregates it into a small note that is pushed to the front of house teams. The note includes information about why the customer is or is not approved for a rebate. We also converted our outputs to JSON formats so that they could be consumed by other projects. The Telstra 24*7 app now consumes our outputs to help customer self serve rebates.`),
  makeExperience("Automated Systems ","","Pandas - Python - TALib - MongoDB - WebSockets",null,
  `In this project, I have created a bot to monitor cryptocurrency exchanges. I have applied a layered design with plug-in microservices. I have learned about managing and analyzing large amounts of data, backtesting strategies, collaborative coding, and rapid development.`),
  makeExperience("Custom View Controllers","", "IOS - Swift", null,
  `This project was a result of starting the company Findas. In the creation of the IOS app, the built-in view controllers did not provide the amount of customization needed to build the user interface, so I created a set of custom view controllers. The challenge was getting the same performance as the Apple IOS Controllers but after memory and CPU optimizations were made I was able to outperform the provided Controllers`),
  makeExperience("Continous Deployment","", "Docker - Jupyter - cloud9 - MongoDB", null,
  `For my most recent projects, I needed an environment suited for rapid testing and development. I built a containerized development environment using Docker, Jupyter, MongoDB, and a self-hosted Cloud 9 IDE.  With this development environment, I am to collaborate more effectively, manage more projects, and release to production quicker.`),
  makeExperience("Data Visualiser","", "Jupyter - ipywidgets - bqplot - Rest APIs", null,
  `In working with large amounts of financial data I needed a way to visualize the relationship between data sets. Using Matplotlib, bqplot, ipywidgets, and Dash I developed a Pandas dataframe visualization tool with a simple user interface. This allowed me to compare datasets visually and draw conclusions quickly.`)
  
]

config.ProjectCells = [
  {
    name: "Test",
    link: "github.com",
    img: "./view/images/FindasLogo.png"
  },
  {
    name: "Test",
    link: "github.com",
    img: "./view/images/FindasLogo.png"
  },
  {
    name: "Test",
    link: "github.com",
    img: "./view/images/FindasLogo.png"
  },
  {
    name: "Test",
    link: "github.com",
    img: "./view/images/FindasLogo.png"
  }
]
config.WorkExperience = [
  makeExperience("Findas Pty Ltd.","2016-Now","Founder",null,
  "This was a personal project I founded with a group of like-minded people. Findas is an App to help travelers find places of interest. I taught myself Swift, NodeJS, Firebase, and the Google cloud platform. I led architecture design and tutored others to lift team capability. This project introduced me to working in a long-term team and reaching parallel goals, as well as creating more comprehensive code. Though the app is not yet released, it is in the final stages and we are looking at a release mid-2018"),
  makeExperience("Telstra","2018-Now","Data Analyst",null,
  `From my experience at Telstra, I learnt about the world of support tickets, project budgets and cross-team collaboration. I worked on several project primary writing bash, python and SQL. I automated tasks and wrote queries to search Telstra's big data lakes.`),
  makeExperience("DieCut","2014-2017","General Hand",null,
  "DieCut Engineering is a small family-owned steel profile cutting business, which I have been casually employed at as general hand for two years. My time at DieCut has taught me about business management, with jobs such as managing employees and automation. Given it is a family owned business, I have been able to move around and gain experience in a number of different areas within the company. I now have experience in areas that include, customer service, workflow optimization, web development, deliveries and working on the factory floor.")
]

config.Skills = {
  "Machine Learning": 5,
  "IOS Development": 9,
  "Backend Development": 8,
  "Docker": 8,
  "Web Development": 7,
  "Database Design": 6,
  "Agile Development": 7,
  "Rest APIs": 8,
  "GraphQL": 4,
  "Data Science": 4,
  "Data Visualisation": 5,
  "Cisco CNA": 7,
  "Singleton Pattern": 8,
  "MVC Pattern": 7
}
config.Languages = {
  "C":8,
  "Python": 9,
  "Swift":9,
  "PHP": 7,
  "CSS": 6,
  "Angular": 5,
  "Ionic": 4,
  "NodeJS" : 8,
  "Java": 8,
  "JavaScript": 8,
  "SQL": 8,
  "Pandas": 7,
  "Bootstrap": 7,
  "JQuery": 5,
  "Dash": 6,
  "NumPy": 7
}
//last recored 
config.Tools = {
  "Mac (7-Years)": 10,
  "VS Code (3-Year)": 7,
  "Eclipse (3-Years)": 6,
  "Linux (4-Years)": 6,
  "Windows (10+Years)": 10,
  "Sublime Text (4-Years)": 7,
  "Putty (5-Years)": 7,
  "Firebase (2-Year)": 8,
  "XCode (2-Year)": 8,
  "Crashlytics (1-Year)": 5,
  "AdMob (1-year)": 6,
  "GoogleCloud (1-Year)": 5,
  "Ethereum (6-months)": 4
}

config.particle = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 1,
          "height": 1
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": .6
          }
        },
        "bubble": {
          "distance": 1000,
          "size": 40,
          "duration": 1,
          "opacity": 8,
          "speed": 7
        },
        "repulse": {
          "distance": 220
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 30
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "./images/background.jpg",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }