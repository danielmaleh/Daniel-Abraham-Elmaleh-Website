import { url } from "inspector";

export type ProjectResource = {
    type: "report" | "demo" | "slides" | "code";
    label: string;
    url?: string;
    description?: string;
};

export type ProjectTag =
    | "Photonics"
    | "Robotics"
    | "Nanotechnology"
    | "Bio-MedTech"
    | "Computer Vision"
    | "Deep Learning"
    | "Control"
    | "Mechanical Design"
    | "Simulation"
    | "Electronics"
    | "Computer Graphics"
    | "Signal Processing";

export type Project = {
    slug: string;
    title: string;
    course?: string;
    timeline?: string;
    summary: string;
    description: string;
    highlights: string[];
    tags: ProjectTag[];
    resources?: ProjectResource[];
    featured?: boolean;
    pdfLabel?: string;
    pdfDescription?: string;
};

export const ProjectsData: Project[] = [
    {
        slug: "neural-interfaces",
        title: "Closed Loop Optogenetic & Electrical Neural Interface",
        course: "NX-422 Neural Interfaces",
        timeline: "2024",
        summary: "Designed a closed-loop neural interface combining optogenetic stimulation with electrical recording for brain-machine applications.",
        description:
            "Group project developing a neural interface system that uses optogenetic stimulation (light-activated ion channels) combined with electrical recording. The system implements closed-loop control where neural activity measurements inform stimulation parameters in real-time. Focused on deep brain stimulation applications.",
        highlights: [
            "Designed optogenetic stimulation circuitry with precise timing control.",
            "Implemented closed-loop feedback between recording and stimulation.",
            "Integrated electrical neural recording with optical stimulation hardware.",
            "Developed signal processing pipeline for real-time neural data analysis.",
        ],
        tags: ["Bio-MedTech", "Electronics", "Signal Processing", "Control"],
        resources: [
        ],
        featured: true,
    },
    {
        slug: "bio-nano-chip-aptasensor",
        title: "Wearable Aptasensor for Estradiol Monitoring",
        course: "EE-517 Bio-nano-chip Design",
        timeline: "2024",
        summary: "Designed an electrochemical aptasensor for continuous monitoring of estradiol hormone levels.",
        description:
            "Group project designing a wearable biosensor based on aptamer technology for hormone monitoring. The device uses electrochemical detection with aptamer-based recognition elements for selective estradiol detection, targeting applications in women's health monitoring.",
        highlights: [
            "Designed aptamer-based recognition layer for selective detection.",
            "Developed electrochemical sensing circuitry for wearable format.",
            "Optimized sensor response time and detection limits.",
            "Created miniaturized readout electronics for portable use.",
        ],
        tags: ["Bio-MedTech", "Electronics", "Nanotechnology"],
        resources: [
            {
                type: "report",
                label: "Design Report",
                description: "Aptasensor design and characterization.",
            },
        ],
        featured: true,
    },
    {
        slug: "intercultural-presentation",
        title: "Presentation Pitch - Good intentions aren't enough",
        course: "MGT-469 Intercultural Presentation Skills",
        timeline: "2024",
        summary: "Developed and delivered a pitch presentation focusing on intercultural communication and presentation techniques.",
        description:
            "Individual project as part of the Intercultural Presentation Skills course. Developed a pitch presentation incorporating intercultural communication principles, body language awareness, and effective storytelling techniques for diverse audiences.",
        highlights: [
            "Crafted compelling narrative structure for professional pitch.",
            "Applied intercultural communication principles.",
            "Developed confident presentation delivery skills.",
            "Received feedback on body language and vocal techniques.",
        ],
        tags: [],
    },
    {
        slug: "anti-stokes-gold-flakes",
        title: "Anti-Stokes Phenomena in Crystalline Plasmonic Metals",
        course: "NAM Lab - Prof. Oliver Martin",
        timeline: "2024",
        summary: "Research on Anti-Stokes optical phenomena in 2D gold flakes with analytical software development.",
        description:
            "Research internship at EPFL's Nanophotonics and Metrology Lab (NAM) studying Anti-Stokes phenomena in crystalline metals. Involved preparation, growth, etching and characterization of 2D gold flakes, development of analytical software, AFM roughness characterization, and optical measurements.",
        highlights: [
            "Prepared and characterized 2D gold flakes.",
            "Developed Python software for color-to-thickness mapping.",
            "Performed AFM and optical measurements.",
            "Studied power, wavelength, and polarization dependencies.",
        ],
        tags: ["Photonics", "Nanotechnology", "Signal Processing"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/ColorToThickness",
                description: "Python analytical software for thickness mapping.",
            },
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/anti-stokes-spectroscopy",
                description: "Python Raman analysis scripts.",
            },
        ],
    },
    {
        slug: "sers-creatinine-detection",
        title: "SERS & Deep Learning for Creatinine Detection",
        course: "BIOS Lab - Prof. Hatice Altug",
        timeline: "2025",
        summary: "Developed Surface Enhanced Raman Spectroscopy with transformer and CNN models for continuous creatinine monitoring in human serum.",
        description:
            "Research project at EPFL's Bio-nano-photonic System Lab (BIOS) developing SERS-based biosensors for medical diagnostics. Led the photonics team at the SensUs competition. Combined advanced optical sensing with deep learning (transformers and convolutional neural networks) for accurate biomarker detection.",
        highlights: [
            "Developed SERS substrates for enhanced molecular detection.",
            "Trained transformer and Conv NN models (Keras) for spectral analysis.",
            "Achieved continuous monitoring capability in complex biological matrices.",
            "Led the Photonics Team at the international SensUs competition.",
        ],
        tags: ["Photonics", "Deep Learning", "Bio-MedTech", "Nanotechnology"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/sers-creatinine-deep-learning",
                description: "Deep learning models for SERS spectral analysis and preprocessing scripts.",
            },
        ],
        featured: true,
    },
    {
        slug: "deep-learning-weather",
        title: "Deep Learning for Weather Prediction",
        course: "MICRO-573 Deep Learning for Optical Imaging",
        timeline: "2024",
        summary: "Applied deep learning techniques for weather prediction using optical imaging data.",
        description:
            "Course project applying deep learning methods to optical imaging applications, specifically weather prediction. Explored convolutional neural networks and other architectures for analyzing image data and making predictions.",
        highlights: [
            "Applied CNN architectures for image analysis.",
            "Processed optical imaging data for prediction tasks.",
            "Trained and validated deep learning models.",
            "Explored different neural network architectures.",
        ],
        tags: ["Deep Learning", "Photonics", "Computer Vision"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/deep-learning-solar-irradiance-prediction",
                description: "Deep learning model implementations and training scripts (notebook).",
            },
        ],
    },
    {
        slug: "mobile-robot-kalman",
        title: "Autonomous Mobile Robot Navigation",
        course: "MICRO-452 Basics of Mobile Robotics",
        timeline: "2023",
        summary: "Implemented Kalman filter and path planning for autonomous robot navigation.",
        description:
            "Group project implementing autonomous navigation for a Thymio robot. Responsible for Kalman filter development and implementation for state estimation, combining wheel odometry with visual feedback for reliable localization and navigation.",
        highlights: [
            "Developed Extended Kalman Filter for robot localization.",
            "Implemented sensor fusion between odometry and vision.",
            "Created path planning algorithms with obstacle avoidance.",
            "Integrated with computer vision for waypoint detection.",
            "Local and global path planning implementation.",
            "Obstacle avoidance strategies.",
            "Target waypoint detection using computer vision.",
        ],
        tags: ["Robotics", "Computer Vision", "Control"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/thymio-autonomous-navigation",
                description: "The complete code for the project.",
            },
        ],
        featured: true,
    },
    {
        slug: "solar-panel-cleaner",
        title: "Autonomous Solar Panel Cleaner Robot",
        course: "MICRO-406 Products Design & Systems Engineering",
        timeline: "2023",
        summary: "Full prototype design of an autonomous robot for cleaning solar panels, with complete system engineering and management.",
        description:
            "Group project (6 members) developing a complete autonomous solar panel cleaning robot. Responsible for electronics, software development, and implementation. Applied full product design lifecycle including requirements analysis, system architecture, prototyping, and testing.",
        highlights: [
            "Designed complete autonomous cleaning robot prototype.",
            "Developed embedded software for autonomous navigation.",
            "Implemented motor control and sensor integration.",
            "Applied full system engineering methodology from concept to prototype.",
        ],
        tags: ["Robotics", "Electronics", "Mechanical Design", "Control"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/solar-panel-robot-cleaner",
                description: "Embedded software for robot control and navigation for autonomous solar panel cleaning.",
            },
        ],
        featured: true,
    },
    {
        slug: "controlling-behavior-robots",
        title: "Bio-inspired Robot Locomotion Control",
        course: "BIOENG-456 Controlling Behavior in Animals and Robots",
        timeline: "2024",
        summary: "Implemented CPG-based locomotion controllers for bio-inspired robot simulation.",
        description:
            "Project exploring Central Pattern Generator (CPG) based control for robot locomotion, inspired by biological neural circuits that control movement in animals. Implemented simulations of multi-legged locomotion with neural control architectures.",
        highlights: [
            "Implemented CPG-based locomotion controllers.",
            "Simulated multi-legged robot movement patterns.",
            "Studied biological neural control principles.",
            "Created visualization of locomotion dynamics.",
            "flygym simulator adaptation for CPG control.",
            "MujoCo simulation environment for testing locomotion.",
        ],
        tags: ["Robotics", "Control", "Simulation", "Bio-MedTech"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/cobar-fly-obstacle-avoidance",
                description: "CPG locomotion controller implementations and simulation scripts.",
            },
        ],
    },
    {
        slug: "public-action-entrepreneurs",
        title: "Public Action: French Entrepreneur Expatriation",
        course: "ECO558 - École Polytechnique de Paris",
        timeline: "2023",
        summary: "Economic analysis of French entrepreneur expatriation patterns and policy implications.",
        description:
            "Economics research project analyzing the expatriation of French entrepreneurs, examining economic factors, policy impacts, and international business dynamics.",
        highlights: [
            "Researched entrepreneur migration patterns.",
            "Analyzed economic policy impacts.",
            "Studied international business dynamics.",
            "Prepared policy recommendation report.",
        ],
        tags: [],
        resources: [
        ],
    },
    {
        slug: "planetary-system-opengl",
        title: "3D Planetary System Visualization",
        course: "INF443 - École Polytechnique de Paris",
        timeline: "2023",
        summary: "Graphics programming of a 3D animated planetary system using OpenGL and CGP.",
        description:
            "Computer graphics project creating an interactive 3D visualization of a planetary system using OpenGL and the CGP graphics library. Implemented realistic planetary textures, orbital mechanics animation, and camera controls for exploration.",
        highlights: [
            "Programmed 3D scene with OpenGL and CGP library.",
            "Implemented realistic planetary textures and lighting.",
            "Created smooth orbital animation system.",
            "Developed interactive camera navigation.",
        ],
        tags: ["Computer Graphics", "Simulation"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/opengl-planetary-system",
                description: "OpenGL/CGP implementation.",
            },
        ],
    },
    {
        slug: "planet-donut-2d",
        title: "Planet Donut - 2D Game Development",
        course: "INF311 - École Polytechnique de Paris",
        timeline: "2021",
        summary: "C++ 2D game development with virtual world simulation and simple AI.",
        description:
            "Programming project creating a 2D game/simulation in C++. Developed a virtual world simulator with simple AI elements and graphical interface using gtk. Focus on object-oriented design and interactive gameplay mechanics.",
        highlights: [
            "Developed complete 2D game in C++.",
            "Implemented simple AI behaviors for game entities.",
            "Created graphical interface using gtk.",
            "Applied object-oriented design principles.",
        ],
        tags: ["Computer Graphics", "Simulation"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/planet-donut-simulation",
                description: "C++ game implementation.",
            },
        ],
    },
    {
        slug: "safe-intelligent-systems",
        title: "Safe Intelligent Systems Analysis",
        course: "CSE202 - École Polytechnique de Paris",
        timeline: "2022",
        summary: "Studied safety considerations in AI and autonomous systems design.",
        description:
            "Course project examining safety principles for intelligent and autonomous systems. Analyzed failure modes, safety constraints, and design methodologies for creating reliable AI systems.",
        highlights: [
            "Analyzed AI system safety requirements.",
            "Studied failure mode analysis techniques.",
            "Examined safety-critical design principles.",
            "Explored verification and validation methods.",
        ],
        tags: ["Deep Learning", "Control"],
        resources: [
        ],
    },
    {
        slug: "carbon-nanotubes-transistors",
        title: "Carbon Nanotube Transistor Fabrication",
        course: "PHY573A - École Polytechnique de Paris",
        timeline: "2022",
        summary: "Experimental design and fabrication of single-walled carbon nanotube transistors.",
        description:
            "Laboratory project at École Polytechnique de Paris involving experimental design of SWCNT (Single-Walled Carbon Nanotube) transistors. Hands-on experience with nanofabrication techniques based on state-of-the-art research knowledge in carbon nanotube electronics.",
        highlights: [
            "Fabricated carbon nanotube transistor structures.",
            "Applied clean room nanofabrication techniques.",
            "Characterized electrical properties of SWCNT devices.",
            "Connected practical work with current research literature.",
        ],
        tags: ["Nanotechnology", "Electronics"],
        resources: [
        ],
    },
    {
        slug: "optical-path-motor-control",
        title: "Optical Path & Motor Control System",
        course: "Lino Biotech (Miltenyi Biotec) - Internship",
        timeline: "2024",
        summary: "Developed motor control pipeline for biosensor reader optical alignment with gradient ascent optimization algorithms.",
        description:
            "Internship project at Lino Biotech developing the complete motor control pipeline for the 'Sirius' biosensor reader. Designed layered architecture from firmware to React frontend, implementing gradient ascent optimization for laser coupling, surface focusing, and Fourier aperture alignment. System controls 5 stepper motors via CAN bus for precise optical path alignment.",
        highlights: [
            "Designed complete motor control architecture from firmware to UI.",
            "Implemented gradient ascent optimization for laser coupling.",
            "Developed surface focusing algorithm using texture score maximization.",
            "Created Fourier aperture alignment with image correlation.",
            "Built FastAPI backend and React frontend for instrument control.",
        ],
        tags: ["Robotics", "Control", "Photonics", "Electronics"],
        resources: [],
    },
    {
        slug: "biosensor-quality-analysis",
        title: "Automated Biosensor Quality Analysis Dashboard",
        course: "Lino Biotech (Miltenyi Biotec) - Internship",
        timeline: "2024",
        summary: "Built Streamlit dashboard for automated quality analysis of biosensor data with comprehensive scoring and anomaly detection.",
        description:
            "Internship project at Lino Biotech creating 'The Daniel Test' - an interactive Streamlit dashboard for automated quality analysis of mologram sensor data. Implemented comprehensive metrics including noise analysis, SNR evaluation, spike detection, and step event identification. System provides per-sensor grading and global chip pass/fail verdicts with configurable thresholds.",
        highlights: [
            "Developed interactive Streamlit dashboard for sensor analysis.",
            "Implemented 8 distinct quality metrics with weighted scoring.",
            "Created anomaly detection for spikes and step events.",
            "Built signal-to-noise ratio evaluation system.",
            "Designed reference curve comparison using RMSE.",
            "Integrated with Datadog for log monitoring.",
        ],
        tags: ["Bio-MedTech", "Signal Processing", "Deep Learning"],
        resources: [],
    },
    {
        slug: "mobile-robot-slam",
        title: "Autonomous Mobile Robot with SLAM",
        course: "ROB311 - École Polytechnique de Paris",
        timeline: "2023",
        summary: "Designed and fabricated an autonomous mobile robot from scratch with SLAM capability using ROS.",
        description:
            "Complete design and fabrication of an autonomous mobile robot during exchange year at École Polytechnique de Paris. Built from scratch including motors, Raspberry Pi, sensors, fiberglass structure, and 3D printed components. Programmed using C++, C, and ROS for path following and SLAM.",
        highlights: [
            "Designed and fabricated complete robot from scratch.",
            "Implemented SLAM algorithms for autonomous navigation.",
            "Developed in C++, C, and ROS for real-time control.",
            "Integrated multiple sensors for environment perception.",
        ],
        tags: ["Robotics", "Computer Vision", "Control", "Mechanical Design"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/raspberry-pi-slam-robot",
                description: "Robot control and SLAM implementation.",
            },
        ],
        featured: true,
    },
    {
        slug: "short-documentary",
        title: "10-Minute Documentary Film",
        course: "HUM Arts Course",
        timeline: "2024",
        summary: "Wrote, filmed, and edited a 10-minute documentary exploring personal and social themes.",
        description:
            "Creative project involving complete documentary production: scriptwriting, filming, and post-production editing. Worked in a team of two to create a compelling 10-minute documentary film titled 'OUI PAPA'.",
        highlights: [
            "Wrote documentary script and story structure.",
            "Filmed with professional techniques.",
            "Edited using Adobe Premiere Pro.",
            "Developed narrative and visual storytelling skills.",
        ],
        tags: [],
        resources: [
        ],
    },
    {
        slug: "fpga-digital-clock",
        title: "FPGA Digital Clock with Functions",
        course: "Digital Systems",
        timeline: "2021",
        summary: "Designed and implemented a digital clock with multiple functions on FPGA.",
        description:
            "Project implementing a feature-rich digital clock on FPGA hardware. Designed the digital logic, display drivers, and user interface for various clock functions including alarms, timers, and display modes.",
        highlights: [
            "Designed digital logic for clock functions.",
            "Implemented display drivers and timing circuits.",
            "Created user interface for multiple clock modes.",
            "Programmed FPGA using hardware description language.",
        ],
        tags: ["Electronics", "Control"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/fpga-digital-clock",
                description: "FPGA implementation and HDL code.",
            },
        ],
    },
    {
        slug: "microcontroller-room-monitor",
        title: "Microcontroller Room Occupation Monitor",
        course: "MICRO-210 Microcontrollers",
        timeline: "2022",
        summary: "Built an Atmel AVR microcontroller-based room monitor with entrance control.",
        description:
            "Embedded systems project creating a room occupation monitoring system using Atmel AVR microcontroller. Programmed in assembly language, controlling servo motor, distance sensors, buzzer, and LED panel screen for entrance monitoring and display.",
        highlights: [
            "Programmed AVR microcontroller in assembly language.",
            "Integrated servo motor for entrance control.",
            "Implemented distance sensing for occupancy detection.",
            "Created LED panel display interface.",
        ],
        tags: ["Electronics", "Control"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/avr-room-monitor",
                description: "AVR assembly implementation.",
            },
        ],
    },
    {
        slug: "balanced-isospring-oscillator",
        title: "Balanced IsoSpring Oscillator",
        course: "MICRO-201 Mechanism Design II",
        timeline: "2022",
        summary: "Designed an isotropic oscillator for mechanical pendulum time base with acceleration insensitivity.",
        description:
            "Group project (5 members) designing an isotropic oscillator with two degrees of freedom, insensitive to linear and angular accelerations. The mechanism serves as a time base for a mechanical pendulum, requiring precise kinematic design and analysis.",
        highlights: [
            "Designed isotropic oscillator mechanism.",
            "Achieved acceleration insensitivity through balanced design.",
            "Created complete CAD models and technical drawings.",
            "Performed kinematic analysis and optimization.",
        ],
        tags: ["Mechanical Design"],
        resources: [
            {
                type: "code",
                label: "Source Code",
                url : "https://github.com/danielmaleh/balanced-isospring-oscillator",
                description: "Matlab kinematic analysis and simulation.",
            },
        ],
    },
    {
        slug: "mechanical-orange-presser",
        title: "Mechanical Orange Presser",
        course: "ME-107 Mechanical Construction II",
        timeline: "2021",
        summary: "Designed and documented a mechanical orange pressing machine with complete manufacturing package.",
        description:
            "Mechanical design project creating a manual orange pressing machine. Developed complete design from concept through detailed CAD, technical drawings, and manufacturing documentation for fabrication.",
        highlights: [
            "Designed complete pressing mechanism.",
            "Created detailed CAD models in CATIA.",
            "Produced technical drawings for manufacturing.",
            "Optimized for simplicity and reliability.",
        ],
        tags: ["Mechanical Design"],
        resources: [
        ],
    }
];

export const FeaturedProjects = ProjectsData.filter((project) => project.featured);
