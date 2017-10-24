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
  about: `
  A passionate graduate with a drive to learn and create. 
  Always looking for places to improve upon and learn.  
  With no lack of persistence and drive. 
  Which I have shown through my own personally motivated projects.
  More experience than the average graduate having brought a full 
  stack system to market with a small team of like minded passionate people.
  `,
  img: ""
}
config.Education = [
  makeExperience("Camberwell Grammar", "2010-2015", "High School", null,
  `
  I graduated highschool, where I enjoyed doing science, math and arts.
   I realized in my third year of school that I wanted to do something with software,
    and so I started a CCNA vet cource which was my introduction into programing.
  `),
  makeExperience("Software Engineering", "2015-Now", "RMIT University",null,
  `
  The education was mainly in PHP, C and java, but I also learned about SQL, 
  MVC, UML and more. Here I learned about the importance of OOP , code 
  resuablitiy and user experience and design.
  `)
]

config.Contacts = [
  {
    icon: "./view/images/email.png",
    text: "Email",
    link: "mailto:sam@miplace.com?subject=SamCullin.Github.io&body=Hey Sam!! %0A%0Aname:%0Aemail:%0Anumber:%0Acompany:%0Adetails:%0A%0AKind Regards {{name}}%0A%0A"
  },
  {
    icon: "./view/images/linkedin.png",
    text: "Linked In",
    link: "https://www.linkedin.com/in/sam-cullin-ba6b70144/"
  },
  {
    icon: "./view/images/github.png",
    text: "GitHub",
    link: "https://www.github.com/SamCullin"
  },
  {
    icon: "./view/images/twitter.png",
    text: "Twitter",
    link: "https://www.twitter.com/Sam_Cullin"
  },

]
config.Projects = [
  makeExperience("TradeBot","2017","Pandas - Python - Nodejs - MachineLearning - WebSockets",null,
  `In this project I am trying to create a bot that will be able to trade on the crypto
   exchange bittrex.com. This project is teaching how to designe, build, train and deploy
    neral network models. I have also tought my self pandas which helps me with the large data 
    sets that the exchange generate. In order to test the models I have build a local nodejs server 
    to act as a intermediat layer for the bot to trade on whith fake money. Future goals of this project 
    are to move the operation onto a remote server and build a gui interface for monitoring the preformance.
    `),
    makeExperience("Custom View Controllers","2017", "IOS - Swift", "www.github.com",
  `
  This project was a result of starting the company Findas. In the creation of the ios app the built in view controllers
  did not provide the amount of cutomisation needed to build the user interface designing in ower paper plans, so I created 
  my own. Some of the chalanges where getting the same preformance in my customly build controllers as the apple ones. After much tweaking
  I was able to get the same proformance from mine that apple provided.
  `)
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
  makeExperience("Findas","2016-Now","Founder",null,`
    This was a personal project that I took on with a group of friends. 
    This is where I learnt swift, firebase and the google cloud platform. 
    I also tutored my friends teaching them how to code for the first time.
  `),
  makeExperience("DieCut","2014-Now","General Hand",null,`
    DieCut Engineering is a small family owned steel profile cutting business, 
    which I have been casually employed at for two years now. My time at DieCut 
    as given me my most beneficial work experience. It has taught me a lot about 
    keeping a business  running from managing employees to book keeping. Because it 
    is a family owned business I have been able to move around the business and gain
    experience in a number of different areas. Some of which include  deliveries,
    working on the floor, programing and and customer enquires.
  `)
]

config.Skills = {
  "Maching Learning": 3,
  "IOS Development": 9,
  "Backend Development": 8,
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
  "Python": 6,
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
  "VS Code (1-Year)": 7,
  "Eclips (2-Years)": 6,
  "Linux (2-Years)": 6,
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