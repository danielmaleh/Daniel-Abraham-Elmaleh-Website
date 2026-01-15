import { FaLinkedin, FaRegIdBadge, FaGithub } from "react-icons/fa6";
import { RESUME_URL } from "@/data/config";


export const UserInfo = {
    name: "Daniel Abraham Elmaleh",
    profile_url: "/profile.png",
    headline: "MSc Micro-engineering @ EPFL | Photonics, Robotics & Biotech",
    email: "daniel1496@gmail.com",
    links: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/daniel-abraham-elmaleh-1496ch",
            icon: FaLinkedin,
        },
        {
            name: "Résumé",
            url: RESUME_URL,
            icon: FaRegIdBadge,
        },
        {
            name: "Github",
            url: "https://github.com/danielmaleh",
            icon: FaGithub,
        },
    ],
    biography: `
        Hi! I'm Daniel, a last year MSc student in Micro-engineering with a focus on Photonics at EPFL. I'm passionate about interdisciplinary domains where I can express and learn technical knowledge in Science and management for research or technological advancements.
        <div class="my-2"></div>
        My coursework and projects span Photonics, Robotics, Bio/MedTech, Neuroscience, MEMS, Nanotechnology, Machine Learning & Deep Learning, and Venture Capital. I've worked on projects ranging from autonomous mobile robots with SLAM to optogenetic neural interfaces and SERS-based biosensors for medical diagnostics.
        <div class="my-2"></div>
        With a Bachelor's in Micro-engineering from EPFL and an exchange year at École Polytechnique de Paris, I have hands-on experience in clean room fabrication, optical microscopy, and software development. I speak English (C2), French (native), and Hebrew (native).
        <div class="my-2"></div>
        Outside of engineering, I enjoy cinema, tennis, philosophy, and jazz music. Thanks for visiting! Feel free to <a href="mailto:daniel1496@gmail.com" target="_blank" rel="noopener noreferrer">get in touch</a> if you'd like to connect.
    `
}
