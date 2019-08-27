const constants = require('./js/constants');

export default 
{
    "home": {
        "image": "software.jpg",
        "title": "Welcome To UBC Subbots",
        "blurb": "UBC Subbots is an engineering student design team dedicated to \
        making an autonomous underwater vehicle (AUV) for the RoboSub competition \
        in San Diego, California each year. This competition challenges us to make \
        a robot that can navigate and interact with underwater obstacles without any\
         human intervention whatsoever. The team was founded in 2017 and is made up of \
         engineering and computer science students from multiple disciplines who have full\
          control over the design, manufacturing and testing of the robot. Since becoming\
           a team, we have learned a lot about designing for the underwater environment and \
           are continuously improving upon our existing designs. ",
        "pitch":{
            "image": "mechanical.jpg",
            "header": "Why Subbots?",
            "body": " Subbots provides the chance for students to work on unique design\
             problems that can’t be found anywhere else at UBC. The team originated from \
             two existing designs teams: UBC SUBC who focuses on the design of human powered\
              submarines, and UBC Snowbots who designs autonomous land robots for various \
              applications. Combining these two together brings a variety of challenges such \
              as autonomous underwater navigation, hydrodynamics and buoyancy, electronics \
              waterproofing, actuation of mechanical systems and many more. Since Subbots is a \
              relatively new design team, there is plenty of opportunity to improve upon existing\
               designs and be a part of building the team. "
        },
        "goal":{
            "image": "electrical.jpg",
            "header": "Our Goal",
            "body": "As a UBC engineering design team we look to create an interesting and \
            engaging environment for all of our members. The team believes our project is a\
             way for students to take what they have learned in the classroom and apply it to\
              real world problems. We do our best to inspire interest in subsea and robotic\
               design while maintaining a fun atmosphere that promotes learning and team bonding. \
               Each year we hope to grow as a team by recruiting motivated and hard working students \
               who share a passion for our project. \n\n On the technical side, our teams goal is to\
                build a robot that is capable of competing in the RoboSub competition each year. To \
                do this our members must learn how to work within a team and multidisciplinary \
                environment to tackle unique design challenges. The teams goal is to facilitate \
                learning in all aspects of AUV design and encourage good engineering practices that \
                can be passed onto future generations of team members. "
        } 
    }, 

    "projects": {
        "image": "mechanical.jpg",
        "title": "See What We Make",
        "blurb": " (Projects Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
            sed do eiusmod tempor incididunt ut labore et dolore magna\
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
            ullamco laboris nisi ut aliquip ex ea commodo consequat.\
            Duis aute irure dolor in reprehenderit in voluptate velit esse\
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
            cupidatat non proident, sunt in culpa qui officia deserunt mollit\
            anim id est laborum."
    },

    "teams": {
        "image": "electrical.jpg",
        "title": "See What Our Members Do",
        "blurb": "  Whether you’re interested in software, electrical, or mechanical\
         design, Subbots offers many unique design challenges that forces our members \
         to come up with creative solutions for building autonomous underwater robots",
        "software": {
            "blurb":" (Software Blurb) Lorem ipsum dolor sit amet, consectetur Lorem Ipsum.",
            "body": " (Software Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "items": {
                "images": {
                    "do": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                    "learn": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                },
                "names": {
                    "do": ["Signal Processing", "Circuit Design", "Comm Systems"],
                    "learn": ["Verification", "Design", "Fabrication"]
                },
                "descriptions": {
                    "do": [" Transformation and interpretation of sensor data", "Robust and accurate electronic hardware", "Facilitating communication between different systems"],
                    "learn": ["Ensuring design and implementation meet specifications", "How to make a system of electronic components safe and robust", "Implementing ideas into the real world"]
                }
            }
        },
        "electrical": {
            "blurb": "The interface between the brain and the real world",
            "body": " The electrical team develops the electrical systems that \
             allow the robot to read and respond to the world. The team designs \
             circuits to control thrusters, process hydrophone signal, read sensor\
              information, and protect valuable electrical components from unexpected\
               power surges. Robust and reliable electrical systems are critical for \
               allowing a robot to react well to a dynamic environment.",
            "items": {
                "images": {
                    "do": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                    "learn": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                },
                "names": {
                    "do": ["Signal Processing", "Circuit Design", "Comm Systems"],
                    "learn": ["Verification", "Design", "Fabrication"]
                },
                "descriptions": {
                    "do": [" Transformation and interpretation of sensor data", "Robust and accurate electronic hardware", "Facilitating communication between different systems"],
                    "learn": ["Ensuring design and implementation meet specifications", "How to make a system of electronic components safe and robust", "Implementing ideas into the real world"]
                }
            }   
        },
        "mechanical": {
            "blurb":"Build the muscle of the robot",
            "body": "The mechanical team is responsible for making the body of the robot\
             that the electrical and software systems control. We handle buoyancy and static \
             stability, hydrodynamics, frame and enclosure design, actuation, electronics \
             integration, waterproofing and the overall esthetic of the robot. Designing mechanical \
             systems for underwater applications brings many design challenges and is critical in \
             allowing robots to exist underwater. ",
            "items": {
                "images": {
                    "do": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                    "learn": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                },
                "names": {
                    "do": ["Structure", "Accuation", "Hydrodynamics"],
                    "learn": ["Design", "Fabrication", "Testing"]
                },
                "descriptions": {
                    "do": ["Robot body and electronics integration", "Interaction with the underwater environment ", "Physical stability and control through the water"],
                    "learn": ["How to design parts for a multidisciplinary project ", "Hands on skills needed to make designs into reality", "How designs perform in practical application"]
                }
            }
        },
    },

    "join": {
        "image": "software.jpg",
        "title": "Become Part Of The Team",
        "blurb": " We are always looking for new members to fill the many challenges\
         that come with designing underwater robots. Whether you’re new to engineering \
         or have previous design experience we encourage everyone who is interested in \
         the project to apply. Our team is built around mentoring new students so that \
         they can eventually take over as team leaders, so students of all skill levels \
         are welcome. Recruitment is primarily done at the start of the school year in \
         September but we continuously recruit throughout the year to fill roles as needed.\
          Our recruitment process consists of an application form that is reviewed by our \
          senior members and a potential interview if we feel you’d be a good fit for the \
          team. If you have a passion for subsea and robotic design feel free to fill out \
          the application below!         ",
    },
    
    "sponsors": {
        "image": "electrical.jpg",
        "title": "See Who Makes Us Possible",
        "blurb": " (Sponsors Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
            sed do eiusmod tempor incididunt ut labore et dolore magna\
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
            ullamco laboris nisi ut aliquip ex ea commodo consequat.\
            Duis aute irure dolor in reprehenderit in voluptate velit esse\
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
            cupidatat non proident, sunt in culpa qui officia deserunt mollit\
            anim id est laborum.",
        "sponsor_list": [
            {
                "image": "ubc_walter_gage.png",
                "link": "http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/"
            },
            {
                "image": "subc.png",
                "link": "https://subc.ca/"
            },
            {
                "image": "ubc-applied-sciences-footer-logo.png",
                "link": "https://apsc.ubc.ca/"
            },
            {
                "image": "ubc-applied-sciences-footer-logo.png",
                "link": "https://apsc.ubc.ca/"
            },
        ]
    },
    "emails": {
        "Subbots": "info.subbots@gmail.com",
        "Electrical": "info.subbots@gmail.com",
        "Mechanical": "",
        "Software": ""
    }
}