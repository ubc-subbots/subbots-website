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
        "pitch": {
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
                designs and be a part of building the team. This means that even as new members, \
                your work is significant and directly related to the success of our robot!"
                
        },
        "goal": {
            "image": "electrical.jpg",
            "header": "Our Goal",
            "body": "As a UBC engineering design team we look to create an interesting and \
                engaging environment for all of our members. The team believes our project is a\
                way for students to take what they have learned in the classroom and apply it to\
                real world problems. We do our best to inspire interest in subsea and robotic\
                design while maintaining a fun atmosphere that promotes learning and team bonding. \
                Even when components can be purchased off the shelf, we build most of our components from\
                the ground up for maximum learning experience. This enables each member of the team to \
                understand all aspects of the design, and further improve their technical skills.\
                Each year we hope to grow as a team by recruiting motivated and hard working students \
                who share a passion for our project. \n\n On the technical side, our teams goal is to\
                build a robot that is capable of competing in the RoboSub competition each year. To \
                do this our members must learn how to work within a team and multidisciplinary \
                environment to tackle unique design challenges. The teams goal is to facilitate \
                learning in all aspects of AUV design and encourage good engineering practices that \
                can be passed onto future generations of team members. "
        } ,
        "projects": {
            "header": "The Robots",
            "body": "Since becoming a team in 2017, Subbots has had the chance to work on two robots.\
                Our first robot for the 2017-2018 year was a huge learning curve for the team, but it \
                successfully competed at RoboSub which taught the team a lot about what goes into making \
                an AUV. We are currently working on our second robot which is built off of the original design. \
                Unfortunately, the 2020 RoboSub competition was cancelled, but we are hoping to participate in 2021.",
            "carousels": {
                 "first": {
                    "images": ["first_1.jpg", "first_2.jpg", "first_3.jpg", "first_4.jpg", "first_5.jpg"],
                    "caption": "2017-2018"
                },
                "second": {
                     "images": ["second_1.jpg", "second_2.jpg", "second_3.jpg", "second_4.jpg", "second_5.jpg", "second_6.jpg"],
                     "caption": "2018-2019"
                }
            }
        }
    }, 
    "teams": {
        "image": "electrical.jpg",
        "title": "See What Our Members Do",
        "blurb": "Whether you’re interested in software, electrical, or mechanical\
            design, Subbots offers many unique design challenges that forces our members \
            to come up with creative solutions for building autonomous underwater robots",
        "software": {
            "blurb": "Create and refine subaquatic artificial intelligence",
            "body": "The Software will run on the embedded computer that \
                the robot carries in its chassis. It defines every movement and decision that\
                the robot makes. Without the software, the robot is a potato.",
            "items": {
                "images": {
                    "do": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                    "learn": ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
                },
                "names": {
                    "do": ["Machine Learning", "Computer Vision", "Linux Development"],
                    "learn": ["ROS", "Python", "C++"]
                },
                "descriptions": {
                    "do": ["Use libraries such as Tensorflow for object detection", "Process raw camera signals into meaningful information", "Develop in the open-source wonder that is Linux"],
                    "learn": ["Work on a widely used platform that combines modularity and efficiency", "Learn one of the most widely used languages in the world today", "Wow your friends with your new C++ skills"]
                }
            }
        },
        "electrical": {
            "blurb": "Design the interface between the computer and the sea",
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
            "blurb": "Push the physical limits of underwater mechanics",
            "body": "The mechanical team is responsible for making the body of the robot\
                that the electrical and software systems control. We handle buoyancy and static \
                stability, hydrodynamics, frame and enclosure design, actuation, electronics \
                integration, waterproofing and the overall esthetic of the robot. Designing mechanical \
                systems for underwater applications brings many design challenges and is critical in \
                allowing robots to exist underwater.",
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
            the application below! ",
    },
    
    "sponsors": {
        "image": "electrical.jpg",
        "title": "See Who Makes Us Possible",
        "blurb": " To make our designs a reality Subbots relies on the support\
            of our many sponsors. Through in-kind and monetary contributions\
            our members are able to develop the skills necessary to become\
            engineering professionals. They also gain experience working\
            with our sponsor’s wonderful products, allowing them to more\
            effectively design with similar components in the future. We are\
             always open to new partners, and if you would like to sponsor our\
            team please reach out to us for our sponsorship package.", 
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
                "image": "4imprint.png",
                "link": "https://www.4imprint.ca/"
            },
            {
                "image": "ECE.jpg",
                "link": "https://www.ece.ubc.ca/"
            },
            {
                "image": "IEEE_logo.png",
                "link": "http://www.ubcieee.org/"
            },
            {
                "image": "MATLAB-Logo.png",
                "link": "https://www.mathworks.com/products/matlab.html"
            },
            {
                "image": "mech.png",
                "link": "https://mech.ubc.ca/"
            },
            {
                "image": "phidgets_logo.png",
                "link": "https://www.phidgets.com/?"
            },
            {
                "image": "Shell-Logo.png",
                "link": "https://www.shell.ca/"
            },
            {
                "image": "SNAME.png",
                "link": "https://www.sname.org/home"
            },
            {
                "image": "snowbots.png",
                "link": "http://snowbots.ca/"
            },
            {
                "image": "solidworks-logo.png",
                "link": "https://www.solidworks.com/"
            },
            {
                "image": "spaenaur_logo.jpg",
                "link": "https://spaenaur.com/"
            },
            {
                "image": "ubc_forestry.png",
                "link": "https://forestry.ubc.ca/"
            },
            {
                "image": "venom_logo.png",
                "link": "https://www.venompower.com/"
            },
            {
                "image": "vp.jpg",
                "link": "https://apsc.ubc.ca/"
            },
        ]
    },
    "emails": {
        "Subbots": "ubc.subbots@gmail.com",
        "Electrical": "ubc.subbots@gmail.com",
        "Mechanical": "ubc.subbots@gmail.com",
        "Software": "ubc.subbots@gmail.com"
    },
    "projects": {
        "title": "Projects",
        "blurb": "Projects we are working on now and in the past.",
        "project": {
            "image": "software.jpg", // Add a canonical image for subbot
            "header": "Triton",
            "body": "This is a description of our current subbot.",
            "software": {
                "header": "Software Projects",
                "body": "The Software will run on the embedded computer that \
                    the robot carries in its chassis. It defines every movement and decision that\
                    the robot makes. Without the software, the robot is a potato.",
            },
            "electrical": {
                "header": "Electrical Projects",
                "body": "The electrical team develops the electrical systems that \
                    allow the robot to read and respond to the world. The team designs \
                    circuits to control thrusters, process hydrophone signal, read sensor\
                    information, and protect valuable electrical components from unexpected\
                    power surges. Robust and reliable electrical systems are critical for \
                    allowing a robot to react well to a dynamic environment.",
            },
            "mechanical": {
                "header": "Mechanical Projects",
                "body": "The mechanical team is responsible for making the body of the robot\
                    that the electrical and software systems control. We handle buoyancy and static \
                    stability, hydrodynamics, frame and enclosure design, actuation, electronics \
                    integration, waterproofing and the overall esthetic of the robot. Designing mechanical \
                    systems for underwater applications brings many design challenges and is critical in \
                    allowing robots to exist underwater. ",
            },
            "carousels": {
                "software": {
                    "images": ["first_1.jpg"], // Add new pics
                    "caption": "2019-now"
                },
                "electrical": {
                    "images": ["first_2.jpg"], // Add new pics
                    "caption": "2019-now"
                },
                "mechanical": {
                    "images": ["first_3.jpg"], // Add new pics
                    "caption": "2019-now"
                }
            }
        },
        "projectold": {
            "image": "software.jpg",
            "header": "Old subbot name",
            "body": "This is a paragraph about our old subbot.",
            "carousels": {
                "first": {
                    "images": ["first_1.jpg", "first_2.jpg", "first_3.jpg", "first_4.jpg", "first_5.jpg"],
                    "caption": "2017-2018"
                },
                "second": {
                     "images": ["second_1.jpg", "second_2.jpg", "second_3.jpg", "second_4.jpg", "second_5.jpg", "second_6.jpg"],
                     "caption": "2018-2019"
                }
            }
        },
        "projectfuture": {
            "image": "software.jpg",
            "header": "Projects for the Future",
            "body": "Next-generation subbot."
        }
    }
}