import epflLogo from "./images/epfl_logo.svg";
import linoLogo from "./images/lino_logo.avif";
import biosenseLogo from "./images/biosense_logo.png";
import mitLogo from "./images/mit_logo.svg";

export const WorkData = [
  // === PRESENT POSITIONS (sorted by start date, most recent first) ===
  {
    title: "Graduate Researcher",
    company: "MIT Media Lab | Fluid Interfaces Group",
    location: "Cambridge, MA, USA",
    years: "Jun 2026 - Present",
    logo: mitLogo,
    description: "Master's thesis (EPFL) hosted at MIT under Prof. Pattie Maes: a wearable near-infrared (NIR) system for non-invasive, drug-free brain stimulation. Designing and fabricating a head-mounted NIR device, developing embedded software for stimulus delivery, and running EEG-based human-subject experiments under an approved IRB protocol.",
  },
  {
    title: "Software & Systems Engineering Intern",
    company: "Lino Biotech (Miltenyi Biotec)",
    location: "Zurich, CH",
    years: "2025 - Present",
    logo: linoLogo,
    description: "System testing, software development, and experimental work supporting device improvement. Working with confocal molography technology. Tools: Python, Git, GitLab, Jira, Docker, VS Code.",
  },
  {
    title: "Student Body Member",
    company: "EPFL STI - School of Engineering Council",
    location: "Lausanne, CH",
    years: "2024 - Present",
    logo: epflLogo,
    description: "Attending meetings, participating in decisions while analyzing needs of the school.",
  },
  {
    title: "Physics Teaching Assistant",
    company: "EPFL & UNIL",
    location: "Lausanne, CH",
    years: "2022 - Present",
    logo: epflLogo,
    description: "Physics TA for preparatory year (CMS) and 1st years in forensic Science and Pharma at UNIL.",
  },
  // === PAST POSITIONS (sorted by end date, then start date, most recent first) ===
  {
    title: "Photonics Team Leader - SensUs Competition",
    company: "BioSense Team (EPFL)",
    location: "Eindhoven, NL",
    years: "2025",
    logo: biosenseLogo,
    description: "Led the Photonics team for EPFL's BioSense entry at the international SensUs biosensor competition. Developed SERS-based creatinine detection system using deep learning for spectral analysis.",
  },
  {
    title: "Research Project Intern",
    company: "Bio-nano-photonic System Lab (BIOS) - Prof. Hatice Altug",
    location: "EPFL, Lausanne",
    years: "2025",
    logo: epflLogo,
    description: "Development of SERS for continuous monitoring of Creatinine using transformers and Conv NN (Keras). Research on surface-enhanced Raman spectroscopy for medical diagnostics.",
  },
  {
    title: "Research Project Intern",
    company: "Nanophotonics and Metrology Lab (NAM) - Prof. Oliver Martin",
    location: "EPFL, Lausanne",
    years: "2024 - 2025",
    logo: epflLogo,
    description: "Research on Anti-Stokes phenomena in crystalline metals. Preparation, growth, etching & characterization of 2D gold flakes. AFM roughness characterization and optical measurements.",
  },
  {
    title: "Research Project Intern",
    company: "Laboratory of Semi-Conductor Materials (LMSC) - Prof. Anna Fontcuberta i Morral",
    location: "EPFL, Lausanne",
    years: "2023",
    logo: epflLogo,
    description: "Characterization, analysis and research of semiconductor nano-wires. Development of analytical software for results and data analysis (Python).",
  },
];
