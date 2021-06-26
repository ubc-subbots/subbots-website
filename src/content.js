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
            "old_robot": {
                "header": "NotTriton",
                "body": "Short description of old robot. Someone please crop all the pictures in carousel to same size \
                so it stops changing size!!",
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
            "current_robot": {
                "header": "Triton",
                "body": "Short description of Triton",
                "carousels": {
                     "first": {
                        "images": ["first_5.jpg"], // Add trition pictures
                        "caption": "2019-present"
                    }
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
        "title": "Our Projects",
        "blurb": "Here you'll find more information about what we're working on, and what projects we plan to undertake in the future.",
        "project": {
            "image": "software.jpg", // Add a canonical image for subbot
            "header": "Featured Project - Propulsion System",
            "body": "Here's a video outlining the features and design rationale behind our current robot's (Triton) propulsion system from each sub-team's perspective. This video was originally made for the RoboSub 2021 AUV Competiton.",
            "software": {
                "header": "Software Projects",
                "body": "With little pool access due to the COVID pandemic, \
                we made the decision to shift our focus to developing our \
                simulation environment. Simulation provides us with a cheaper and \
                safer way to test our AUV, as well as ample synthetic data. Synthetic \
                data has become increasingly used in machine learning, as it offers a \
                solution to the issues of data collection and data variety. To collect \
                ample synthetic data for use in future design decisions, we decided to delevop \
                two simulations. One to emulate what our robot's onboard cameras see and another to \
                simulate our robot's dynamics. You can learn more about each of these simulations below!",
                // For Popup card only
                "detail": [
                    {
                        "header": "Computer Vision",
                        "bodyFull": "One quirk about underwater images is that the farther away an object is, the greener it looks. \
                        Light behaves differently underwater due to scattering and absorption, meaning if we want our camera simulation \
                        to look realistic, we need to model the behaviour of light. \
                        A key component of our simulation is underwater image synthesis, which takes an RGBD \
                        image (colour and depth) rendered in our simulation and generates an RGB image of an \
                        underwater scene. Our implementation models the physical properties \
                        of light, allowing us to simulate a variety of underwater environments by adjusting the \
                        attenuation coefficients over the visible spectrum of light (ten different water types are \
                        currently implemented). This ensures our synthetic data covers a range of different \
                        conditions which will help our models generalize to differences in water quality. All \
                        of this is crucial in training a computer vision algorithm to recognize objects in an underwater setting.",
                        
                        "carousel": 
                        {
                        "images": ["CameraSim1.png", "CameraSim2.png", "CameraSim3.png", "CameraSim4.png"],
                        "caption": "Our simulation in action: recognizing our test object among the generated scenery."
                        },
                    },
                    {
                        "header": "Control System",
                        "bodyFull": "Having identified objects with computer vision, it is time for our AUV to move. \
                        However, in order to go to specific locations, we have to control our thrusters precisely, like a driver \
                        controlling the speed and direction of a car. This is achieved by our control system. \
                        <br \><br \>\
                        First, we made a dynamics model for our vehicle. It describes the equations of motion, damping, as well as \
                        environmental wrench contributions for low-speed, submersible vehicles. \
                        This model not only provides us with an accurate representation \
                        of the AUV for us to more easily debug and tune our motion control system, but also gives us a means of \
                        calculating restoring forces in our chosen simulation environment, Gazebo.\
                        <br \><br \>\
                        One constraint of our mathematical model is that it imposes no restrictions on the \"pitch\" axis \
                        of motion (rotation about the <em>y</em> axis). However, by selecting a PD controller and a \
                        Linear Quadratic Regulator to aid in controller tuning, we could address this constraint using a cost funtion\
                         which applies a moderate cost to each of our 5 degrees of freedom, and a large cost on the pitch motion.\
                        <br \><br \>\
                        The controller implementation involves using a path planning algorithm to generate position setpoints and a \
                        velocity profile for each step, then using a generic feedback model, perform PD control on the desired \
                        setpoint using the gain values determined by the cost function. \
                        Using the velocity profile and a thruster transformation matrix, we are able to calculate the force \
                        contributions by each thruster to achieve the desired trajectory for each iteration of our control loop.\
                        <br \><br \>\
                        To develop and validate our control system, we first created a Simulink project to test it under \
                        theoretical conditions. Then, we moved on to using a simulation environment and a 3D rendering of our vehicle. \
                        This approach allowed us to incrementally develop the system and decouple different stages of the design. \
                        <br \><br \>\
                        We chose the open-source simulation tool, Gazebo. It allows us to easily import STL models from SolidWorks, \
                        and apply mechanical properties like inertia and damping. Using Gazebo, we developed camera, position, gyroscope\
                         and depth sensor emulators, as well as thruster driver emulators. These emulators interact with our control pipeline \
                         via ROS2. In addition, we implemented buoyancy an hydrodynamic force plugins that calculate the environment forces \
                         acting on the AUV at any given time.\
                        <br \><br \>\
                        The benefit of using Simulink and Gazebo together is that Gazebo can seamlessly integrate with ROS2, \
                        as shown in the image above. we implemented the same equations in the Simulink project and in our \
                        real-time control loop and hydrodynamics plugin used by Gazebo. With the use of ROS topics, we are \
                        able to launch Gazebo alongside our autonomous control pipeline and communicate with the simulation \
                        environment exactly as we would communicate with physical hardware. \
                        This approach lets us visualize the vehicle's behaviour and gives us confidence to move on to physical testing.\
                        ",
                        "carousel": 
                        {
                        "images": ["SubbotsGazeboSimulationEnvironment-ControlSystem.png"],
                        },
                    },
                ],
            },
            "electrical": {
                "header": "Electrical Projects",
                "body": "This needs to be a summary of what the electrical sub-team has been/is working on, \
                and a brief explanation of what is in each 'learn more' button.",
                "detail": [
                    {
                        "header": "Circuit Boards",
                        "bodyFull": "changeme",
                        "carousel": 
                        {
                        "images": [],
                        "caption": ""
                        },
                    },
                    { 
                        "header": "Signals",
                        "bodyFull": "changeme",
                        "carousel": 
                        {
                        "images": [],
                        "caption": ""
                        },
                    },
                    { 
                        "header": "Power System",
                        "bodyFull": "changeme",
                        "carousel": 
                        {
                        "images": [],
                        "caption": ""
                        },
                    },
                ],
            },
            "mechanical": {
                "header": "Mechanical Projects",
                "body": "This needs to be a summary of what the mechanical sub-team has been/is working on, \
                and a brief explanation of what is in each 'learn more' button.",
                "detail": [
                    {
                        "header": "Waterproofing and Enclosures",
                        "bodyFull": "Changeme",
                        "carousel": 
                        {
                        "images": ["first_1.jpg", "first_2.jpg", "first_3.jpg", "first_4.jpg", "first_5.jpg"],
                        "caption": "2017-2018"
                        },
                    },
                    {
                        "header": "Actuators",
                        "bodyFull": "Changeme",
                        "carousel": 
                        {
                        "images": ["first_1.jpg", "first_2.jpg", "first_3.jpg", "first_4.jpg", "first_5.jpg"],
                        "caption": "2017-2018"
                        },
                    },
                    {
                        "header": "Frames and Hydrodynamics",
                        "bodyFull": "Changeme",
                        "carousel": 
                        {
                        "images": ["first_1.jpg", "first_2.jpg", "first_3.jpg", "first_4.jpg", "first_5.jpg"],
                        "caption": "2017-2018"
                        },
                    },
                ],
            },
            "carousels": {
                "software": {
                    "images": ["first_1.jpg"], // Add new pics
                },
                "electrical": {
                    "images": ["first_2.jpg"], // Add new pics
                },
                "mechanical": {
                    "images": ["first_3.jpg"], // Add new pics
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