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
  age: "21",
  location: "3127, Melbourne, Australia",
  about: `A passionate 3rd-year software engineering student with a drive to learn and create. Always looking for ways to improve and learn. I am highly driven and ambitious, which I have demonstrated through a number of personally motivated projects. I have more experience than the average graduate, having brought a full stack system to market with a small team of like-minded passionate people.`,
  img: ""
}
config.Education = [
  makeExperience("Camberwell Grammar", "2010-2015", "High School", null,
  `I completed my VCE, enjoying science, math and arts. In my final years of highschool, my passion for technology and software began to unfold. I started a CCNA course during year 11, where I was introduced to programing.`),
  makeExperience("Software Engineering", "2015-Now", "RMIT University",null,
  `Currently I am undertaking my third year of Software Engineering at RMIT, where my education  includes areas of  PHP, C and Java, but also in SQL, MVC, UML and more. Furthermore, I have  studied the importance of Object Oriented Design, code reusability and user experience and design. Projects were completed in groups, introducing co-operation and group-work into my experience.`)
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
    link: "https://www.linkedin.com/in/sam-cullin-ba6b70144/",
    print: "https://www.linkedin.com/in/sam-cullin-ba6b70144/"
  },
  {
    icon: "./view/images/github.png",
    text: "GitHub",
    link: "https://www.github.com/SamCullin",
    print: "https://www.github.com/SamCullin"
  },
  {
    icon: "./view/images/twitter.png",
    text: "Twitter",
    link: "https://www.twitter.com/Sam_Cullin",
    print: "https://www.twitter.com/Sam_Cullin"
  },

]
config.Projects = [
  makeExperience("TradeBot","2017","Pandas - Python - TALib - MongoDB - WebSockets",null,
  `In this project, I am creating a bot to monitor and trade multiple cryptocurrency exchanges. In this project I am applying a layered design with plug-in trade algorithms and exchanges. From this project I have learnt about managing and analysing large amounts of data, backtesting strategies, collaborative coding, and rapid development.`),
    makeExperience("Custom View Controllers","2017", "IOS - Swift", null,
  `This project was a result of starting the company Findas. In the creation of the ios app, the built-in view controllers did not provide the amount of customisation needed to build the user interface designing in ower paper plans, so I created my own. Some of the challenges were getting the same performance in my custom built controllers as the apple ones. After much tweaking,  I was able to get the same performance from mine that Apple provided.`),
  makeExperience("Dev Environment","2018", "Docker - Jupiter - c9 - MongoDB", null,
  `In my most recent projects I knew that I would need an environment suited for rapid testing and development. I built a containerised development environment using Docker, Jupyter, MongoDB, and a self-hosted Cloud 9 IDE.  With this development environment I am to collaborate more effectively, manage more projects, and release to production quicker.`)
  
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
  "This was a personal project I founded with a group of like-minded people. The aim was to develop and release an App to help travellers find particular establishment locations. I taught myself swift, node js, firebase and the Google cloud platform, led architecture design, and tutored others to lift team capability. This project introduced me to working in a long-term team and reaching parallel goals, as well as creating more comprehensive code. Though the app is not yet released, it is in the final stages and we are looking at a release mid 2018."),
  makeExperience("DieCut","2014-2017","General Hand",null,
  "DieCut Engineering is a small family-owned steel profile cutting business, which I have been casually employed at as general hand for two years. My time at DieCut has taught me about business management, with jobs such as  managing employees and automation. Given it is a family owned business, I have been able to move around and gain experience in a number of different areas within the company. I now have experience in areas that include, customer service, workflow optimisation, web development, deliveries and working on the factory floor.")
]

config.Skills = {
  "Maching Learning": 3,
  "IOS Development": 9,
  "Backend Development": 8,
  "Docker": 8,
  "Web Development": 7,
  "Database Design": 6,
  "Agile Development": 7,
  "Rest APIs": 8,
  "GraphQL": 4,
  "Data Science": 3,
  "Information Theroy": 3,
  "Cisco CNA": 6,
  "Singleton Pattern": 8,
  "MVC Pattern": 7
}
config.Languages = {
  "C":8,
  "Python": 8,
  "Swift":9,
  "PHP": 7,
  "CSS": 6,
  "Angular": 5,
  "Ionic": 4,
  "NodeJS" : 8,
  "Java": 8,
  "JavaScript": 8,
  "SQL": 8,
  "pandas": 7,
  "Bootstrap": 7,
  "JQuery": 5
}

config.Tools = {
  "Mac (6-Years)": 10,
  "VS Code (2-Year)": 7,
  "Eclips (2-Years)": 6,
  "Linux (3-Years)": 6,
  "Windows (10+Years)": 10,
  "Adobe Illustrator (3-Years)": 4,
  "Sublime Text (2-Years)": 7,
  "Putty (4-Years)": 7,
  "Firebase (1-Year)": 8,
  "XCode (1-Year)": 8,
  "GCP (6-Months)": 5
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