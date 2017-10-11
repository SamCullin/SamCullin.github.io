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
  about: `A passionate graduate with a drive to learn and create. Always looking for places to improve upon and learn.  With no lack of persistence and drive. Which I have shown through my own personally motivated projects.
  More experience than the average graduate having brought a full stack system to market with a small team of like minded passionate people.
  `,
  img: ""
}
config.WorkExperience = [
  makeExperience("Findas","2016-Now","Founder",null,[
    "Working in a small team",
    "Project Management",
    "Development life cycles",
    "Communication",
    "Teaching",
    "Software Design and Architecture",
    "Persistance and drive"
  ]),
  makeExperience("DieCut Engineering","2014-Now","General Hand",null,[
    "Wide Range of Experience",
    "Book keeping",
    "Managin Customers and Work Flow",
    "IT Support"
  ])
]
config.Knowledge = {
  "C":8,
  "Python": 6,
  "Swift":9,
  "PHP": 7,
  "CSS": 6,
  "Angular": 5,
  "NodeJS" : 8,
  "Java": 8,
  "JavaScript": 8,
  "SQL": 8,
  "pandas": 7,
  "FireBase": 8,
  "Bootstrap": 7,
  "Singleton Pattern": 8,
  "MVC Pattern": 7,
  "JQuery": 5
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