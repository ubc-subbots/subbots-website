//const constants = require("./js/constants");

const content = {
  home: {
    image: "software.jpg",
    title: "Welcome To UBC Subbots!",
    h1: "Where comprehensive subsea design and team collaboration happen",
    about:{
      title: "About Us",
      blurb: "UBC Subbots is an engineering student design team dedicated to " 
              +"making an autonomous underwater vehicle (AUV) for the RoboSub competition "
              +"in San Diego, California each year. This competition challenges us to make "
              +"a robot that can navigate and interact with underwater obstacles without any "
              +"human intervention whatsoever. The team was founded in 2017 and is made up of "
              +"engineering and computer science students from multiple disciplines who have full "
              +"control over the design, manufacturing and testing of the robot. Since becoming "
              +"a team, we have learned a lot about designing for the underwater environment and "
              +"are continuously improving upon our existing designs. ",
    },
    pitch: {
      image: "mechanical.jpg",
      header: "Why Subbots?",
      body: " Subbots provides the chance for students to work on unique design "
                +"problems that can’t be found anywhere else at UBC. The team originated from "
                +"two existing designs teams: UBC SUBC who focuses on the design of human powered "
                +"submarines, and UBC Snowbots who designs autonomous land robots for various "
                +"applications. Combining these two together brings a variety of challenges such "
                +"as autonomous underwater navigation, hydrodynamics and buoyancy, electronics "
                +"waterproofing, actuation of mechanical systems and many more. Since Subbots is a "
                +"relatively new design team, there is plenty of opportunity to improve upon existing"
                +"designs and be a part of building the team. This means that even as new members, "
                +"your work is significant and directly related to the success of our robot!"
    },
    goal: {
      image: "electrical.jpg",
      header: "Our Goal",
      body: "As a UBC engineering design team we look to create an interesting and "
                +"engaging environment for all of our members. The team believes our project is a "
                +"way for students to take what they have learned in the classroom and apply it to "
                +"real world problems. We do our best to inspire interest in subsea and robotic "
                +"design while maintaining a fun atmosphere that promotes learning and team bonding.  "
                +"Even when components can be purchased off the shelf, we build most of our components from "
                +"the ground up for maximum learning experience. This enables each member of the team to  "
                +"understand all aspects of the design, and further improve their technical skills. "
                +"Each year we hope to grow as a team by recruiting motivated and hard working students  "
                +"who share a passion for our project. \n\n On the technical side, our teams goal is to "
                +"build a robot that is capable of competing in the RoboSub competition each year. To  "
                +"do this our members must learn how to work within a team and multidisciplinary  "
                +"environment to tackle unique design challenges. The teams goal is to facilitate  "
                +"learning in all aspects of AUV design and encourage good engineering practices that  "
                +"can be passed onto future generations of team members. ",
    },
    projects: {
      header: "The Robots",
      body: "Since becoming a team in 2017, Subbots has had the chance to work on two robots. "
                +"Our first robot for the 2017-2018 year was a huge learning curve for the team, but it  "
                +"successfully competed at RoboSub which taught the team a lot about what goes into making  "
                +"an AUV. We are currently working on our second robot which is built off of the original design.  "
                +"Unfortunately, the 2020 RoboSub competition was cancelled, but we are hoping to participate in 2021.",
      old_robot: {
        header: "Orca",
        body: "Subbot's first attempt at creating an AUV, the design was a bare bones approach for the "
                +"RoboSub 2018 competition. The robot consisted of two custom machined camera enclosures, two 6\" "
                +"enclosures splitting the power and control electronics, and a basic ball collection system on an H "
                +"shaped frame. To reduce cost 4 thrustors were used to provide 4-DOF control of the design.",
        carousels: {
          second: {
            images: [
              "first_1.jpg",
              "first_2.jpg",
              "first_3.jpg",
              "first_4.jpg",
              "first_5.jpg",
            ],
            caption: "2017-2018",
          },
        },
      },
      current_robot: {
        header: "Triton",
        body: "UBC Subbots's submission to RoboSub 2021 is the Triton Autonomous Underwater Vehicle (AUV). "
                +"Novel elements designed in-house include mechanical components, such as our enclosure and pull-out "
                +"mounting plate, and electronics, such as our battery management system. Our software pipeline, running "
                +"on a Jetson TX2, takes advantage of ROS2's modular design, introspection tools, and integration with the "
                +"Gazebo simulator. With the constraints set by the COVID-19 pandemic, we focused heavily on development of "
                +"realistic and physically-informed software simulations for AUV control, computer vision,and sound "
                +"localization, laying the groundwork for testing and verification of future iterations of our AUV.",
        carousels: {
          first: {
            images: [
              "second_1.jpg",
              "second_2.jpg",
              "second_3.jpg",
              "second_4.jpg",
              "second_5.jpg",
              "second_6.jpg",
            ], // Add trition pictures
            caption: "2018-2021",
          },
        },
      },
    },
  },
  teams: {
    image: "electrical.jpg",
    title: "See What Our Members Do",
    blurb:
      "Whether you’re interested in software, electrical, or mechanical "
            +"design, Subbots offers many unique design challenges that forces our members  "
            +"to come up with creative solutions for building autonomous underwater robots",
    software: {
      blurb: "Create and refine subaquatic artificial intelligence",
      body: "The Software will run on the embedded computer that "
                +"the robot carries in its chassis. It defines every movement and decision that"
                +"the robot makes. Without the software, the robot is a potato.",
      items: {
        images: {
          do: ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
          learn: ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
        },
        names: {
          do: ["Machine Learning", "Computer Vision", "Linux Development"],
          learn: ["ROS", "Python", "C++"],
        },
        descriptions: {
          do: [
            "Use libraries such as Tensorflow for object detection",
            "Process raw camera signals into meaningful information",
            "Develop in the open-source wonder that is Linux",
          ],
          learn: [
            "Work on a widely used platform that combines modularity and efficiency",
            "Learn one of the most widely used languages in the world today",
            "Wow your friends with your new C++ skills",
          ],
        },
      },
    },
    electrical: {
      blurb: "Design the interface between the computer and the sea",
      body: " The electrical team develops the electrical systems that "
                +"allow the robot to read and respond to the world. The team designs "
                +"circuits to control thrusters, process hydrophone signal, read sensor "
                +"information, and protect valuable electrical components from unexpected "
                +"power surges. Robust and reliable electrical systems are critical for "
                +"allowing a robot to react well to a dynamic environment.",
      items: {
        images: {
          do: ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
          learn: ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
        },
        names: {
          do: ["Signal Processing", "Circuit Design", "Comm Systems"],
          learn: ["Verification", "Design", "Fabrication"],
        },
        descriptions: {
          do: [
            " Transformation and interpretation of sensor data",
            "Robust and accurate electronic hardware",
            "Facilitating communication between different systems",
          ],
          learn: [
            "Ensuring design and implementation meet specifications",
            "How to make a system of electronic components safe and robust",
            "Implementing ideas into the real world",
          ],
        },
      },
    },
    mechanical: {
      blurb: "Push the physical limits of underwater mechanics",
      body: "The mechanical team is responsible for making the body of the robot "
                +"that the electrical and software systems control. We handle buoyancy and static  "
                +"stability, hydrodynamics, frame and enclosure design, actuation, electronics  "
                +"integration, waterproofing and the overall esthetic of the robot. Designing mechanical  "
                +"systems for underwater applications brings many design challenges and is critical in  "
                +"allowing robots to exist underwater.",
      items: {
        images: {
          do: ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
          learn: ["crosshair.jpg", "crosshair.jpg", "crosshair.jpg"],
        },
        names: {
          do: ["Structure", "Accuation", "Hydrodynamics"],
          learn: ["Design", "Fabrication", "Testing"],
        },
        descriptions: {
          do: [
            "Robot body and electronics integration",
            "Interaction with the underwater environment ",
            "Physical stability and control through the water",
          ],
          learn: [
            "How to design parts for a multidisciplinary project ",
            "Hands on skills needed to make designs into reality",
            "How designs perform in practical application",
          ],
        },
      },
    },
  },

  join: {
    image: "software.jpg",
    title: "Join Our Team!",
    blurb:
      "If you are interested in joining our team, please fill out the form and we will make sure to contact you for our next recruitment wave in September 2022!",
  },

  sponsors: {
    image: "electrical.jpg",
    title: "See Who Makes Us Possible",
    blurb:
      " To make our designs a reality Subbots relies on the support "
            +"of our many sponsors. Through in-kind and monetary contributions "
            +"our members are able to develop the skills necessary to become "
            +"engineering professionals. They also gain experience working "
            +"with our sponsor’s wonderful products, allowing them to more "
            +"effectively design with similar components in the future. We are "
             +"always open to new partners, and if you would like to sponsor our "
            +"team please reach out to us for our sponsorship package.",
    sponsor_list: [
      {
        image: "ubc_walter_gage.png",
        link: "http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/",
      },
      {
        image: "subc.png",
        link: "https://subc.ca/",
      },
      {
        image: "ubc-applied-sciences-footer-logo.png",
        link: "https://apsc.ubc.ca/",
      },
      {
        image: "4imprint.png",
        link: "https://www.4imprint.ca/",
      },
      {
        image: "ECE.jpg",
        link: "https://www.ece.ubc.ca/",
      },
      {
        image: "IEEE_logo.png",
        link: "http://www.ubcieee.org/",
      },
      {
        image: "MATLAB-Logo.png",
        link: "https://www.mathworks.com/products/matlab.html",
      },
      {
        image: "mech.png",
        link: "https://mech.ubc.ca/",
      },
      {
        image: "phidgets_logo.png",
        link: "https://www.phidgets.com/?",
      },
      {
        image: "Shell-Logo.png",
        link: "https://www.shell.ca/",
      },
      {
        image: "SNAME.png",
        link: "https://www.sname.org/home",
      },
      {
        image: "snowbots.png",
        link: "http://snowbots.ca/",
      },
      {
        image: "solidworks-logo.png",
        link: "https://www.solidworks.com/",
      },
      {
        image: "spaenaur_logo.jpg",
        link: "https://spaenaur.com/",
      },
      {
        image: "ubc_forestry.png",
        link: "https://forestry.ubc.ca/",
      },
      {
        image: "venom_logo.png",
        link: "https://www.venompower.com/",
      },
      {
        image: "vp.jpg",
        link: "https://apsc.ubc.ca/",
      },
    ],
  },

  members: {
    image: "team_photo_2022_flat.jpeg",
    title: "Current Members",
    member_list: [
      {
        name: "Viktor Moreno",
        image: "No_Photo.gif",
        email: "viktor.moreno123@gmail.com, linkedin.com/in/vmoreno2001/",
        program: "Team Captain",
      },
      {
        name: "Angie Pinto",
        image: "Angie_Pinto.jpg",
        email: "pinto.angie.02@gmail.com",
        program: "Mechanical Project Lead",
      },
      {
        name: "Charles Polloway",
        image: "Charles_Polloway.jpg",
        email: "linkedin.com/in/charles-polloway",
        program: "Mechanical Project Lead",
      },
      {
        name: "Luke D. Gallant",
        image: "Luke_Gallant.jpg",
        email: "linkedin.com/in/luke-gallant",
        program: "Mechanical Project Lead",
      },
      {
        name: "Hubert Shim",
        image: "No_Photo.gif",
        email: "hubertshim98@gmail.com",
        program: "Electrical Project Lead",
      },
      {
        name: "Pavitar Kalra",
        image: "Pavitar_Kalra.JPG",
        email: "me@pavitar.ca",
        program: "Electrical Project Lead",
      },
      {
        name: "Peter Van den Doel",
        image: "No_Photo.gif",
        email: "",
        program: "Electrical Project Lead",
      },
      {
        name: "Jared Chan",
        image: "No_Photo.gif",
        email: "jaredchan42@gmail.com",
        program: "Software Team Lead",
      },
      {
        name: "Savitoj Sachar",
        image: "No_Photo.gif",
        email: "linkedin.com/in/savitoj-sachar",
        program: "Software Project Lead",
      },
      {
        name: "Fei Kuan",
        image: "No_Photo.gif",
        email: "",
        program: "Software Project Lead",
      },
      {
        name: "Jonathan Wu",
        image: "No_Photo.gif",
        email: "linkedin.com/in/jonathan-wu",
        program: "Mechanical Team",
      },
      {
        name: "Ryan Leung",
        image: "No_Photo.gif",
        email: " ",
        program: "Mechanical Team",
      },
      {
        name: "Dawud Qaimari",
        image: "No_Photo.gif",
        email: "linkedin.com/in/dawud-qaimari",
        program: "Mechanical Team",
      },
      {
        name: "Rafael Lorenzo Remo",
        image: "No_Photo.gif",
        email: "rafaelremo820@gmail.com",
        program: "Mechanical Team",
      },
      {
        name: "Brenna Sullivan",
        image: "No_Photo.gif",
        email: "",
        program: "Mechanical Team",
      },
      {
        name: "Evelyn McGregor",
        image: "No_Photo.gif",
        email: "",
        program: "Mechanical Team",
      },
      {
        name: "Martin Monaco",
        image: "No_Photo.gif",
        email: "",
        program: "Mechanical Team",
      },
      {
        name: "Sunny Fu",
        image: "No_Photo.gif",
        email: "",
        program: "Mechanical Team",
      },
      {
        name: "Ivan Su",
        image: "No_Photo.gif",
        email: "",
        program: "Mechanical Team",
      },
      {
        name: "Amraj Aujla",
        image: "No_Photo.gif",
        email: "",
        program: "Software Team",
      },
      {
        name: "Jaclyn Canlas",
        image: "No_Photo.gif",
        email: "",
        program: "Software Team",
      },
      {
        name: "Mark Tan",
        image: "No_Photo.gif",
        email: "",
        program: "Software Team",
      },
      {
        name: "Patrick Gousseau",
        image: "No_Photo.gif",
        email: "",
        program: "Software Team",
      },
      {
        name: "Cameron Fletcher",
        image: "Cameron_Fletcher.jpg",
        email: "linkedin.com/in/cvfletcher",
        program: "Electrical Team",
      },
      {
        name: "Connor Seto",
        image: "No_Photo.gif",
        email: "",
        program: "Electrical Team",
      },
      {
        name: "David Chung",
        image: "No_Photo.gif",
        email: "",
        program: "Electrical Project Lead",
      },
      {
        name: "Navraj Bains",
        image: "No_Photo.gif",
        email: "",
        program: "Electrical Team",
      },
      {
        name: "Amrit Sahota",
        image: "No_Photo.gif",
        email: "",
        program: "Electrical Team",
      },
    ],
  },
  emails: {
    Subbots: "ubc.subbots@gmail.com",
    Electrical: "ubc.subbots@gmail.com",
    Mechanical: "ubc.subbots@gmail.com",
    Software: "ubc.subbots@gmail.com",
  },
  projects: {
    title: "Our Projects",
    blurb:
      "Here you'll find more information about what we're working on, and what projects we plan to undertake in the future.",
    project: {
      image: "software.jpg", // Add a canonical image for subbot
      header: "Featured Project - Propulsion System",
      body: "Here's a video outlining the features and design rationale behind our current robot's (Triton) propulsion system from each sub-team's perspective. This video was originally made for the RoboSub 2021 AUV Competiton.",
      software: {
        header: "Software Projects",
        body: "With little pool access due to the COVID pandemic, "
                +"we made the decision to shift our focus to developing our "
                +"simulation environment. Simulation provides us with a cheaper and "
                +"safer way to test our AUV, as well as ample synthetic data. To collect "
                +"ample synthetic data for use in future design decisions, we decided to delevop "
                +"two simulations. One to emulate what our robot's onboard cameras see and another to "
                +"simulate our robot's dynamics. You can learn more about each of these simulations below:",
        // For Popup card only
        detail: [
          {
            header: "Computer Vision",
            bodyFull:
              "Shown above: Our computer vision simulation in action. The program manges to distinguish our test image 'Lena' from the underwater surroundings.<br ><br >"
                        +"One quirk about underwater images is that the farther away an object is, the greener it looks. "
                        +"Light behaves differently underwater than on land due to scattering and absorption, meaning if we want our camera simulation "
                        +"to look realistic, we need to model the behaviour of light. "
                        +"A key component of our simulation is underwater image synthesis, which takes an RGBD "
                        +"image (colour and depth) rendered in our simulation and generates an RGB image of an "
                        +"underwater scene. Our implementation models the physical properties "
                        +"of light, allowing us to simulate a variety of underwater environments by adjusting the "
                        +"attenuation coefficients over the visible spectrum of light (ten different water types are "
                        +"currently implemented). This ensures our synthetic data covers a range of different "
                        +"conditions which will help our models generalize to differences in water quality. We then "
                        +"used this simulation to render realistic underwater scenes. "
                        +"<br ><br >"
                        +"After creating a realistic underwater environment, we trained a YOLO object detection model "
                        +"to recognize our common test image, 'Lena'. We generated a dataset of 800 underwater images with varying "
                        +"scenery and placements of Lena. Even when Lena was only partially in frame or occluded by other objects, "
                        +"our program could still recognize her. In fact, after 2000 iterations on our 800 image dataset, our model "
                        +"achieved a mean average precision (mAP) score of 95%. "
                        +"<br ><br >"
                        +"Once pool is access is readily available again, we plan on collecting in-water data for use as a validation "
                        +"dataset, as real-world performance will be the true test for our model.",

            carousel: {
              images: [
                "CameraSim1.png",
                "CameraSim2.png",
                "CameraSim3.png",
                "CameraSim4.png",
              ],
            },
          },
          {
            header: "Control System",
            bodyFull:
              "Shown above: A diagram displaying all the components of our control system. "
                        +"<br ><br > "
                        +"Having identified objects with computer vision, it is time for our AUV to move. "
                        +"However, in order to go to specific locations, we have to control our thrusters precisely, like a driver "
                        +"controlling the speed and direction of a car. This is achieved by our control system. "
                        +"<br ><br > "
                        +"First, we made a dynamics model for our vehicle. It describes the equations of motion, damping, as well as "
                        +"environmental wrench contributions for low-speed, submersible vehicles. "
                        +"This model not only provides us with an accurate representation "
                        +"of the AUV for us to more easily debug and tune our motion control system, but also gives us a means of "
                        +"calculating restoring forces in our chosen simulation environment, Gazebo. "
                        +"<br ><br > "
                        +"One constraint of our mathematical model is that it imposes no restrictions on the \"pitch\" axis  "
                        +"of motion (rotation about the <em>y</em> axis). However, by selecting a PD controller and a  "
                        +"Linear Quadratic Regulator to aid in controller tuning, we could address this constraint using a cost funtion "
                         +"which applies a moderate cost to each of our 5 degrees of freedom, and a large cost on the pitch motion. "
                        +"<br ><br > "
                        +"The controller implementation involves using a path planning algorithm to generate position setpoints and a  "
                        +"velocity profile for each step, then using a generic feedback model, perform PD control on the desired  "
                        +"setpoint using the gain values determined by the cost function.  "
                        +"Using the velocity profile and a thruster transformation matrix, we are able to calculate the force  "
                        +"contributions by each thruster to achieve the desired trajectory for each iteration of our control loop. "
                        +"<br ><br > "
                        +"To develop and validate our control system, we first created a Simulink project to test it under  "
                        +"theoretical conditions. Then, we moved on to using a simulation environment and a 3D rendering of our vehicle.  "
                        +"This approach allowed us to incrementally develop the system and decouple different stages of the design.  "
                        +"<br ><br > "
                        +"We chose the open-source simulation tool, Gazebo. It allows us to easily import STL models from SolidWorks, "
                        +"and apply mechanical properties like inertia and damping. Using Gazebo, we developed camera, position, gyroscope "
                         +"and depth sensor emulators, as well as thruster driver emulators. These emulators interact with our control pipeline "
                         +"via ROS2. In addition, we implemented buoyancy an hydrodynamic force plugins that calculate the environment forces "
                         +"acting on the AUV at any given time. "
                        +"<br ><br >"
                        +"The benefit of using Simulink and Gazebo together is that Gazebo can seamlessly integrate with ROS2, "
                        +"as shown in the image above. we implemented the same equations in the Simulink project and in our "
                        +"real-time control loop and hydrodynamics plugin used by Gazebo. With the use of ROS topics, we are "
                        +"able to launch Gazebo alongside our autonomous control pipeline and communicate with the simulation "
                        +"environment exactly as we would communicate with physical hardware. "
                        +"This approach lets us visualize the vehicle's behaviour and gives us confidence to move on to physical testing.",
            carousel: {
              images: ["SubbotsGazeboSimulationEnvironment-ControlSystem.png"],
            },
          },
        ],
      },
      electrical: {
        header: "Electrical Projects",
        body: "The electrical team develops the electrical systems that allow the robot to read and respond to the world. "
                +"The team designs systems to control and power thrusters, process signals, interface and communicate between sub-systems, "
                +"and protect valuable electrical components from unexpected power surges. Robust and reliable electrical systems are critical "
                +"for allowing a robot to react well to a dynamic environment. Here are some of the projects the electrical team is currently working on:",
        detail: [
          {
            header: "Power Distribution",
            bodyFull:
              "Shown Above: A diagram showing how our power distribution system is connected within and between enclosures. "
                        +"<br ><br >"
                        +"Power distribution is a crucial system for the robot as it organizes and delivers the appropriate electrical power to "
                        +"all of the components. One of the key points of our power distribution system is the use of two separate batteries powering the whole "
                        +"system. There are a couple of reasons why this separation is necessary. First, there are components that generally are power-heavy, such "
                        +"as the thrusters, which usually require more power to run. These components require more powerful batteries, so it makes more sense to connect "
                        +"them to a bigger battery, while smaller components such as the pressure sensors connect to a smaller battery. Second, having two separate batteries "
                        +"allows us to completely isolate noise. Motors and thrusters usually generate a lot of noise which can interfere with more sensitive signals in the system. "
                        +"Our team uses one battery for the noisy and power-heavy components, and the other for sensitive low-power components. The use of optocouplers enables "
                        +"electrical isolation between the two batteries because optocouplers have an LED-phototransistor pair which allows us to make voltage references between "
                        +"the two batteries without actually physically connecting the two. "
                        +"<br ><br >"
                        +"Another important component of power distribution is wiring. It is important to ensure that power-heavy components are connected with appropriate wires that "
                        +"are able to handle the required current and voltage. For sensitive components, it is important to make the wire connections as short as possible and physically "
                        +"distant from power-heavy wires to ensure that the sensitive readings don’t pick up noise in the system. Within the main enclosure, components are laid out to "
                        +"ensure these types of spacings are possible for all wiring. ",
            carousel: {
              images: ["PowerDistribution.png"],
              caption: "",
            },
          },
          {
            header: "Sound Localization",
            bodyFull:
              "Shown Above: One of the sound localization architectures we are considering. "
                        +"<br ><br > "
                        +"In order to locate some of the tasks at Robosub, we are developing a system that will allow us to locate underwater pingers emitting sounds at known frequencies.  "
                        +"In order to do that, we are designing circuits to process signals coming out of a hydrophone (underwater microphone) and researching a variety of techniques to use  "
                        +"those signals for localization. This project is one of the more challenging and well rounded projects on the team, involving a wide range of design topics from analog  "
                        +"circuitry to firmware/software.  "
                        +"<br ><br > "
                        +"The high level diagram featured above shows one of the architectures we are currently considering for our system. At the moment, the project is still in its early stages  "
                        +"and a lot of the work we are currently doing is research based. In order to compare various implementations and techniques, we have built a simulator in Python from scratch  "
                        +"which puts an emphasis on modularity and flexibility. This will allow us to test a variety of configurations and implementations for the system to determine the optimal design.  "
                        +"<br ><br > "
                        +"Some of the tasks our members are currently working on include: designing the analog filters and pre-amplifier, maintaining and adding functionality to our simulator, researching  "
                        +"techniques to deal with reflections and multipath, researching various localization techniques such as multilateration and beamforming, and using our simulator to test the effectiveness  "
                        +"of different implementations.",
            carousel: {
              images: ["SoundLocalizationArch.png"],
              caption: "",
            },
          },
          {
            header: "Battery Management",
            bodyFull:
              "Shown Above: A diagram showing the major components of our battery management system. "
                        +"<br ><br > "
                        +"LiPo (lithium polymer) batteries are incredibly efficient for use in robotics, they’re lightweight, small, and can output very high currents. However they can also be very dangerous if not  "
                        +"maintained and used safely. The battery management systems team’s purpose is to ensure that the robots batteries are being used safely, and to protect the rest of the robot from any potential  "
                        +"harm they could cause. This project is great for anyone interested in gaining hands-on experience with the entire lifecycle of circuit design!  "
                        +"<br ><br > "
                        +"Our team is currently focused on three main projects and are integrated into the power management system:  "
                        +"<br ><br > "
                        +"Voltage Monitoring: This project is the first one the BMS team took on. A purely electrical circuit solution that acts as a kill switch to the entire robot. The killswitch is triggered in the event  "
                        +"that any cell in the battery goes below a safe voltage potentially harming the LiPo’s or our system. Throughout this project team members got experience designing a solution from scratch, hands-on  "
                        +"testing with lab equipment, troubleshooting and iterating on design, designing a PCB in Altium, and soldering/assembling the final circuit.  "
                        +"<br ><br > "
                        +"Current Monitoring: The purpose of the current monitor is to adjust current draw to safe levels, and as a last resort a kill switch to the entire system. This is a newer project still in the early design  "
                        +"and simulation testing phases. Our design is leveraging the use of a negative feedback op amp to keep the voltage on two nodes identical. Then using a shunt resistor in parallel with a larger reference  "
                        +"resistance we could monitor changes in voltage and measure its relationship to current to get a reading of how much current was entering our system. Currently team members are working on testing this design  "
                        +"in LTSpice, and adding features such as a 12A fuse to act as a kill switch, an LED indicator to notify us quickly if that fuse breaks and more. "
                        +"<br ><br > "
                        +"Temperature Monitoring: Still in the research phase, the purpose of temperature monitoring is to ensure that the batteries do not overheat and get damaged during operation. This is an especially important  "
                        +"feature since the robot is underwater, and the batteries are stored in small enclosures. The temperature data that is read electrically will then be sent to a microcontroller and subsequently the robot main  "
                        +"computer so we can adjust operation if the batteries begin to overheat. Currently team members are researching how to leverage the batteries’ integrated NTC thermistor to read temperature data.",
            carousel: {
              images: ["BMS-System.png"],
              caption: "",
            },
          },
        ],
      },
      mechanical: {
        header: "Mechanical Projects",
        body: "With access to in-person workspaces limited during the COVID-era, we have focused primarily  "
                +"on CAD design, and on figuring out manufacturing techniques for said designs once in-person work is allowed  "
                +"again. The mechanical team is divided into three sub-teams, represented by the buttons below. Feel free to click  "
                +"on each one to see what they've been working on.",
        detail: [
          {
            header: "Waterproofing and Enclosures",
            bodyFull:
              "Shown Above: A Solidworks rendering of our robot's enclosures and their locations relative to eachother. "
                        +"<br ><br >"
                        +"In general, the projects we undertake involve creating watertight enclosures and electrical connections that are easy "
                        +"to access and maintain. "
                        +"<br ><br >"
                        +"In order to access the components within the main enclosure, we have decided that all of the electronics should sit on "
                        +"a single platform. This platform rests on a pair or rails which allow the circuity to slide out of the enclosure. This provides "
                        +"us with easy access to the electronics without having to remove the enclosure itself from the robot's frame. The two battery enlosures "
                        +"(seen below the main enclosure) lack a rail system, as we determined they would rarely need to be accessed once installed. "
                        +"<br ><br >"
                        +"The most recent addition to Triton's suite of enclosures is the killswitch enclosure. This enclosure is small, simple, but important. "
                        +"It houses our robot's emergency off switch, which is useful from both a safety and convenience standpoint. This switch would be operated "
                        +"in any scenario where the robot starts moving in a dangerous or otherwise undesired way. "
                        +"<br ><br >"
                        +"Another newer addition is the camera enclosure (seen directly below the main enclosure) which houses Triton's eyes. This enclosure consists "
                        +"of one front-facing camera and one downward facing camera. This enclosure has been fully built and awaits integration and testing with the rest "
                        +"of Triton's systems. ",
            carousel: {
              images: ["Enclosures.JPG"],
            },
          },
          {
            header: "Actuators",
            bodyFull:
              "Shown Above: A sketch of Triton's general-purpose manipulator arm. "
                        +"<br ><br >"
                        +"There are several tasks in the Robosub competition that involve objects to be manipulated. To complete these tasks additional actuator systems are required. "
                        +"One of our actuator systems is a robotic manipulator arm, designed to grip and move various objects. So far, we have designed a 2-degree of freedom arm, with "
                        +"an end effector made for gripping. This project involves close collaboration with the electrical actuators team, making work on Triton’s actuators a very good "
                        +"exercise in mechatronics engineering. "
                        +"<br ><br >"
                        +"Triton’s general manipulation arm has three rotary actuators controlling the robot’s position, one at the base of the robot arm, one turning the robot’s wrist and "
                        +"one opening and closing the robot’s gripper. The arm also utilizes a depth sensor to detect objects within its grasp and a flexible stretch sensor to control the "
                        +"gripper’s force. The project itself is still in its early stages, and we are planning on adding more degrees of freedom to the robot to increase the arm’s range of "
                        +"motion. Some of the tasks of this project include programming inverse/forward kinematics of the robot arm, spec-ing actuators and sensors, performing grip and stress "
                        +"tests, analog circuit design for motor driver and sensor circuits and designing future iterations of the arm to include more degrees of freedom. "
                        +"<br ><br >"
                        +"All other actuator projects are still in the early brainstorming phase, meaning that there are substantial opportunites for new members to contribute ideas and learn about "
                        +"the exciting world of underwater actuation.",
            carousel: {
              images: ["Manipulator_arm_sketch.png"],
            },
          },
          {
            header: "Frames and Hydrodynamics",
            bodyFull:
              "Shown Above: Triton's frame structure and thruster configuration, Triton's passive stabilization system, and the frame design for our next generation robot. "
                        +"<br ><br > "
                        +"The bulk of our projects focus on how to make our robot as hydrodynamic and structurally sound while moving through the water. We focus on initiatives such as fluid dynamics  "
                        +"modelling, stress simulations, and designing mounting hardware for enclosures.  "
                        +"<br ><br > "
                        +"Triton's frame design was developed to be as utilitarian and cost effective as possible. Although this led to sacrifices in hydrodynamics and aesthetics, it was done for a good reason.  "
                        +"Our plan is that this generation of robot will serve as a test-bed for components of future robots, such as new actuators or camera systems. Unfortunately, this pursuit of a low-cost design  "
                        +"resulted in a limited number of thrusters being installed. As a result, Triton has 4 degrees of freedom instead of the ideal 6. This was partially dealt with by the addition of a passive  "
                        +"stability system consisting of bouyant styrofoam (top of robot) and solid ballast (lower section). This system helps prevent triton from flipping upside down underwater.  "
                        +"<br ><br > "
                        +"If style and mobility are more your thing, then you'll be happy to know our next generation robot encompasses just that. This iteration will have a carbon-fibre shell mounted to a solid metal plate.  "
                        +"The shell is split into two pieces down the middle and will swing open for easy access to the enclosures within. Although thruster placement isn't final, we're certain that this version will be more agile than Triton.",
            carousel: {
              images: [
                "Frame_Isolation.JPG",
                "Ballast.JPG",
                "New_Frame1.png",
                "New_Frame2.png",
              ],
            },
          },
        ],
      },
      carousels: {
        software: {
          images: ["soft_gate_detection.png"], // Add new pics
        },
        electrical: {
          images: [
            "elec1.PNG",
            "elec2.PNG",
            "elec3.jpg",
            "elec4.png",
            "elec5.jpg",
          ], // Add new pics
        },
        mechanical: {
          images: [
            "mech1.jpg",
            "mech2.jpg",
            "mech3.jpg",
            "mech4.jpg",
            "mech5.jpg",
          ], // Add new pics
        },
      },
    },
    /*"projectfuture": {
            "image": "software.jpg",
            "header": "Projects for the Future",
            "body": "",
        },*/
  },
};

export default content